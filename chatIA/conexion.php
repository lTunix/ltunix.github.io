<?php
$mysqli = new mysqli("127.0.0.1", "cvmar_chatia", "marcos2012", "cvmarcos_chatia");
if ($mysqli->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$link = mysqli_connect("127.0.0.1", "cvmar_chatia", "marcos2012");

mysqli_select_db($link, "cvmarcos_chatia");
?>