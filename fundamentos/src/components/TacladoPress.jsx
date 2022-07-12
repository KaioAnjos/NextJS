import React from "react";
import Jquery from "jquery";
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
   
    if(x == "88"){
        var captu = "";
        function cap(){
            captu = document.getElementById('in').value;
        return captu;
    }
    alert(cap());
    }
}
       setTimeout(() => {document.getElementById("in").focus();}, 500); 
        return(
       <div>
        <p>Tecla precionado</p>
        <input id="in" type="text" size="40" onKeyDown={() => dig(event)} name="in" />
        <p id="letra"></p>
        <p id="input"></p>
        <p id="F1"></p>
        <p id="Calcular"></p>
        </div>
        )
}