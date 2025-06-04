<?php
session_start();

require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include_once __DIR__ . '/DAO/MySQL.php';

// Ativa exibição de erros
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Recupera email salvo na sessão
$recebe_email = $_SESSION['email_recuperacao'] ?? '';

if (empty($recebe_email)) {
    header("Location: erro1.php");
    exit;
}

// Conecta ao banco
$mysql = new \MySQL();

// Verifica se o email existe no banco
$consultaEmail = $mysql->prepare("SELECT nome FROM usuarios WHERE email = ?");
$consultaEmail->execute([$recebe_email]);

if ($consultaEmail->rowCount() == 0) {
    header("Location: erro1.php"); // Email não encontrado
    exit;
}

// Gera uma senha temporária
$novaSenha = substr(md5(time()), 0, 6);

// Atualiza a senha no banco (SEM HASH)
$atualiza = $mysql->prepare("UPDATE usuarios SET senha = ? WHERE email = ?");
$atualiza->execute([$novaSenha, $recebe_email]);

if (!$atualiza) {
    echo "Erro ao atualizar a senha no banco.";
    exit;
}

// Pega nome do usuário
$dadosUsuario = $consultaEmail->fetch();
$nome = $dadosUsuario['nome'] ?? 'Usuário';

// Envio do email com a senha temporária
try {
    $mail = new PHPMailer(true);

    // Configurações do servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->SMTPAuth = true;

    // Autenticação do Gmail
    $mail->Username = 'eugarciapoliana@gmail.com';  // Seu email
    $mail->Password = 'puiiqusiszkbswkm';           // Senha de app do Gmail

    // Remetente e destinatário
    $mail->setFrom('wegolouvor@gmail.com', 'Seu Sistema');
    $mail->addAddress($recebe_email, $nome);

    // Conteúdo do email
    $mail->Subject = 'Recuperacaoo de senha';
    $mail->isHTML(true);
    $mail->Body = "
        <p>Olá, <b>$nome</b>!</p>
        <p>Recebemos uma solicitação de recuperação de senha.</p>
        <p>Sua senha temporária é: <strong>$novaSenha</strong></p>
        <p>Use essa senha para acessar o sistema e depois altere para uma nova de sua preferência.</p>
        <p>Se não foi você, ignore este email.</p>
    ";
    $mail->AltBody = "Olá, $nome! Sua senha temporária é: $novaSenha";

    $mail->send();

    // Limpa a sessão
    unset($_SESSION['email_recuperacao']);

    echo '<script>alert("Email enviado com a senha temporária!"); window.location.href = "processo.php";</script>';

} catch (Exception $e) {
    echo "Erro ao enviar email: {$mail->ErrorInfo}";
}
?>
