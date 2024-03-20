function redireccion() {
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    return;
  }

  if (location.protocol !== 'https:') {
    // Redireccionar a HTTPS
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
  }
}

function volver() {
  document.getElementById("enlaces").style.display = "block";
  fetch("resumen.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("descripcion").innerHTML = text));
  x = 0;
}

function experiencia() {
  document.getElementById("enlaces").style.display = "none";
  fetch("experiencia.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("descripcion").innerHTML = text));
}

function educacion() {
  document.getElementById("enlaces").style.display = "none";
  fetch("educacion.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("descripcion").innerHTML = text));
}

function habilidades() {
  document.getElementById("enlaces").style.display = "none";
  fetch("habilidades.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("descripcion").innerHTML = text));
}

function proyectos() {
  document.getElementById("enlaces").style.display = "none";
  fetch("proyectos.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("descripcion").innerHTML = text));
}

function logros() {
  document.getElementById("enlaces").style.display = "none";
  fetch("logros.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("descripcion").innerHTML = text));
}

function portafolioVTEX(){
  document.getElementById("enlaces").style.display = "none";
  fetch("vtexio.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("descripcion").innerHTML = text));
}

let x = 0;
function avanzar() {
  var fin = false;
  for (let i = 0; i < document.getElementsByClassName("xp").length; i++) {
    if (
      document.getElementsByClassName("xp")[i].style.display == "" ||
      document.getElementsByClassName("xp")[i].style.display == "block"
    ) {
      document.getElementsByClassName("xp")[i].style.display = "none";
      if (x == document.getElementsByClassName("xp").length - 1) {
        document.getElementsByClassName("xp")[0].style.display = "block";
        fin = true;
      } else {
        document.getElementsByClassName("xp")[x + 1].style.display = "block";
      }
    }
  }
  if (fin) {
    x = 0;
  } else {
    x = x + 1;
  }
}

function retroceder() {
  var fin = false;
  for (let i = 0; i < document.getElementsByClassName("xp").length; i++) {
    if (
      document.getElementsByClassName("xp")[i].style.display == "" ||
      document.getElementsByClassName("xp")[i].style.display == "block"
    ) {
      document.getElementsByClassName("xp")[i].style.display = "none";
      if (x <= 0) {
        x = document.getElementsByClassName("xp").length;
        document.getElementsByClassName("xp")[
          document.getElementsByClassName("xp").length - 1
        ].style.display = "block";
      } else {
        document.getElementsByClassName("xp")[x - 1].style.display = "block";
      }
    }
  }
  if (fin) {
    x = document.getElementsByClassName("xp").length - 1;
  } else {
    x = x - 1;
  }
}
