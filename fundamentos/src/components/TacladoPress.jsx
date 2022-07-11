import React from "react";
export default function Teclado_Press(){
    function dig(event){
    var x = event.keyCode;
    var y = String.fromCharCode(x);
    const w = document.querySelector("in");
    String.toString(document.getElementById("letra").innerText = "Número: " + x + " = Caractere: " + y);
    if(x == "112") {String.toString(document.getElementById("F1").innerText = "F1 precionado");} 
}
    return(
        <div>
        <p>Tecla precionado</p>
        <input id="in" type="text" size="40" onKeyDown={() => dig(event)}/>
        <p id="letra"></p>
        <p id="F1"></p>
        </div>
    );
}