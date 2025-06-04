<?php
session_start();
include 'DAO/MySQL.php';

// Ativa exibição de erros
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Conecta ao banco
$mysql = new \MySQL();

// Recebe o email do formulário
$recebe_email = $_POST['email'] ?? '';

if (empty($recebe_email)) {
    header("Location: erro1.php");
    exit;
}

// Verifica se o email existe no banco
$consultaEmail = $mysql->prepare("SELECT nome, email FROM usuarios WHERE email = ?");
$consultaEmail->execute([$recebe_email]);

if ($consultaEmail->rowCount() == 0) {
    header("Location: erro1.php"); // Email não encontrado
    exit;
}

// Salva o email na sessão para usar no próximo arquivo
$_SESSION['email_recuperacao'] = $recebe_email;

// Redireciona para o mailer_envio.php
header("Location: mailer_envio.php");
exit;
?>
