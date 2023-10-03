var btncancion = document.getElementById("btnsong");
var cancion = document.getElementById("song");
var hoy = new Date();
var hora = hoy.getHours();

btncancion.addEventListener("click", function () {
    if (cancion.paused == false) {
        cancion.pause();
        btncancion.innerHTML = "Play música";
    } else {
        cancion.play();
        btncancion.innerHTML = "Pausar música";
    }
});

function cerrarSesion() {
    var hambre = document.getElementById("pgHambre").style.width;
    hambre = parseInt(hambre.replace('%', ''));

    var higiene = document.getElementById("pgHigiene").style.width;
    higiene = parseInt(higiene.replace('%', ''));

    var salud = document.getElementById("pgSalud").style.width;
    salud = parseInt(salud.replace('%', ''));

    var http = new XMLHttpRequest();
    var url = 'command.php';
    var params = 'sesion=false&login=false&registro=false&password=false&hambre=' + hambre + '&salud=' + salud + '&higiene=' + higiene;
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function () { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            window.location.href = "index.php";
        }
    }
    http.send(params);
}

function launchFullScreen(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}
// Lanza en pantalla completa en navegadores que lo soporten
function cancelFullScreen() {
    if (document.cancelFullScreen) {
        document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
}

$(document).ready(function () {
    verificarHora();
    function verificarHora() {
        hoy = new Date();
        hora = hoy.getHours();
        cambiarFondoHora();
        controlEstados();
        guardar();
        
    }
    setInterval(verificarHora, 60000);
});

btnAlimentar = document.getElementById("btnAlimento");
btnCuidar = document.getElementById("btnSalud");
btnLimpiar = document.getElementById("btnLimpiar");

btnAlimentar.addEventListener("click", function () {
    alimentar();
});

btnCuidar.addEventListener("click", function () {
    cuidar();
});

btnLimpiar.addEventListener("click", function () {
    limpiar();
});

function guardar(){
    var hambre = document.getElementById("pgHambre").style.width;
        hambre = parseInt(hambre.replace('%', ''));

        var higiene = document.getElementById("pgHigiene").style.width;
        higiene = parseInt(higiene.replace('%', ''));

        var salud = document.getElementById("pgSalud").style.width;
        salud = parseInt(salud.replace('%', ''));

        var http = new XMLHttpRequest();
        var url = 'command.php';
        var params = 'guardar=true&sesion=false&login=false&registro=false&password=false&hambre=' + hambre + '&salud=' + salud + '&higiene=' + higiene;
        http.open('POST', url, true);

        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function () { //Call a function when the state changes.
            if (http.readyState == 4 && http.status == 200) {

            }
        }
        http.send(params);
}

function alimentar() {
    var hambre = document.getElementById("pgHambre").style.width;
    hambre = parseInt(hambre.replace('%', '')) + 1;
    document.getElementById("pgHambre").style.width = hambre.toString() + "%";

    if (hambre > 100) {
        document.getElementById("pgHambre").style.width = "100%";
    }

    if (hambre > 50) {
        document.getElementById("pgHambre").style.backgroundColor = "greenyellow";
    } else if (hambre < 50 && hambre > 30) {
        document.getElementById("pgHambre").style.backgroundColor = "orange";
    } else if (hambre <= 30) {
        document.getElementById("pgHambre").style.backgroundColor = "red";
    }
    guardar();
}

function limpiar() {
    var higiene = document.getElementById("pgHigiene").style.width;
    higiene = parseInt(higiene.replace('%', '')) + 1;
    document.getElementById("pgHigiene").style.width = higiene.toString() + "%";

    if (higiene > 100) {
        document.getElementById("pgHigiene").style.width = "100%";
    }

    if (higiene > 50) {
        document.getElementById("pgHigiene").style.backgroundColor = "greenyellow";
    } else if (higiene < 50 && higiene > 30) {
        document.getElementById("pgHigiene").style.backgroundColor = "orange";
    } else if (higiene <= 30) {
        document.getElementById("pgHigiene").style.backgroundColor = "red";
    }
    guardar();
}

function cuidar() {
    var salud = document.getElementById("pgSalud").style.width;
    salud = parseInt(salud.replace('%', '')) + 1;
    document.getElementById("pgSalud").style.width = salud.toString() + "%";

    if (salud > 100) {
        document.getElementById("pgSalud").style.width = "100%";
    }

    if (salud > 50) {
        document.getElementById("pgSalud").style.backgroundColor = "greenyellow";
    } else if (salud < 50 && salud > 30) {
        document.getElementById("pgSalud").style.backgroundColor = "orange";
    } else if (salud <= 30) {
        document.getElementById("pgSalud").style.backgroundColor = "red";
    }
    guardar();
}

function controlEstados() {
    var hambre = document.getElementById("pgHambre").style.width;
    var salud = document.getElementById("pgSalud").style.width;
    var higiene = document.getElementById("pgHigiene").style.width;

    hambre = parseInt(hambre.replace('%', '')) - 1;
    salud = parseInt(salud.replace('%', '')) - 0.5;
    higiene = parseInt(higiene.replace('%', '')) - 2;

    if (hambre > 50) {
        document.getElementById("pgHambre").style.backgroundColor = "greenyellow";
    } else if (hambre < 50 && hambre > 30) {
        document.getElementById("pgHambre").style.backgroundColor = "orange";
    } else if (hambre <= 30) {
        document.getElementById("pgHambre").style.backgroundColor = "red";
    }

    if (salud > 50) {
        document.getElementById("pgSalud").style.backgroundColor = "greenyellow";
    } else if (salud < 50 && salud > 30) {
        document.getElementById("pgSalud").style.backgroundColor = "orange";
    } else if (salud <= 30) {
        document.getElementById("pgSalud").style.backgroundColor = "red";
    }

    if (higiene > 50) {
        document.getElementById("pgHigiene").style.backgroundColor = "greenyellow";
    } else if (higiene < 50 && higiene > 30) {
        document.getElementById("pgHigiene").style.backgroundColor = "orange";
    } else if (higiene <= 30) {
        document.getElementById("pgHigiene").style.backgroundColor = "red";
    }

    document.getElementById("pgHambre").style.width = hambre.toString() + "%";
    document.getElementById("pgSalud").style.width = salud.toString() + "%";
    document.getElementById("pgHigiene").style.width = higiene.toString() + "%";
}

function cambiarFondoHora() {
    switch (hora) {
        case 00:
            document.body.style.background = "url('backgroundRT/8.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 01:
            document.body.style.background = "url('backgroundRT/8.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 02:
            document.body.style.background = "url('backgroundRT/8.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 03:
            document.body.style.background = "url('backgroundRT/8.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 04:
            document.body.style.background = "url('backgroundRT/8.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 05:
            document.body.style.background = "url('backgroundRT/0.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 06:
            document.body.style.background = "url('backgroundRT/0.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 07:
            document.body.style.background = "url('backgroundRT/1.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 08:
            document.body.style.background = "url('backgroundRT/1.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 09:
            document.body.style.background = "url('backgroundRT/2.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 10:
            document.body.style.background = "url('backgroundRT/2.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 11:
            document.body.style.background = "url('backgroundRT/3.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 12:
            document.body.style.background = "url('backgroundRT/3.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 13:
            document.body.style.background = "url('backgroundRT/3.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 14:
            document.body.style.background = "url('backgroundRT/3.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 15:
            document.body.style.background = "url('backgroundRT/3.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 16:
            document.body.style.background = "url('backgroundRT/3.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 17:
            document.body.style.background = "url('backgroundRT/3.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 18:
            document.body.style.background = "url('backgroundRT/4.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 19:
            document.body.style.background = "url('backgroundRT/5.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 20:
            document.body.style.background = "url('backgroundRT/6.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 21:
            document.body.style.background = "url('backgroundRT/7.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 22:
            document.body.style.background = "url('backgroundRT/8.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        case 23:
            document.body.style.background = "url('backgroundRT/8.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
        default:
            document.body.style.background = "url('backgroundRT/3.gif') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            break;
    }
}


//background: url("background2.gif") no-repeat center center fixed;