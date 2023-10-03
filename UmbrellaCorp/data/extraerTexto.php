<?php

include ( '../PdfToText/PdfToText.phpclass' ) ;

$pdf 	=  new PdfToText ( "../document/".$_SERVER['REMOTE_ADDR']."mevacuno.pdf" ) ;
echo $pdf -> Text ; 

