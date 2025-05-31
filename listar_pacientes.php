<?php
header('Content-Type: application/json');

$host = 'localhost';
$db = 'ClinicaOdontologicaUNG';
$usuario = 'odonto';
$senha = 'senha_segura';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $usuario, $senha);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Busca IDs de pacientes com periogramas
    $stmt = $pdo->query("SELECT DISTINCT ID_Paciente FROM Periograma ORDER BY ID_Paciente");
    $pacientes = $stmt->fetchAll(PDO::FETCH_COLUMN);

    if ($pacientes) {
        echo json_encode(['pacientes' => $pacientes]);
    } else {
        echo json_encode(['erro' => 'Nenhum paciente encontrado']);
    }
} catch (PDOException $e) {
    error_log("Erro PDO: " . $e->getMessage());
    echo json_encode(['erro' => $e->getMessage()]);
}
?>