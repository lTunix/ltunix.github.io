document.getElementById("stop").hidden = true;
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target,
        text = target.tagName;
    if (text == "TD") {
        clearInterval(play);
        pauseAudio();
        document.getElementById("play").hidden = false;
        document.getElementById("stop").hidden = true;
        if (target.style.backgroundColor == "black") {
            target.style.backgroundColor = "transparent";
            target.innerHTML = "0";
        } else {
            target.style.backgroundColor = "black";
            target.innerHTML = "1";
        }
    }
    //console.log(text);
}, false);

var play = "";

var x = document.getElementById("myAudio ");

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}

function ponerEnMarcha() {
    play = setInterval('jugar()', 100);
    document.getElementById("reglas").hidden = true;
}

function detener() {
    clearInterval(play);
    pauseAudio();
    document.getElementById("play").hidden = false;
    document.getElementById("stop").hidden = true;
    document.getElementById("reglas").hidden = false;
}

function crearTablero() {
    var reg = new RegExp('^[0-9]+$');
    if (!reg.test(document.getElementById("dmAlto").value)) {
        alert("Ingresa solo números");
        return false;
    }

    if (!reg.test(document.getElementById("dmAncho").value)) {
        alert("Ingresa solo números");
        return false;
    }


    detener();

    document.getElementById("reglas").hidden = true;

    var ancho = document.getElementById("dmAncho").value;
    var alto = document.getElementById("dmAlto").value;

    document.getElementsByClassName("tbDimensiones ")[0].innerHTML = "";


    for (let altoIndex = 0; altoIndex < alto; altoIndex++) {
        document.getElementsByClassName("tbDimensiones ")[0].innerHTML = document.getElementsByClassName("tbDimensiones ")[0].innerHTML + "<tr style='width:15px; height: 15px; border: 1px solid black;'></tr>";
    }

    for (let anchoIndex = 0; anchoIndex < alto; anchoIndex++) {
        for (let anchoIndex2 = 0; anchoIndex2 < ancho; anchoIndex2++) {
            document.getElementsByClassName("tbDimensiones ")[0].children[anchoIndex].children[0].innerHTML = document.getElementsByClassName("tbDimensiones ")[0].children[anchoIndex].children[0].innerHTML + "<td style='width:15px; height: 15px; border: 1px solid black;'>0</td>"
        }
    }
}

function jugar() {

    playAudio();

    document.getElementById("play").hidden = true;
    document.getElementById("stop").hidden = false;

    var ancho = document.getElementById("dmAncho").value;
    var alto = document.getElementById("dmAlto").value;

    myData = document.getElementById("tbDimensiones ").rows
        ////console.log(myData)
    tbArray = []
    for (var i = 0; i < myData.length; i++) {
        el = myData[i].children
        my_el = []
        for (var j = 0; j < el.length; j++) {
            my_el.push(el[j].innerText);
        }
        tbArray.push(my_el)

    }
    //console.log(tbArray);
    for (let index = 0; index < ancho; index++) {
        for (let index2 = 0; index2 < alto; index2++) {
            const element = tbArray[index2];
            if (element[index] == 1) {
                var coordenadas = [index2, index];
                //console.log(coordenadas);
                var contarVecinos = 0;
                if (typeof tbArray[index2 - 1] !== 'undefined' && tbArray[index2 - 1][index - 1] == 1) {
                    contarVecinos = contarVecinos + 1;
                }
                if (typeof tbArray[index2 - 1] !== 'undefined' && tbArray[index2 - 1][index] == 1) {
                    contarVecinos = contarVecinos + 1;
                }
                if (typeof tbArray[index2 - 1] !== 'undefined' && tbArray[index2 - 1][index + 1] == 1) {
                    contarVecinos = contarVecinos + 1;
                }
                if (typeof tbArray[index2] !== 'undefined' && tbArray[index2][index - 1] == 1) {
                    contarVecinos = contarVecinos + 1;
                }
                if (typeof tbArray[index2] !== 'undefined' && tbArray[index2][index + 1] == 1) {
                    contarVecinos = contarVecinos + 1;
                }
                if (typeof tbArray[index2 + 1] !== 'undefined' && tbArray[index2 + 1][index - 1] == 1) {
                    contarVecinos = contarVecinos + 1;
                }
                if (typeof tbArray[index2 + 1] !== 'undefined' && tbArray[index2 + 1][index] == 1) {
                    contarVecinos = contarVecinos + 1;
                }
                if (typeof tbArray[index2 + 1] !== 'undefined' && tbArray[index2 + 1][index + 1] == 1) {
                    contarVecinos = contarVecinos + 1;
                }

                if (contarVecinos == 2 || contarVecinos == 3) {
                    document.getElementById("tbDimensiones ").rows[index2].children[index].style.backgroundColor = "black";
                    document.getElementById("tbDimensiones ").rows[index2].children[index].innerText = "1";
                } else {
                    document.getElementById("tbDimensiones ").rows[index2].children[index].style.backgroundColor = "transparent";
                    document.getElementById("tbDimensiones ").rows[index2].children[index].innerText = "0";
                }
                //console.log(contarVecinos);
            } else {
                var contarVecinos = 0;
                if (typeof tbArray[index2 - 1] !== 'undefined' && tbArray[index2 - 1][index - 1] == 1) {
                    contarVecinos = contarVecinos + 1;
                }
                if (typeof tbArray[index2 - 1] !== 'undefined' && tbArray[index2 - 1][index] == 1) {
                    contarVecinos = contarVecinos + 1;
                }
                if (typeof tbArray[index2 - 1] !== 'undefined' && tbArray[index2 - 1][index + 1] == 1) {
                    contarVecinos = contarVecinos + 1;
                }
                if (typeof tbArray[index2] !== 'undefined' && tbArray[index2][index - 1] == 1) {
                    contarVecinos = contarVecinos + 1;
                }
                if (typeof tbArray[index2] !== 'undefined' && tbArray[index2][index + 1] == 1) {
                    contarVecinos = contarVecinos + 1;
                }
                if (typeof tbArray[index2 + 1] !== 'undefined' && tbArray[index2 + 1][index - 1] == 1) {
                    contarVecinos = contarVecinos + 1;
                }
                if (typeof tbArray[index2 + 1] !== 'undefined' && tbArray[index2 + 1][index] == 1) {
                    contarVecinos = contarVecinos + 1;
                }
                if (typeof tbArray[index2 + 1] !== 'undefined' && tbArray[index2 + 1][index + 1] == 1) {
                    contarVecinos = contarVecinos + 1;
                }
                if (contarVecinos == 3) {
                    document.getElementById("tbDimensiones ").rows[index2].children[index].style.backgroundColor = "black";
                    document.getElementById("tbDimensiones ").rows[index2].children[index].innerText = "1";
                } else {
                    document.getElementById("tbDimensiones ").rows[index2].children[index].style.backgroundColor = "transparent";
                    document.getElementById("tbDimensiones ").rows[index2].children[index].innerText = "0";
                }
            }
        }
    }
}