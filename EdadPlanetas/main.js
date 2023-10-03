document.getElementById("calcular").onclick = function () {
  if (
    document.getElementById("fechanac").value == null ||
    document.getElementById("fechanac").value == ""
  ) {
    alert("Por favor ingrese una fecha de nacimiento.");
    return false;
  }

  var fechaInicio = new Date(document.getElementById("fechanac").value).getTime();
  var fechaFin = new Date().getTime();

  var diff = fechaFin - fechaInicio;

  var diasTranscurrido = diff / (1000 * 60 * 60 * 24);

  document.getElementById("edadMercurio").innerHTML     = (diasTranscurrido / 88).toFixed(2) + " años";
  document.getElementById("edadVenus").innerHTML        = (diasTranscurrido / 225).toFixed(2) + " años";
  document.getElementById("edadTierra").innerHTML       = (diasTranscurrido / 365).toFixed(2) + " años";
  document.getElementById("edadMarte").innerHTML        = (diasTranscurrido / 687).toFixed(2) + " años";
  document.getElementById("edadJupiter").innerHTML      = (diasTranscurrido / 4333).toFixed(2) + " años";
  document.getElementById("edadSaturno").innerHTML      = (diasTranscurrido / 10759).toFixed(2) + " años";
  document.getElementById("edadUrano").innerHTML        = (diasTranscurrido / 30688).toFixed(2) + " años";
  document.getElementById("edadNeptuno").innerHTML      = (diasTranscurrido / 60182).toFixed(2) + " años";
};
