<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="apple-touch-icon" sizes="57x57" href="icon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="icon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="icon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="icon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="icon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="icon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="icon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="icon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="icon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="icon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="icon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="icon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="icon/favicon-16x16.png">
    <link rel="manifest" href="icon/manifest.json">
    <link rel="stylesheet" href="estiloLogin.css">
    <title>Mascota Virtual</title>
</head>

<body>
    <div class="login-container">
        <section class="login" id="login">
            <header>
                <h2>Registro</h2>
                <h4>Bienvenid@!</h4>
            </header>
            <form class="login-form" action="command.php" method="post">
                <input id="usuario" name="usuario" type="text" class="login-input" placeholder="Usuario" required autofocus />
                <input id="password" name="password" type="password" class="login-input" placeholder="Password" required />
                <input id="nMascota" name="nMascota" type="text" class="login-input" placeholder="Nombre Mascota" required />
                <select class="login-input" name="tipo" id="tipo">
                    <option value="0">Perro</option>
                    <option value="1">Gato</option>
                </select>
                <input hidden type="text" name="login" value="false">
                <input hidden type="text" name="registro" value="true">
                <input hidden type="text" name="sesion" value="false">
                <div class="submit-container">
                    <button type="submit" class="login-button">Confirmar</button>
                </div>
            </form>
        </section>
        <p id="copyright">2020 - Marcos Fernández</p>
    </div>
</body>

</html>

<script src="https://code.jquery.com/jquery-3.2.1.js"></script>
<script src="controlRegistro.js"></script>