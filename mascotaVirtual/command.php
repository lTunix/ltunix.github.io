<?php
require_once "conexion.php";

$login = $_REQUEST["login"];
$registro = $_REQUEST["registro"];
$password = $_REQUEST["password"];
$sesion = $_REQUEST["sesion"];

if (isset($_REQUEST['usuario'])) {
    $usuario = $_REQUEST["usuario"];
} else {
    session_start();
    $usuario = $_SESSION["usuario"];
}

if (isset($_REQUEST['guardar'])) {
    $guardar = $_REQUEST["guardar"];
    GuardarDatos();
}

if (isset($_REQUEST['tipo'])) {
    $tipo = $_REQUEST["tipo"];
}

if (isset($_REQUEST['nMascota'])) {
    $nMascota = $_REQUEST["nMascota"];
}

$urlHome = "index.php";
$urlHome2 = "home.php";

if ($login == "true") {
    Login();
}

if ($registro == "true") {
    Registro();
}

if ($sesion == "false") {
    cerrarSesion();
}

function Login()
{
    global $nombreConexion, $password, $usuario, $urlHome, $urlHome2, $login;
    date_default_timezone_set('America/Santiago');
    $fechaSesion = "";
    $fechaActual = date("Y-m-d H:i:s");
    $minutos = 0;

    $result = mysqli_query($nombreConexion, "SELECT * FROM usuario where nombre = '$usuario' && clave = '$password'");

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            session_start();
            $_SESSION["logueado"] = true;
            $_SESSION["usuario"] = $usuario;
            $fechaSesion = $row['last_sesion'];
            $login = "false";
        }
    } else {
        header('Location: ' . $urlHome . '?errorLogin=true');
    }

    $result = mysqli_query($nombreConexion, "SELECT * FROM mascota where mascota.idmascota = (SELECT idmascota FROM usuario where nombre = '$usuario')");
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $_SESSION["salud"] = $row['salud'];
            $_SESSION["higiene"] = $row['higiene'];
            $_SESSION["hambre"] = $row['hambre'];
            $_SESSION["tipo"] = $row['tipo'];
            $_SESSION["nMascota"] = $row['nombre'];

            var_dump($_SESSION["salud"]);
            var_dump($_SESSION["higiene"]);
            var_dump($_SESSION["hambre"]);

            if (intval(minutosTranscurridos($fechaActual, $fechaSesion)) > 0) {
                $minutos = intval(minutosTranscurridos($fechaActual, $fechaSesion));
                $higiene = $_SESSION["higiene"] - ($minutos * 0.2);
                $hambre = $_SESSION["hambre"] - ($minutos * 0.3);
                $salud = $_SESSION["salud"] - ($minutos * 0.06);

                if($higiene < 0){
                    $higiene = 0;
                }

                if($hambre < 0){
                    $hambre = 0;
                }

                if($salud < 0){
                    $salud = 0;
                }

                $_SESSION["salud"] = $salud;
                $_SESSION["higiene"] = $higiene;
                $_SESSION["hambre"] = $hambre;
            }

            header('Location: ' . $urlHome2);
        }
    }
}

function minutosTranscurridos($fecha_i, $fecha_f)
{
    $minutos = (strtotime($fecha_i) - strtotime($fecha_f)) / 60;
    $minutos = abs($minutos);
    $minutos = floor($minutos);
    return $minutos;
}

function Registro()
{
    global $nombreConexion, $password, $usuario, $urlHome, $nMascota, $tipo;
    $result = mysqli_query($nombreConexion, "INSERT INTO mascota(nombre, salud, higiene, hambre, tipo) values ('$nMascota', 30, 30, 30, $tipo)");
    if ($result == false) {
        header('Location: ' . $urlHome . '?errorRegistro=true');
        die();
    } else {
        header('Location: ' . $urlHome . '?registro=true');
    }
    $result = mysqli_query($nombreConexion, "INSERT INTO usuario(nombre, clave, idmascota) values ('$usuario', '$password', (SELECT idmascota FROM mascota ORDER BY idmascota DESC LIMIT 1))");
    if ($result == false) {
        header('Location: ' . $urlHome . '?errorRegistro=true');
        die();
    } else {
        header('Location: ' . $urlHome . '?registro=true');
    }
    //printf("Errormessage: %s\n", $nombreConexion->error);
}

function GuardarDatos()
{
    global $nombreConexion;
    date_default_timezone_set('America/Santiago');
    $fechaActual = date("Y-m-d H:i:s");
    $usuario = $_SESSION["usuario"];
    $hambre = $_POST["hambre"];
    $salud = $_REQUEST["salud"];
    $higiene = $_REQUEST["higiene"];
    mysqli_query($nombreConexion, "UPDATE mascota SET higiene=$higiene, hambre=$hambre, salud=$salud WHERE idmascota = (SELECT idmascota FROM usuario where nombre = '$usuario')");
    mysqli_query($nombreConexion, "UPDATE usuario SET last_sesion='$fechaActual' WHERE nombre = '$usuario'");
    //printf("Errormessage: %s\n", $nombreConexion->error);
    //printf("Affected rows (SELECT): %d\n", $nombreConexion->affected_rows);
    /*
        UPDATE table_name
        SET column1=value, column2=value2,...
        WHERE some_column=some_value 
        */
}

function cerrarSesion()
{
    GuardarDatos();
    $_SESSION["logueado"] = false;
}
