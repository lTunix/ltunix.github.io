window.onload = function() {
    const tamanoPlanta = getRandomInt(20, 30);
    generarMatriz();
    generarMaceta();
    for (var x = 0, ln = tamanoPlanta; x < ln; x++) {
        setTimeout(function(y) {
            generarTallo(y);
            generarHojas(46 - y);
            if (y > 0) {
                document.getElementById("popAudio").play();
            }
        }, x * 600, x);
    }
};

var fecha = new Date();
var hora = fecha.getHours();

/*document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target,
        text = target.tagName;
    if (text == "TD") {
        if (target.style.backgroundColor == "black") {
            target.style.backgroundColor = "transparent";
        } else {
            target.style.backgroundColor = "black";
        }
    }
    //console.log(text);
}, false);*/

function getColumna(context) {
    console.log(context.id);
}

function getFila(context) {
    console.log(context.id);
}

function generarMatriz() {
    const ancho = 50;
    const alto = 60;
    const matriz = document.getElementById("matriz");
    for (let i = 0; i < alto; i++) {
        var fila = document.createElement('tr');
        fila.setAttribute("id", "fila_" + i);
        fila.setAttribute("onClick", "getFila(this)");
        matriz.appendChild(fila);
        for (let j = 0; j < ancho; j++) {
            var columna = document.createElement('td');
            columna.setAttribute("id", "col_" + j);
            columna.setAttribute("onClick", "getColumna(this)");
            fila.appendChild(columna);
        }
    }
    document.getElementById("fila_51").style.backgroundColor = "black";

    //SUELO
    for (let i = 2; i < 10; i++) {
        if (i % 2 == 0) {
            document.getElementById("fila_5" + i).style.backgroundColor = "brown";
        } else {
            document.getElementById("fila_5" + i).style.backgroundColor = "#AA5050";
        }
    }

    //PARED DIA
    for (let i = 0; i < 51; i++) {
        document.getElementById("fila_" + i).style.backgroundColor = "#E7E2E2";
    }
    //PARED NOCHE
    if (hora >= 20 || hora < 6) {
        for (let i = 0; i < 51; i++) {
            document.getElementById("fila_" + i).style.backgroundColor = "#BCBABA";
        }
    }


    //MARCO VENTANA
    for (let i = 0; i < 15; i++) {
        document.getElementById("fila_" + (11 + i)).children[33].style.backgroundColor = "black";
    }
    for (let i = 0; i < 15; i++) {
        document.getElementById("fila_" + (11 + i)).children[43].style.backgroundColor = "black";
    }

    //MARCO DE VENTANA
    for (let i = 0; i < 11; i++) {
        document.getElementById("fila_" + (11)).children[33 + i].style.backgroundColor = "black";
    }
    for (let i = 0; i < 11; i++) {
        document.getElementById("fila_" + (19)).children[33 + i].style.backgroundColor = "black";
    }
    for (let i = 0; i < 11; i++) {
        document.getElementById("fila_" + (26)).children[33 + i].style.backgroundColor = "black";
    }


    //VENTANA DIA
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j <= 5; j++) {
            document.getElementById("fila_" + (20 + j)).children[34 + i].style.backgroundColor = "#92EDE3";
        }

    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j <= 6; j++) {
            document.getElementById("fila_" + (18 - j)).children[34 + i].style.backgroundColor = "#92EDE3";
        }

    }

    //VENTANA NOCHE
    if (hora >= 20 || hora < 6) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j <= 5; j++) {
                document.getElementById("fila_" + (20 + j)).children[34 + i].style.backgroundColor = "#5E6F7D";
            }

        }
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j <= 6; j++) {
                document.getElementById("fila_" + (18 - j)).children[34 + i].style.backgroundColor = "#5E6F7D";
            }

        }
    }

}

function generarMaceta() {
    for (let i = 0; i < 10; i++) {
        document.getElementById("fila_47").children[17 + i].style.backgroundColor = "brown";
    }
    for (let i = 0; i < 10; i++) {
        document.getElementById("fila_48").children[18 + i].style.backgroundColor = "brown";
    }
    for (let i = 0; i < 7; i++) {
        document.getElementById("fila_49").children[18 + i].style.backgroundColor = "brown";
    }
    for (let i = 0; i < 8; i++) {
        document.getElementById("fila_50").children[18 + i].style.backgroundColor = "brown";
    }
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 2; i++) {
            document.getElementById("fila_" + (49 - j)).children[(18 - j) - i].style.backgroundColor = "brown";
        }
    }

    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 2; i++) {
            document.getElementById("fila_" + (49 - j)).children[(25 + j) + i].style.backgroundColor = "brown";
        }
    }
}

function generarTallo(tamano) {
    for (let j = 0; j < tamano; j++) {
        for (let i = 0; i < 2; i++) {
            if (j % 2 == 0) {
                document.getElementById("fila_" + (46 - j)).children[22 - i].style.backgroundColor = "#18A237";
            } else {
                document.getElementById("fila_" + (46 - j)).children[22 - i].style.backgroundColor = "#18EC48";
            }
        }
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarHojas(tamano) {
    if (tamano <= 43 && getRandomInt(1, 2) == 1) {
        let largoRama = getRandomInt(2, 6);
        for (let j = 0; j < largoRama; j++) {
            for (let i = 0; i < 2; i++) {
                document.getElementById("fila_" + (tamano - j)).children[(24 + j) - i].style.backgroundColor = "#18A237";
            }
        }
    } else if (tamano <= 43) {
        let largoRama = getRandomInt(3, 5);
        for (let j = 0; j < largoRama; j++) {
            for (let i = 0; i < 2; i++) {
                document.getElementById("fila_" + (tamano - j)).children[(20 - j) - i].style.backgroundColor = "#18A237";
            }
        }
    }
}