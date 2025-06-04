<?php
session_start();

if(!isset($_SESSION["usuario_logado"])) {
    header("Location: login.php");
    exit;
}

if(isset($_GET["sair"])) {
    unset($_SESSION["usuario_logado"]);
    unset($_SESSION["usuario_level"]);  // Também limpar o level ao sair
    header("Location: login.php");
    exit;
}

try {

    include 'DAO/MySQL.php';

    $mysql = new MySQL();

    $stmt = $mysql->prepare("SELECT nome FROM usuarios WHERE id=:marcador_id"); 
    $stmt->execute(array('marcador_id' => $_SESSION['usuario_logado'] ));

    $dados_do_usuario = $stmt->fetchObject();

} catch(Exception $e) {
    echo $e->getMessage();
}

// Pega o nível do usuário da sessão, assume 3 se não existir
$nivel = $_SESSION["usuario_level"] ?? 3;

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Área Restrita</title>
    <style>
        :root {
            --color-primary: #ecf0f1;
            --color-secundary: #58af9b;
            --color-terciary: #fff;
            --color-quadriary: #7f8c8d;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: var(--color-primary);
            display: flex;
            min-height: 100vh;
        }

        .sidebar {
            width: 220px;
            background-color: var(--color-quadriary);
            color: var(--color-terciary);
            padding: 20px;
        }

        .sidebar h2 {
            margin-bottom: 20px;
            text-align: center;
        }

        .sidebar a {
            display: block;
            color: var(--color-terciary);
            text-decoration: none;
            padding: 10px;
            margin-bottom: 10px;
            background-color: var(--color-secundary);
            border-radius: 4px;
            transition: background-color 0.3s;
        }

        .sidebar a:hover {
            background-color: #469382; /* tom mais escuro da secundária */
        }

        .disabled-link {
            pointer-events: none;
            opacity: 0.5;
            cursor: default;
        }

        .content {
            flex: 1;
            padding: 20px;
        }

        .header {
            background-color: var(--color-secundary);
            color: var(--color-terciary);
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }

        .header h1 {
            font-size: 24px;
        }

        p {
            color: #333;
        }
    </style>
</head>
<body>

    <div class="sidebar">
        <h2>Menu</h2>
        <a href="#">Periograma</a>
        <?php if ($nivel == 3): ?>
            <a href="http://localhost/Sistema/Login/tela_cadastro.html" class="disabled-link">Cadastro</a>
        <?php else: ?>
            <a href="http://localhost/Sistema/Login/tela_cadastro.html">Cadastro</a>
        <?php endif; ?>
        <a href="index.php?sair=true">Sair</a>
    </div>

    <div class="content">
        <div class="header">
            <h1>Bem-vindo, <strong><?= htmlspecialchars($dados_do_usuario->nome) ?></strong></h1>
        </div>

        <p>Conteúdo da área restrita.</p>
    </div>

</body>
</html>
