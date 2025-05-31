<?php
header('Content-Type: application/json');

$host = 'localhost';
$db = 'ClinicaOdontologicaUNG';
$usuario = 'root';
$senha = 'sua_senha_segura';
try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $dados = json_decode(file_get_contents('php://input'), true);

    if (!$dados) {
        echo json_encode(['mensagem' => 'JSON inválido']);
        exit;
    }

    $json_raw = json_encode($dados);

    // Captura nome e data (ajuste conforme a estrutura do seu JSON)
    $nome = $dados['patient_first_name'] . ' ' . $dados['patient_last_name'];
    $data_exame = date('Y-m-d');  // ou ajuste para pegar do JSON

    // Localiza ou cria paciente
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

    // Extrai dados essenciais para as colunas principais
    $indice_placa = isset($dados['summary']['mean_PI']) && $dados['summary']['mean_PI'] > 0 ? 1 : 0;
    $indice_sangramento = isset($dados['summary']['mean_BOP']) && $dados['summary']['mean_BOP'] > 0 ? 1 : 0;

    // Insere na tabela Periograma
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

    echo json_encode(['mensagem' => 'Periograma salvo com sucesso!']);

} catch (PDOException $e) {
    echo json_encode(['mensagem' => 'Erro: ' . $e->getMessage()]);
}
?>
