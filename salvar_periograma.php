<?php
// Exibir todos os erros para facilitar o debug
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

// Configurações de conexão
$host = 'localhost';
$db = 'ClinicaOdontologicaUNG';
$usuario = 'odonto';
$senha = 'senha_segura';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $usuario, $senha);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $dados = json_decode(file_get_contents('php://input'), true);

    if (!$dados) {
        http_response_code(400);
        echo json_encode(['mensagem' => 'JSON inválido']);
        exit;
    }

    $json_raw = json_encode($dados);

    $nome = $dados['patient_first_name'] . ' ' . $dados['patient_last_name'];
    $data_exame = date('Y-m-d');

    // Buscar ou criar paciente
    $stmt = $pdo->prepare("SELECT ID_Paciente FROM Pacientes WHERE Nome = ?");
    $stmt->execute([$nome]);
    $paciente = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$paciente) {
        $inserePaciente = $pdo->prepare("INSERT INTO Pacientes (Nome, Data_Nascimento, Sexo, Tipo_Documento) VALUES (?, ?, ?, ?)");
        $inserePaciente->execute([
            $nome,
            '2000-01-01',
            'Masculino',
            'Outro'
        ]);
        $id_paciente = $pdo->lastInsertId();
    } else {
        $id_paciente = $paciente['ID_Paciente'];
    }

    // Calcular índice de sangramento à sondagem (BOP%)
    $total_bop = 0;
    $total_regioes = 0;
    foreach ($dados as $k => $v) {
        if (preg_match('/^bop_\d{2}_[a-z]{1,3}$/', $k)) {
            $total_regioes++;
            if ($v == 1 || $v === "1") $total_bop++;
        }
    }
    $indice_sangramento = $total_regioes > 0 ? round(($total_bop / $total_regioes) * 100, 2) : null;

    // Calcular índice de placa se quiser (PI%)
    $total_pi = 0;
    $total_pi_regioes = 0;
    foreach ($dados as $k => $v) {
        if (preg_match('/^pi_\d{2}_[a-z]{1,3}$/', $k)) {
            $total_pi_regioes++;
            if ($v == 1 || $v === "1") $total_pi++;
        }
    }
    $indice_placa = $total_pi_regioes > 0 ? round(($total_pi / $total_pi_regioes) * 100, 2) : null;

    // Inserir Periograma (com JSON)
    $insere = $pdo->prepare("
        INSERT INTO Periograma (
            ID_Paciente, Data_Exame, Indice_de_Placa, Indice_Sangramento_Gengival, Dados_JSON
        ) VALUES (?, ?, ?, ?, ?)
    ");
    $insere->execute([
        $id_paciente,
        $data_exame,
        $indice_placa,
        $indice_sangramento,
        $json_raw
    ]);
    $id_periograma = $pdo->lastInsertId();

    // Inserir detalhes dos dentes (apenas região 'db' como exemplo)
    $sucesso = true;
    $erros = [];

    foreach ($dados as $key => $value) {
        if (preg_match('/^tooth_(\d{2})$/', $key, $matches)) {
            $dente = (int)$matches[1];
            $mob = $dados['mobility_' . $dente] ?? null;
            $furca = $dados['furcation_' . $dente . '_b'] ?? null; // <-- salva o valor original, inclusive 0
            $recessao = $dados['gm_' . $dente . '_db'] ?? null;
            $prof = $dados['pd_' . $dente . '_db'] ?? null;
            $obs = $dados['note_' . $dente] ?? '';
            $regiao = 'db';
            $perda_ossea = null;

            $sqlDet = "INSERT INTO Periograma_Detalhes (ID_Periograma, Dente, Profundidade, Mobilidade, Furca, Perda_Ossea, Recessao_Gengival, Observacao)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            $stmtDet = $pdo->prepare($sqlDet);
            try {
                $stmtDet->execute([
                    $id_periograma,
                    $dente,
                    $prof,
                    $mob,
                    $furca,
                    $perda_ossea,
                    $recessao,
                    $obs
                ]);
            } catch (PDOException $e) {
                $sucesso = false;
                $erros[] = "Erro ao inserir dente $dente: " . $e->getMessage();
            }
        }
    }

    if ($sucesso) {
        echo json_encode(["mensagem" => "Periograma e detalhes salvos com sucesso!"]);
    } else {
        http_response_code(500);
        echo json_encode(["mensagem" => "Alguns erros ocorreram.", "erros" => $erros]);
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['mensagem' => 'Erro: ' . $e->getMessage()]);
}
?>