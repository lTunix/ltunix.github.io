<?php
$urlHome = "index.php";
session_start();
if ($_SESSION["logueado"] == false) {
    header('Location: ' . $urlHome);
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width" />
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
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="estiloHome.css">
    <link rel="stylesheet" href="node_modules/nes.css/css/nes.min.css">
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
    <title>Mascota Virtual</title>
</head>

<body>
    <p class="nes-pointer">
        <div>
            <button id="btnsong" class="nes-btn is-primary">Pausar música</button>
            <audio id="song" src="song2.mp3" autoplay="autoplay" loop="loop"></audio>
        </div>
        <div class="bienvenida">
            Bienvenid@ <?php echo $_SESSION["usuario"] ?>! <br><br>
            <div class="centrarStats">
                HAMBRE <button id="btnAlimento" class="nes-btn is-success">Alimentar</button>
                <div class="progressbar">
                    <div id="pgHambre"></div>
                </div> <br>
                SALUD <button id="btnSalud" class="nes-btn is-success">Cuidar</button>
                <div class="progressbar">
                    <div id="pgSalud"></div>
                </div> <br>
                HIGIENE <button id="btnLimpiar" class="nes-btn is-success">Limpiar</button>
                <div class="progressbar">
                    <div id="pgHigiene"></div>
                </div>
            </div>
        </div>
        <div>

            <div>
                <button onclick="cerrarSesion()" class="nes-btn is-error">Cerrar Sesión</button>
            </div>
        </div>
        <div>
            <button id="btnFullscreen" class="nes-btn" onclick="launchFullScreen(document.documentElement);"></button>
            <button id="btnExitFullscreen" class="nes-btn" onclick="cancelFullScreen();"></button>
        </div>
        <div id="personaje">
            <div id="nombrepersonaje"><?php echo $_SESSION["nMascota"] ?></div>
        </div>
    </p>
</body>

</html>

<script src="https://code.jquery.com/jquery-3.2.1.js"></script>
<script src="controlHome.js"></script>
<script>
    if (<?php echo $_SESSION["tipo"] ?> == 0) {
        var style = document.createElement('style');
        style.innerHTML =
            '#personaje {' +
            'font-size: 8px;' +
            'position:absolute;' +
            'bottom:0;' +
            'width:100%;' +
            'height:150px;' +
            'background: url("pet2.gif") no-repeat bottom;' +
            'background-size: 150px 120px;' +
            'text-align:center;' +
            'font-size:40px;' +
            'color:white;' +
            'margin-bottom: 40px;' +
            '}';

        var ref = document.querySelector("#personaje");

        ref.parentNode.insertBefore(style, ref);

    } else if (<?php echo $_SESSION["tipo"] ?> == 1) {
        var style = document.createElement('style');
        style.innerHTML =
            '#personaje {' +
            'font-size: 8px;' +
            'position:absolute;' +
            'bottom:0;' +
            'width:100%;' +
            'height:150px;' +
            'background: url("pet3.gif") no-repeat bottom;' +
            'background-size: 170px 140px;' +
            'text-align:center;' +
            'font-size:40px;' +
            'color:white;' +
            'margin-bottom: 40px;' +
            '}';

        var ref = document.querySelector("#personaje");

        ref.parentNode.insertBefore(style, ref);
    }

    document.getElementById("pgHambre").style.width = "<?php echo $_SESSION["hambre"] . "%" ?>";
    document.getElementById("pgSalud").style.width = "<?php echo $_SESSION["salud"] . "%" ?>";
    document.getElementById("pgHigiene").style.width = "<?php echo $_SESSION["higiene"] . "%" ?>";
</script>