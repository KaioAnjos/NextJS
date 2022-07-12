import React from "react";
export default function Teclado_Press() {
    function dig(event) {
        var x = event.keyCode;
        var y = String.fromCharCode(x);
        String.toString(document.getElementById("letra").innerText = "Número: " + x + " = Caractere: " + y);
        if (x == "112") { String.toString(document.getElementById("F1").innerText = "F1 precionado"); }
        if (x == "13") {
            var g = "<input type='text' id='teste' size='40'/>";
            document.getElementById("input").innerHTML = g;
            document.getElementById("teste").focus();
        }
        else {
            var g = "<input type='text' id='teste' size='40' disabled/>"
            document.getElementById("input").innerHTML = g;
        }
        if (x == "67") {
            document.getElementById("inp").focus();
            document.getElementById("in").value = "";
            setTimeout(() => { document.getElementById("inp").value = "" }, 100);
        }
        if (x == "88") {
            var captu = "";
                var c = captu = parseInt(document.getElementById('inp').value);
                document.getElementById("in").focus();
                setTimeout(() => { document.getElementById("in").value = "" }, 100);
                return c;
        }
        if(document.getElementById("in").focus() == focus()){
            var c = parseInt(document.getElementById("in").value);
            if(c.length = 8){
                c = c.substring(0, 8)
            }
            else{
                alert("codigo de barra errado");
            }
        }
    }
    setTimeout(() => { document.getElementById("in").focus(); }, 500);
    return (
        <div>
            <p>Tecla precionado</p>
            <input id="inp" type="text" size="1" onKeyDown={() => dig(event)} />
            <input id='in' type="text" size="40" onKeyDown={() => dig(event)} />
            <p id="letra"></p>
            <p id="input"></p>
            <p id="F1"></p>
            <p id="Calcular"></p>
        </div>
    )
}