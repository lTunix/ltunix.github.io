window.onload = function() {
    //respuesta = document.getElementById("chat");
    //respuesta.value = "Bot: Hola, soy un Bot en modo de prueba para aprender a chatear, hazme preguntas o escribe algo para aprender sobre qué responder.";
    document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML + '<div class="yours messages"><div class="message bot">Hola, soy un Bot en modo de prueba para aprender a chatear, hazme preguntas o escribe algo para aprender sobre qué responder.</div></div>';

$("#mensaje").keypress(function(event) {
            if (event.keyCode === 13 && document.getElementById("enviar").disabled == false) {
                $("#enviar").click();
            }else if(event.keyCode === 13 && document.getElementById("enviar").disabled == true){
                $("#ensenar").click();
            }
        });
};

function procesarMensaje() {
    mensaje = document.getElementById("mensaje").value;
    if (mensaje != null || mensaje != "") {
        respuesta = document.getElementById("chat");
        //respuesta.value = respuesta.value + "\n\nUsuario: " + mensaje;
        document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML + '<div class="mine messages"><div class="message last">' + mensaje + '</div></div>';
    }

    var http = new XMLHttpRequest();
    var url = 'control.php';
    var params = 'mensaje=' + mensaje;
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            //alert(http.responseText);
            respuesta = document.getElementById("chat");
            //respuesta.value = respuesta.value + "\n\nBot: " + http.responseText;
            document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML + '<div class="yours messages"><div class="message bot">' + http.responseText + '</div></div>';
            //if (http.responseText == "Disculpa, ¿Me podrías enseñar la respuesta de lo que acabas de decir?") {            

            mensajeAnterior = document.getElementById("mensajeAnterior");
            mensajeAnterior.value = document.getElementById("mensaje").value;

            var scrollingElement = (document.getElementById("chat"));
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
            document.getElementById("mensaje").value = "";

            if (http.responseText == "Disculpa, ¿Me podrías enseñar la respuesta de lo que acabas de decir?") {
                document.getElementById("mensaje").value = "";
                document.getElementById("enviar").disabled = true;
                document.getElementById("enviar").style.background = "grey";
            } else {
                document.getElementById("enviar").disabled = false;
                document.getElementById("enviar").style.background = "#4CAF50";
            }
            //}
        }
    }
    http.send(params);
}

function ensenarMensaje() {
    mensaje = document.getElementById("mensaje").value;
    if (mensaje != null || mensaje != "") {
        respuesta = document.getElementById("chat");
        respuesta.value = respuesta.value + "\n\nUsuario: " + mensaje;
    }

    mensajeAnterior = document.getElementById("mensajeAnterior").value;

    var http = new XMLHttpRequest();
    var url = 'control.php';
    var params = 'mensaje=' + mensaje + "&ensenar=true" + "&mensajeAnterior=" + mensajeAnterior;
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            //alert(http.responseText);
            respuesta = document.getElementById("chat");
            document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML + '<div class="yours messages"><div class="message bot">' + http.responseText + '</div></div>';
            //respuesta.value = respuesta.value + "\n\nBot: " + http.responseText;

            var scrollingElement = (document.getElementById("chat"));
            scrollingElement.scrollTop = scrollingElement.scrollHeight;

            document.getElementById("mensaje").value = "";
            document.getElementById("enviar").disabled = false;
            document.getElementById("enviar").style.background = "#4CAF50";
        }
    }
    http.send(params);
}