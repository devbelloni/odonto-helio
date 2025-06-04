<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Recuperar Senha</title>
    <link rel="stylesheet" href="styles/recuperar_senha.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
</head>
<body>
    <div class="container">
        <div class="form-container">
            <h2>Recuperar Senha</h2>
            <p>Digite seu e-mail para receber um link de redefinição:</p>
            <form id="recuperarForm" action="enviar_email.php" method="POST">
                <label>
                    <i class="far fa-envelope"></i>
                    <input type="email" id="email" name="email" placeholder="Seu e-mail" required />
                </label>
                <button type="submit">Enviar</button>
            </form>
            <p id="mensagem" class="mensagem"></p>
            <a href="index.php" class="voltar">← Voltar ao login</a>
        </div>
    </div>
    <script src="js/recuperar_senha.js"></script>
</body>
</html>
