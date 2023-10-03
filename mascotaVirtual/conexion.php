<?php
	$hostname="127.0.0.1";
	$username="cvmar_root";
	$password="marcos2012";
	$dbname="cvmarcos_mascotavirtual";
    
    $nombreConexion = mysqli_connect($hostname , $username , $password, $dbname);
    $nombreConexion->set_charset("utf8");

    if ($nombreConexion->connect_errno) {
        echo "Fallo al conectar a MySQL: (" . utf8_encode($mysqli->connect_errno) . ") " . utf8_encode($mysqli->connect_error);
    }
?>