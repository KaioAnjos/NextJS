import React from "react";
export default function Teclado_Press(){

    
    function dig(event){
    var x = event.keyCode;
    var y = String.fromCharCode(x);
    String.toString(document.getElementById("letra").innerText = "Número: " + x + " = Caractere: " + y);
    if(x == "112") {String.toString(document.getElementById("F1").innerText = "F1 precionado");} 
    if(x == "13"){
        var g = "<input type='text' id='teste' size='40'/>";
        document.getElementById("input").innerHTML = g;
        document.getElementById("teste").focus();
    }
    else{
        var g = "<input type='text' id='teste' size='40' disabled/>"
        document.getElementById("input").innerHTML = g;
    }
}
       setTimeout(() => {document.getElementById("in").focus();}, 500); 
        return(
       <div>
        <p>Tecla precionado</p>
        <input id="in" type="text" size="40" onKeyDown={() => dig(event)}/>
        <p id="letra"></p>
        <p id="input"></p>
        <p id="F1"></p>
        </div>
    );
}