<?php
session_start();

try {
    include 'DAO/MySQL.php';

    $mysql = new MySQL();

    $sql = "SELECT id, nome, level FROM usuarios WHERE email = ? AND senha = ?";
    $stmt = $mysql->prepare($sql);

    $stmt->bindValue(1, $_POST["email"]);
    $stmt->bindValue(2, $_POST["password"]);

    $stmt->execute();

    $usuario = $stmt->fetchObject();

    if ($usuario) {
        // Armazena ID e nível na sessão
        $_SESSION["usuario_logado"] = $usuario->id;
        $_SESSION["usuario_nome"] = $usuario->nome;
        $_SESSION["usuario_level"] = $usuario->level;

        // Redireciona para a página principal
        header("Location: index.php");
        exit();
    } else {
        // Login falhou
        header("Location: login.php?falhou=true");
        exit();
    }
} catch(Exception $e) {
    echo "Erro: " . $e->getMessage();
}
?>
