<?php
try {
    include 'DAO/MySQL.php'; // Arquivo de conexão com o banco

    $mysql = new MySQL();

    // Coleta os dados enviados pelo formulário
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];
    $level = $_POST["level"];

    // Comando SQL simples para inserir no banco
    $sql = "INSERT INTO usuarios (nome, email, senha, level) VALUES (?, ?, ?, ?)";
    $stmt = $mysql->prepare($sql);
    $stmt->bindValue(1, $nome);
    $stmt->bindValue(2, $email);
    $stmt->bindValue(3, $senha); // senha em texto puro
    $stmt->bindValue(4, $level);
    $stmt->execute();

    // Mensagem de sucesso
    echo "<p style='color: green; font-family: Arial, sans-serif; font-size: 16px; text-align: center; margin-top: 20px;'>Cadastro realizado com sucesso!</p>";
    echo "<p style='text-align: center;'><a href='login.php'>Clique aqui para fazer login</a></p>";

} catch(Exception $e) {
    echo "<p style='color: red; font-family: Arial, sans-serif; font-size: 16px; text-align: center;'>Erro ao cadastrar: " . $e->getMessage() . "</p>";
    echo "<p style='text-align: center;'><a href='tela_cadastro.html'>Voltar para o cadastro</a></p>";
}
?>
