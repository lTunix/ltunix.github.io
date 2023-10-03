<?php

foreach ($_FILES["pdf"]["error"] as $clave => $error) {
    if ($error == UPLOAD_ERR_OK) {
        $nombre_tmp = $_FILES["pdf"]["tmp_name"][$clave];
        // basename() puede evitar ataques de denegació del sistema de ficheros;
        // podría ser apropiado más validación/saneamiento del nombre de fichero
        $nombre = basename($_FILES["pdf"]["name"][$clave]);
        move_uploaded_file($nombre_tmp, "../document/".$_SERVER['REMOTE_ADDR']."mevacuno.pdf");
    }
}