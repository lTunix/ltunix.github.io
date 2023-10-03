function httpGet(theUrl) {
    animacionCarga(1);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function procesarQR(url) {
    animacionCarga(1);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    if (xhr.status === 200) {
        document.getElementById("qrImage").setAttribute("src", "qrImage/" + IP + "mevacuno04.jpg?v=" + Math.floor(Math.random() * 10000000) + 1);
    }
}

function redireccion() {
    if (location.protocol !== 'https:') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }
}

$('select').on('change', function() {
    if (this.value == "Umbrella") {
        changeCSS("style.css", 0);
        document.getElementById("logoPrincipal").setAttribute("src", "images/logoUmbrella.png");
        document.getElementById("imageDNI").setAttribute("src", "images/cardid.jpg");
    } else if (this.value == "Hunter") {
        changeCSS("style2.css", 0);
        document.getElementById("logoPrincipal").setAttribute("src", "images/logoHunterX.png");
        document.getElementById("imageDNI").setAttribute("src", "images/cardcazador.png");
    }
});

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}

$('#formId').submit(
    function(e) {
        animacionCarga(1);
        $.ajax({
            url: 'data/leerPDF.php',
            type: 'POST',
            data: new FormData(this),
            processData: false,
            contentType: false,
            success: function(result) {
                obtenerDatos();
            }
        });
        e.preventDefault();
    }
);

function descargarPase() {
    var select = document.getElementById('changeDNI');
    var value = select.options[select.selectedIndex].value;
    var divContents = $("#dni").html();
    var printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write('<html><head><title>DIV Contents</title>');
    if (value == "Umbrella") {
        printWindow.document.write('</head><link rel="stylesheet" href="style.css"><body >');
    } else if (value == "Hunter") {
        printWindow.document.write('</head><link rel="stylesheet" href="style2.css"><body >');
    }
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    window.setTimeout(function() { printWindow.print(); }, 1000);
    setTimeout(function() {
        httpGet("data/eliminarDatos.php");
        animacionCarga(0);
    }, 2000);
}

function animacionCarga(estado) {
    if (estado == 1) {
        document.getElementById("btnIniciar").style.display = "none";
        document.getElementById("loading").style.display = "initial";
    } else {
        document.getElementById("loading").style.display = "none";
        document.getElementById("btnIniciar").style.display = "initial";
    }
}


var nombre, apellidos, run, fnac, dosis1, vacunaadmin1, dosis2, vacunaadmin2, IP;

function obtenerDatos() {
    if (httpGet("data/extraerTexto.php").split("/")[0].indexOf("SOLO USO") >= 0) {
        IP = httpGet("data/leerIP.php"); //RUN
        apellidos = httpGet("data/extraerTexto.php").split("/")[1].replace(" Last Name:\n", "").replace("\nNombres ", ""); //Apellidos
        nombre = httpGet("data/extraerTexto.php").split("/")[2].replace(" First and Middle Name:\n", "").replace("\nN° de Documento ", ""); //Nombres
        run = httpGet("data/extraerTexto.php").split("/")[3].replace(" Document ID:\nRUN ", "").replace("\nFecha de Nacimiento ", ""); //RUN

        fnac = httpGet("data/extraerTexto.php").split("/")[4].replace(" Date of Birth:\n", "") + "/" + //DIA
            httpGet("data/extraerTexto.php").split("/")[5].replace(" Date of Birth:\n", "") + "/" + //MES
            httpGet("data/extraerTexto.php").split("/")[6].replace("\nEscaneando este QR se verifica \nel estado del Pase de Movilidad\n\n\nEsquema: Pfizer\n1° dosis\nLaboratorio fabricante ", ""); //AÑO

        fnac = fnac.replace("\nEscaneando este QR se verifica \nel estado del Pase de Movilidad\n\n\nEsquema: CanSino\n1° dosis\nLaboratorio fabricante ", "");

        fnac = fnac.replace("\nEscaneando este QR se verifica \nel estado del Pase de Movilidad\n\n\nEsquema: Heterologo\n1° dosis\nLaboratorio fabricante ", "");

        fnac = fnac.replace("\nEscaneando este QR se verifica \nel estado del Pase de Movilidad\n\n\nEsquema: Sinovac\n1° dosis\nLaboratorio fabricante ", "");

        dosis1 = httpGet("data/extraerTexto.php").split("/")[7].replace(" Manufacturer:\n", "").replace("\nFecha de vacunación ", ""); //1dosis
        vacunaadmin1 = httpGet("data/extraerTexto.php").split("/")[9].replace(" Vaccine product:\n", "").replace("\nVacunatorio ", ""); //VacunaAdmin

        if (httpGet("data/extraerTexto.php").split("/")[12] == undefined) {
            dosis2 = "";
            vacunaadmin2 = "";
        } else {
            dosis2 = httpGet("data/extraerTexto.php").split("/")[12].replace(" Manufacturer:\n", "").replace("\nFecha de vacunación ", ""); //2dosis
            vacunaadmin2 = httpGet("data/extraerTexto.php").split("/")[14].replace(" Vaccine product:\n", "").replace("\nVacunatorio ", ""); //VacunaAdmin
        }


        document.getElementById("nombre").innerText = nombre;
        document.getElementById("apellidos").innerText = apellidos;
        document.getElementById("run").innerText = run;
        document.getElementById("fnac").innerText = fnac;
        document.getElementById("dosis1").innerText = dosis1;
        document.getElementById("vacunaadmin1").innerText = vacunaadmin1;
        document.getElementById("dosis2").innerText = dosis2;
        document.getElementById("vacunaadmin2").innerText = vacunaadmin2;
        procesarQR("data/extraerImagenes.php");
    } else {
        alert("El PDF cargado no es compatible, intenta bajar su versión más reciente.");
    }
    animacionCarga(0);
}