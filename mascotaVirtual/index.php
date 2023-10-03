<?php 
        if(isset($_REQUEST['errorRegistro'])){
            if($_REQUEST['errorRegistro'] == true){
                echo '<script type="text/JavaScript">  
                        setTimeout(function() {
                            document.getElementById("e2").click();
                        }, 500);                       
                      </script>' ;
            }
        }
        
        if(isset($_REQUEST['errorLogin'])){
            if($_REQUEST['errorLogin'] == true){
                echo '<script type="text/JavaScript">  
                        setTimeout(function() {
                            document.getElementById("e1").click();
                        }, 500);                       
                      </script>' ;
            }
        }

        if(isset($_REQUEST['registro'])){
            if($_REQUEST['registro'] == true){
                echo '<script type="text/JavaScript">  
                        setTimeout(function() {
                            document.getElementById("e3").click();
                        }, 500);                       
                      </script>' ;
            }
        }
?>
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
<body id="page-top">
    <div class="login-container">
    <section class="login" id="login">
        <header>
        <h2>Mascota Virtual</h2>
        <h4>Bienvenid@!</h4>
        </header>
        <form class="login-form" action="command.php?login=true" method="post">
        <input id="usuario" name="usuario" type="text" class="login-input" placeholder="Usuario" required autofocus/>
        <input id="password"  name="password" type="password" class="login-input" placeholder="Password" required/>
        <input hidden name="login" value="true">
        <input hidden name="registro" value="false">
        <input hidden name="sesion" value="true">
        <div class="submit-container">
            <button type="submit" class="login-button">Iniciar Sesión</button>
            <button id="register" type="button" class="login-button">Registrarse</button>            
        </div>
        </form>
    </section>
    <p id="copyright">2020 - Marcos Fernández</p>
    </div>
    <button hidden id="e1"></button>
    <button hidden id="e2"></button>
    <button hidden id="e3"></button>
</body>
</html>

<script src="https://code.jquery.com/jquery-3.2.1.js"></script>
<script src="controlLogin.js"></script>

 
