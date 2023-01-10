function encriptar() {
    let m = "";
    resultado.style = "visibility: visible";
    imagen.style = "visibility: hidden";
    frame.style = "visibility: hidden";
    bcopiar.style = "visibility: visible";
    m = mensaje.value;
    m = m.toLowerCase();
    let salida = "";
    for (let index = 0; index < m.length; index++) {
        if (m.charAt(index) == "a") {
            salida += a;
        } else if(m.charAt(index) == "e"){
            salida += e;
        } else if (m.charAt(index) == "i") {
            salida += i;
        } else if (m.charAt(index) == "o") {
            salida += o;
        } else if (m.charAt(index) == "u") {
            salida += u;
        } else {
            salida += m.charAt(index);
        }
    }
    resultado.textContent = salida;
}

function desencriptar() {
    let m = "";
    
    m = mensaje.value;
    m = m.replaceAll(a, "a");
    m = m.replaceAll(e, "e");
    m = m.replaceAll(i, "i");
    m = m.replaceAll(o, "o");
    m = m.replaceAll(u, "u");
    resultado.textContent = m;
}

function copiar() {
    resultado = document.getElementById("resultado");
    let seleccion  = document.createRange();
    seleccion.selectNodeContents(resultado);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    try {
        var res = document.execCommand('copy')
    } catch (error) {
        
    }
    window.getSelection().removeRange(seleccion);
}

var mensaje = document.getElementById("entrada");
var resultado = document.getElementById("resultado");
var imagen = document.getElementById("munheco");
var frame = document.getElementById("noencontrado");
var bcopiar = document.getElementById("copiar");

var e ="enter";
var i ="imes";
var a = "ai";
var o = "ober";
var u = "ufat";
