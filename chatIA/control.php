<?php

include_once "conexion.php";



if($_REQUEST["mensaje"] != ""){

    $mensaje = $_REQUEST["mensaje"];

    $mysqli->query("SET NAMES 'utf8'"); //Para que se muestren las tildes correctamente    

    $result = mysqli_query($link, "SELECT id FROM emisor where emi_mensaje = '".$mensaje."'");
    
    /* Si Hay Resultados*/
    if(mysqli_num_rows($result)>0){
        $result = mysqli_query($link, "SELECT rec_mensaje from receptor where id_emi_mensaje = (SELECT id FROM emisor where emi_mensaje = '".$mensaje."')");
        if(mysqli_num_rows($result)>0){
            $arregloRespuesta=array();
            while ($row = $result->fetch_row()) {
                array_push($arregloRespuesta, $row[0]);
            }
            print $arregloRespuesta[rand(0, mysqli_num_rows($result)-1)];
        }else{            
            if(isset($_REQUEST["ensenar"]) == true){
                $mensajeAnterior = $_REQUEST["mensajeAnterior"];
                $result = mysqli_query($link, "INSERT INTO receptor (rec_mensaje, id_emi_mensaje) VALUES ('".$mensaje."', (SELECT id from emisor where id = (SELECT id FROM emisor where emi_mensaje = '".$mensajeAnterior."')))");
                echo "Gracias! He aprendido algo nuevo :)";
            }else{
                echo "Disculpa, ¿Me podrías enseñar la respuesta de lo que acabas de decir?";
            }
        }        
    }
    else{
        //INSERT DE LA PREGUNTA O FRASE INEXISTENTE        
        $result = mysqli_query($link, "INSERT INTO emisor (emi_mensaje) VALUES ('".$mensaje."')");        
        if(isset($_REQUEST["ensenar"]) == true){
            $mensajeAnterior = $_REQUEST["mensajeAnterior"];
            $result = mysqli_query($link, "INSERT INTO receptor (rec_mensaje, id_emi_mensaje) VALUES ('".$mensaje."', (SELECT id from emisor where id = (SELECT id FROM emisor where emi_mensaje = '".$mensajeAnterior."')))");
            echo "Gracias! He aprendido algo nuevo :)";
        }else{
            echo "Disculpa, ¿Me podrías enseñar la respuesta de lo que acabas de decir?";
        }
    }
}
?>