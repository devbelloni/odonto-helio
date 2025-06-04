<?php
session_start();
include_once __DIR__ . '/DAO/MySQL.php';

// Ativa exibição de erros para ajudar no desenvolvimento (remova depois)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$mensagem = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $senha_temporaria = $_POST['senha_temporaria'] ?? '';
    $nova_senha = $_POST['nova_senha'] ?? '';
    $confirma_senha = $_POST['confirma_senha'] ?? '';

    if (empty($email) || empty($senha_temporaria)) {
        $mensagem = "Por favor, preencha email e senha temporária.";
    } elseif (empty($nova_senha) || empty($confirma_senha)) {
        $mensagem = "Por favor, preencha a nova senha e confirmação.";
    } elseif ($nova_senha !== $confirma_senha) {
        $mensagem = "Nova senha e confirmação não coincidem.";
    } else {
        $mysql = new \MySQL();

        // Consulta a senha atual para esse email
        $consulta = $mysql->prepare("SELECT senha FROM usuarios WHERE email = ?");
        $consulta->execute([$email]);

        if ($consulta->rowCount() === 0) {
            $mensagem = "Email não encontrado.";
        } else {
            $dados = $consulta->fetch();
            $senha_banco = $dados['senha'];

            // Compara direto a senha temporária (texto puro)
            if ($senha_temporaria === $senha_banco) {
                // Atualiza para a nova senha (texto puro, sem hash)
                $update = $mysql->prepare("UPDATE usuarios SET senha = ? WHERE email = ?");
                $update->execute([$nova_senha, $email]);

                if ($update->rowCount() > 0) {
                    $mensagem = "Senha atualizada com sucesso! Você já pode fazer login.";
                    // Pode redirecionar para login aqui se quiser
                    // header('Location: login.php');
                    // exit;
                } else {
                    $mensagem = "Erro ao atualizar a senha. Tente novamente.";
                }
            } else {
                $mensagem = "Senha temporária incorreta.";
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<title>Recuperar Senha</title>
<style>
    :root {
        --color-primary: #ecf0f1;
        --color-secundary: #58af9b;
        --color-terciary: #fff;
        --color-quadriary: #7f8c8d;
    }
    body {
        background: var(--color-primary);
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        color: var(--color-quadriary);
    }
    .container {
        background: var(--color-terciary);
        padding: 30px 40px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        width: 350px;
    }
    h2 {
        margin-bottom: 20px;
        color: var(--color-quadriary);
        text-align: center;
    }
    label {
        font-weight: bold;
        display: block;
        margin-bottom: 6px;
        color: var(--color-quadriary);
    }
    input[type="email"],
    input[type="password"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1.8px solid var(--color-primary);
        border-radius: 5px;
        font-size: 14px;
        transition: border-color 0.3s;
        background: var(--color-terciary);
        color: var(--color-quadriary);
    }
    input[type="email"]:focus,
    input[type="password"]:focus {
        border-color: var(--color-secundary);
        outline: none;
    }
    button {
        width: 100%;
        padding: 12px;
        background-color: var(--color-secundary);
        border: none;
        border-radius: 5px;
        font-size: 16px;
        color: var(--color-terciary);
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    button:hover {
        background-color: #3e8e7e; /* tom mais escuro do secundary */
    }
    p.mensagem {
        padding: 10px;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        color: #721c24;
        border-radius: 5px;
        margin-bottom: 15px;
        text-align: center;
        font-weight: 600;
    }
</style>
</head>
<body>
<div class="container">
    <h2>Recuperar Senha</h2>

    <?php if ($mensagem): ?>
        <p class="mensagem"><?php echo htmlspecialchars($mensagem); ?></p>
    <?php endif; ?>

<form method="post" action="">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="senha_temporaria">Senha Temporária (enviada no e-mail):</label>
    <input type="password" id="senha_temporaria" name="senha_temporaria" required>

    <label for="nova_senha">Nova Senha:</label>
    <input type="password" id="nova_senha" name="nova_senha" required>

    <label for="confirma_senha">Confirme a Nova Senha:</label>
    <input type="password" id="confirma_senha" name="confirma_senha" required>

    <button type="submit">Atualizar Senha</button>

    <!-- Botão Voltar -->
    <button type="button" onclick="window.location.href='login.php'" style="margin-top: 10px;">
        Voltar 
    </button>
</form>

</div>
</body>
</html>
