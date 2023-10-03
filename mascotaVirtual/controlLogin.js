var form = document.getElementById('login');

var buttonE1 = document.getElementById('e1');
var buttonE2 = document.getElementById('e2');
var buttonE3 = document.getElementById('e3');

var register = document.getElementById("register");

var hoy = new Date();
var hora = hoy.getHours();

function redireccion() {
		if (location.protocol !== 'https:') {
		location.replace(`https:${location.href.substring(location.protocol.length)}`);
	}
}

document.getElementById("page-top").onload = redireccion(); 

register.addEventListener('click', function () {
    window.location.href = "registro.php";
});

buttonE1.addEventListener('click', function () {
    form.classList.add('error_1');
    setTimeout(function () {
      form.classList.remove('error_1');
    }, 3000);
  });

buttonE2.addEventListener('click', function () {
    form.classList.add('error_2');
    setTimeout(function () {
      form.classList.remove('error_2');
    }, 3000);
  });

  buttonE3.addEventListener('click', function () {
    form.classList.add('exito');
    setTimeout(function () {
      form.classList.remove('exito');
    }, 3000);
  });

  $(document).ready(function() {	
    function verificarHora() {
        hoy = new Date();
        hora = hoy.getHours();
        cambiarFondoHora();
    }
    setInterval(verificarHora, 100);
});
  
  function cambiarFondoHora(){
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