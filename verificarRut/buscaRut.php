<?php

if (isset($_REQUEST["rut"])) {
    $rut = $_REQUEST["rut"];
} else {
    echo '<table id="tblBuscaRut2" align="center">';
    echo '<tr>No existe data.</tr>';
    echo '</table>';
    die;
}

$ch = curl_init("https://api-rutificador.herokuapp.com/api/v1/persona/rut/" . $rut);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);

$arrDatos = json_decode($result);

echo '<table id="tblBuscaRut2" align="center">';
echo '<td>RUT</td>';
echo '<td>NOMBRE</td>';
echo '<td>SEXO</td>';
echo '<tr>';
echo '<td>'. $arrDatos->Nombre .'</td>';
echo '<td>'. $arrDatos->RUT .'</td>';
echo '<td>'. $arrDatos->Sexo .'</td>';
echo '</tr>';
echo '</table>';