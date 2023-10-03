<?php
//Por Marcos Fernandez
        $rut = $_POST["rut"];
        $cantidad = strlen($rut) - 1;
        $arrayRut = str_split($rut, 1);
        $contador = 2;
        $resultado = 0;
        $j = $cantidad;
        for ($i=0; $i <= $cantidad; $i++) { 
            if($contador > 7){                
                $contador = 2;
            }     
            $numero = intval($arrayRut[$j]);                  
            $suma = $numero * $contador;
            $resultado = $resultado + $suma;
                    
            $contador++;
            $j--;
            
        }   
        $resultadoTotal = $resultado;
        $resultado = $resultadoTotal % 11;
        $resultado = 11 - $resultado;
        
        if($resultado == 11){
            $resultado = 0;
        }else if($resultado == 10){
            $resultado = 'K';
        }
        echo $resultado;    
?>