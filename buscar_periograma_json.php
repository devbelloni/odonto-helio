<?php
header('Content-Type: application/json');

$host = 'localhost';
$db = 'ClinicaOdontologicaUNG';
$usuario = 'odonto';
$senha = 'senha_segura';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $usuario, $senha);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if (!isset($_GET['id_paciente'])) {
        echo json_encode(['erro' => 'ID do paciente não informado']);
        exit;
    }

    $id_paciente = $_GET['id_paciente'];

    $stmt = $pdo->prepare("SELECT Dados_JSON FROM Periograma WHERE ID_Paciente = ? ORDER BY Data_Exame DESC LIMIT 1");
    $stmt->execute([$id_paciente]);

    $dado = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($dado) {
        echo $dado['Dados_JSON'];
    } else {
        echo json_encode(['erro' => 'Nenhum periograma encontrado']);
    }
} catch (PDOException $e) {
    echo json_encode(['erro' => $e->getMessage()]);
}
?>
