import React from "react";
export default function Teclado_Press() {
    function dig(event) {
        var x = event.keyCode;
        var y = String.fromCharCode(x);
        String.toString(document.getElementById("letra").innerText = "Número: " + x + " = Caractere: " + y);
        if (x == "112") { String.toString(document.getElementById("F1").innerText = "F1 precionado"); }
        //apertando a tecla enter
        if (x == "13") {
            var g = "<input type='text' id='teste' size='40'/>";
            document.getElementById("input").innerHTML = g;
        }
        else {
            var g = "<input type='text' id='teste' size='40' disabled/>"
            document.getElementById("input").innerHTML = g;
        }
        //Apertando a tecla c
        if (x == "67") {
            document.getElementById("inp").focus();
            document.getElementById("in").value = "";
            setTimeout(() => { document.getElementById("inp").value = "" }, 100);
        }
        //apertando a tecla X
        if (x == "88") {
            var captu = "";
            var c = captu = parseInt(document.getElementById('inp').value);
            document.getElementById("in").focus();
            setTimeout(() => { document.getElementById("in").value = "" }, 100);
            return c;
        }
        //adicionar dados do input para a tabela
        function criartabela(conteudo) {
            var tbltabela = document.createElement("table");
            var tblthead = document.createElement("thead");
            var tblBody = document.createElement("tbody");
            var tbltd = function (i) { return (i == 0) ? "th":"td"; };
            for (var b = 0; b < conteudo.length; b++) {
                var tblTr = document.createElement("tr");
                for (var o = 1; o < conteudo[b].length; o++) {
                    var tblT = document.createElement(tbltd(b));
                    var tblTexto = document.createTextNode(conteudo[b][o]);
                    tblT.appendChild(tblTexto);
                    tblTr.appendChild(tblT);
                }
                (b = 0) ? tblthead.appendChild(tblTr) :tblBody.appendChild(tblTr);
            }
            tbltabela.appendChild(tblthead);
            tbltabela.appendChild(tblBody);
            return tbltabela;
        }

        //verificando se o foco está ativa no input do codigo de barra para adicionar
        if (document.hasFocus()) {
            var c = document.getElementById("in").value;
            if ((c.length >= 8)) {
                for (var n = 0; n < 10; n++) {
                    document.getElementById("tabela").hasChildNodes(criartabela([
                        [n++, c]
                    ]))
                }
            }
        }
    }
    setTimeout(() => { document.getElementById("in").focus(); }, 500);
    return (
        <div>
            <p>Tecla precionado</p>
            <input id="inp" type="text" size="1" onKeyDown={() => dig(event)} />
            <input id='in' type="text" size="40" onKeyDown={() => dig(event)} maxLength='8' />
            <p id="letra"></p>
            <p id="input"></p>
            <p id="F1"></p>
            <div id="tbl" color="red">

            </div>
        </div>
    )
}