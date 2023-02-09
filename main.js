/* 
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

/*Especificando una función con un parámetro
Cuando se especifica una función en el segundo parámetro, la función es invocada después de que el emparejamiento se haya realizado. (El uso de una función de este modo se llama expresión lambda.)

En la función, puedes generar dinámicamente la cadena que reemplaza la subcadena emparejada. El resultado de la llamada de la función se usa como valor de reemplazo.
var newString = "XXzzzz".replace(/(X*)(z*)/, replacer);*/


function encriptando() {
    var texto = document.querySelector("#cuadroTextoEncryptar").value;
    var textoEncriptado = texto.replace(/e/i,"enter");
    var textoEncriptado = textoEncriptado.replace(/i/i,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/i,"ai");
    var textoEncriptado = textoEncriptado.replace(/o/i,"ober");
    var textoEncriptado = textoEncriptado.replace(/u/i,"ufat");

    document.getElementById("cuadroDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("copiando").style.display="show";
    document.getElementById("copiando").style.display= "inherit"; 
    document.getElementById("mono1").style.display="none";
    document.getElementById("mensajeNoEncontrado").textContent="";    
}

function desencriptado() {
    var texto = document.querySelector("#cuadroTextoEncryptar").value;
    var textoEncriptado = texto.replace(/enter/i,"e");
    var textoEncriptado = textoEncriptado.replace(/imes/i,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/i,"a");
    var textoEncriptado = textoEncriptado.replace(/ober/i,"o");
    var textoEncriptado = textoEncriptado.replace(/ufat/i,"u");

    document.getElementById("cuadroDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("copiando").style.display="show";
    document.getElementById("copiando").style.display= "inherit";
    document.getElementById("mono1").style.display="none";
    document.getElementById("mensajeNoEncontrado").textContent="";    
}

function copiando() {
    var copyText = document.getElementById("cuadroDesencriptado");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);       
}

/*
function copiando() {
    let copyText = document.querySelector("#cuadroDesencriptado");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copiando").addEventListener("click");
*/