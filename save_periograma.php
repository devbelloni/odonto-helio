<?php
// Configurações de conexão com o banco de dados
$host = 'localhost';
$usuario = 'root'; // Substitua pelo seu usuário do MySQL
$senha = '221203Ma'; // Substitua pela sua senha do MySQL
$banco = 'ClinicaOdontologicaUNG';

// Habilitar exibição de erros para depuração (remova em produção)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Criar conexão com o MySQL
$conn = new mysqli($host, $usuario, $senha, $banco);

// Verificar conexão
if ($conn->connect_error) {
    die("Erro de conexão com o banco de dados: " . $conn->connect_error);
}

// Função para sanitizar os dados e evitar injeções
function sanitize($data) {
    if (is_null($data)) {
        return null;
    }
    return htmlspecialchars(strip_tags(trim($data)));
}

// Receber os dados do formulário
$nome_paciente = sanitize($_POST['nome_paciente'] ?? '');
$data_exame = sanitize($_POST['data_exame'] ?? '');
$indice_de_placa = isset($_POST['indice_de_placa']) ? (int)$_POST['indice_de_placa'] : 0;
$indice_sangramento_gengival = isset($_POST['indice_sangramento_gengival']) ? (int)$_POST['indice_sangramento_gengival'] : 0;
$profundidade_sondagem = isset($_POST['profundidade_sondagem']) ? (float)$_POST['profundidade_sondagem'] : 0.0;
$nivel_clinico_insercao = isset($_POST['nivel_clinico_insercao']) ? (float)$_POST['nivel_clinico_insercao'] : 0.0;
$sangramento_sondagem = isset($_POST['sangramento_sondagem']) ? (int)$_POST['sangramento_sondagem'] : 0;
$supuracao = isset($_POST['supuracao']) ? (int)$_POST['supuracao'] : 0;
$mobilidade_dentaria = isset($_POST['mobilidade_dentaria']) ? (int)$_POST['mobilidade_dentaria'] : 0;
$furca = !empty($_POST['furca']) ? (int)$_POST['furca'] : null;
$perda_ossea = !empty($_POST['perda_ossea']) ? (float)$_POST['perda_ossea'] : null;
$recessao_gengival = sanitize($_POST['recessao_gengival'] ?? '');
$observacoes = sanitize($_POST['observacoes'] ?? '');

// Validar dados obrigatórios
if (empty($nome_paciente) || empty($data_exame)) {
    $erro = "Erro: Nome do paciente e data do exame são obrigatórios. Valores recebidos: nome_paciente='$nome_paciente', data_exame='$data_exame'. Dados POST: " . print_r($_POST, true);
    die($erro);
}

// Validar o formato da data
if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $data_exame) || !strtotime($data_exame)) {
    die("Erro: A data do exame é inválida. Use o formato AAAA-MM-DD (ex.: 2025-04-11).");
}

// Buscar ou inserir o paciente na tabela Pacientes
$sql_paciente = "SELECT ID_Paciente FROM Pacientes WHERE Nome = ?";
$stmt_paciente = $conn->prepare($sql_paciente);
if (!$stmt_paciente) {
    die("Erro ao preparar a consulta de paciente: " . $conn->error);
}
$stmt_paciente->bind_param("s", $nome_paciente);
$stmt_paciente->execute();
$result_paciente = $stmt_paciente->get_result();

if ($result_paciente->num_rows > 0) {
    // Paciente encontrado
    $paciente = $result_paciente->fetch_assoc();
    $id_paciente = $paciente['ID_Paciente'];
} else {
    // Inserir novo paciente (dados mínimos para teste)
    $sql_insert_paciente = "INSERT INTO Pacientes (Nome, Data_Nascimento, Sexo) VALUES (?, '2000-01-01', 'Masculino')";
    $stmt_insert_paciente = $conn->prepare($sql_insert_paciente);
    if (!$stmt_insert_paciente) {
        die("Erro ao preparar a inserção de paciente: " . $conn->error);
    }
    $stmt_insert_paciente->bind_param("s", $nome_paciente);
    if ($stmt_insert_paciente->execute()) {
        $id_paciente = $conn->insert_id;
    } else {
        die("Erro ao inserir paciente: " . $conn->error);
    }
    $stmt_insert_paciente->close();
}
$stmt_paciente->close();

// Inserir os dados na tabela Periograma
$sql_periograma = "INSERT INTO Periograma (
    ID_Paciente, Data_Exame, Indice_de_Placa, Indice_Sangramento_Gengival,
    Profundidade_Sondagem, `Nivel_Clinico_Inserção`, Sangramento_Sondagem,
    Supuracao, Mobilidade_Dentaria, Furca, Perda_Ossea, Recessao_Gengival,
    Observacoes
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt_periograma = $conn->prepare($sql_periograma);
if (!$stmt_periograma) {
    die("Erro ao preparar a inserção de periograma: " . $conn->error);
}

// Bind dos parâmetros
$stmt_periograma->bind_param(
    "isiiiddiiidss",
    $id_paciente,
    $data_exame,
    $indice_de_placa,
    $indice_sangramento_gengival,
    $profundidade_sondagem,
    $nivel_clinico_insercao,
    $sangramento_sondagem,
    $supuracao,
    $mobilidade_dentaria,
    $furca,
    $perda_ossea,
    $recessao_gengival,
    $observacoes
);

// Executar a inserção
if ($stmt_periograma->execute()) {
    // Sucesso: exibir mensagem e redirecionar
    echo "<script>alert('Periograma salvo com sucesso!'); window.location.href='Gráfico Periodontal.html';</script>";
} else {
    // Erro: exibir mensagem e redirecionar
    echo "<script>alert('Erro ao salvar periograma: " . addslashes($conn->error) . "'); window.location.href='Gráfico Periodontal.html';</script>";
}

// Fechar statement e conexão
$stmt_periograma->close();
$conn->close();
?>