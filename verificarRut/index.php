<!DOCTYPE html>
<!-- Por Marcos Fernandez -->
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <title>Cálculo Digito Verificador Rut</title>
</head>

<body onload="redireccion()">
    <style type="text/css">
        .boton_personalizado {
            text-decoration: none;
            padding: 10px;
            font-weight: 600;
            font-size: 15px;
            color: #ffffff;
            background-color: #1883ba;
            border-radius: 6px;
            border: 2px solid #0016b0;
            text-align: center;
        }

        .contenido {
            background-color: #fafafa;
            margin: 1rem;
            margin-top: 15%;
            padding: 1rem;
            border: 2px solid #ccc;
            /* IMPORTANTE */
            text-align: center;
            border-radius: 10px;
        }

        .titulo {
            width: 100%;
            font-size: 35px;
            font-weight: bold;
            font-family: 'Courier New', Courier, monospace;
        }

        .verificador {
            text-align: center;
            font-size: 25px;
            width: 5%;
            border: 0.5px solid red;
            border-radius: 4px;
            font-weight: bold;
        }

        .msgError {
            color: red;
        }

        .rut {
            width: 155px;
            margin-left: 5px;
            margin-bottom: 10px;
            font-size: 25px;
        }

        .guion {
            font-weight: bold;
        }

        .copyright {
            font-family: 'Courier New', Courier, monospace;
        }
		
		table {
			border: 1px solid #fafafa;
			width: 25%;
		}
		
		th,
        td {
            border: 1px solid black;
            font-family: 'Courier New', Courier, monospace;
			width: 25%;
			border-radius: 5px;
        }
		
		.resultPersona {
			overflow-x: auto;
			padding-bottom: 10px;
		}
    </style>

    <div class="contenido">
        <label class="titulo">Calcula Dígito Verificador</label>
        <br><br><br>
        <label><b>Inserte el rut: <b /></label>
        <input type="text" class="rut" id="rut" placeholder="EJ: 12345678" required>
        <label class="guion">-</label>
        <input class="verificador" type="text" id="verificador" width="1%" disabled>
        <br><br>
        <input class="boton_personalizado" type="submit" name="" value="Calcular Dígito" id="calcular" onclick="digitoVer();">
        <input type="button" class="boton_personalizado" name="" value="Buscar persona por RUT" id="calcular" onclick="buscaRut();">
        <br><br>
        <label class="msgError" id="msgError"><b><b /></label>
			<div class="resultPersona">
        <table id="tblBuscaRut" align="center"></table>
			</div>
    </div>
    <center>
    <label>¿Quieres apoyarme con alguna donación?</label><br>
        <label>Haz click en el siguiente botón e introduce su valor en USD, ¡Gracias!</label><br><br>
        <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="business" value="SYR9W43B7TQWU" />
            <input type="hidden" name="no_recurring" value="1" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_CL/i/scr/pixel.gif" width="1" height="1" />
        </form></center><br>
    <label class="copyright">
        <center>Marcos Fernández - 2020</center>
    </label>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>

</body>

</html>

<script>
    function digitoVer() {

        if (document.getElementById('rut').value == "") {
            document.getElementById('msgError').innerHTML = "Error: No puede quedar el campo vacío.";
            document.getElementById('verificador').focus();
            return false;
        } else {
            document.getElementById('msgError').innerHTML = "";
        }

        setFormato();
        soloNumero(document.getElementById('verificador'));



        var param = {
            rut: document.getElementById("rut").value
        };

        $.ajax({
            data: param,
            url: "command.php",
            method: "post",
            success: function(data) {
                document.getElementById('verificador').value = data;
            }
        });
    }

    function formateaRut() {

        rut = document.getElementById("rut").value + document.getElementById('verificador').value;

        var actual = rut.replace(/^0+/, "");
        if (actual != '' && actual.length > 1) {
            var sinPuntos = actual.replace(/\./g, "");
            var actualLimpio = sinPuntos.replace(/-/g, "");
            var inicio = actualLimpio.substring(0, actualLimpio.length - 1);
            var rutPuntos = "";
            var i = 0;
            var j = 1;
            for (i = inicio.length - 1; i >= 0; i--) {
                var letra = inicio.charAt(i);
                rutPuntos = letra + rutPuntos;
                if (j % 3 == 0 && j <= inicio.length - 1) {
                    rutPuntos = "." + rutPuntos;
                }
                j++;
            }
            var dv = actualLimpio.substring(actualLimpio.length - 1);
            rutPuntos = rutPuntos + "-" + dv;
        }
        return rutPuntos;
    }

    function buscaRut() {

        var param = {
            rut: formateaRut()
        };

        $.ajax({
            data: param,
            url: "buscaRut.php",
            method: "post",
            success: function(data) {

                if(document.getElementById("verificador").value == ""){
                    document.getElementById('msgError').innerHTML = "Error: Debe calcular primero el dígito verificador.";
                    return false;
                }

                var myAnchor = document.getElementById("tblBuscaRut");
                var mySpan = document.createElement("table");
                mySpan.setAttribute("id", "tblBuscaRut");
                mySpan.setAttribute("align", "center");
                mySpan.innerHTML = data;
                myAnchor.parentNode.replaceChild(mySpan, myAnchor);

                var arrRows = document.getElementById("tblBuscaRut").getElementsByTagName("tr");
                if (arrRows.length <= 1) {
                    var myAnchor = document.getElementById("tblBuscaRut");
                    var mySpan = document.createElement("table");
                    mySpan.setAttribute("id", "tblBuscaRut");
                    mySpan.setAttribute("align", "center");
                    mySpan.innerHTML = "Ups! No existe la persona que intentas buscar.";
                    myAnchor.parentNode.replaceChild(mySpan, myAnchor);
                }
            }
        });
    }

    function setFormato() {
        document.getElementById('rut').value = document.getElementById('rut').value.replace(/[.]/g, '');
    }

    function soloNumero(inputtxt) {
        var numbers = /^[0-9]+$/;
        inputtxt.value = document.getElementById('rut').value;
        if (inputtxt.value.match(numbers)) {
            document.getElementById('msgError').innerHTML = "";
        } else {
            document.getElementById('msgError').innerHTML = "Error: Por favor, ingrese solo caracteres numéricos.";
            document.getElementById('verificador').value = "";
            document.getElementById('rut').value = "";
            document.getElementById('rut').focus();
            return false;
        }
    }
	
	function redireccion() {
		if (location.protocol !== 'https:') {
		location.replace(`https:${location.href.substring(location.protocol.length)}`);
	}
}
</script>