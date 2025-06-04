<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="styles/reset.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
    <title>login odonto UNG</title>
</head>
<body>
    <main class="container">
        <div class="container__formulario">
            <h2 class="titulo">Faça login</h2>
            <p class="subtitulo">utilizando o seu email:</p>
            <form action="autenticador.php" method="POST" class="formulario">
                <label for="email">
                    <input type="email" name="email"  id="email" class="input" placeholder="email">
                </label>
                <label for="password">
                    <input type="password" name="password" id="password"  class="input" placeholder="senha">
                </label>
                <a href="recupera_senha.php" class="recupera_senha">Esqueceu a senha?</a>
                <button type="submit">Entrar</button>
            </form>
        </div>
    </main>
</body>
</html>