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
            document.getElementById("in").value = null;
            setTimeout(() => { document.getElementById("inp").value = null }, 100);
        }
        //apertando a tecla X
        if (x == "88") {
            document.getElementById("in").focus();
            setTimeout(() => { document.getElementById("in").value = "" }, 100);
        }
        //adicionar dados do input para a tabela
        function criartabela(conteudo, idTable, qtnConteudo, valorConteudo) {
            var newRow = document.createElement('tr');
            newRow.insertCell(0).innerHTML = conteudo;
            newRow.insertCell(1).innerHTML = qtnConteudo;
            var colunaValor = newRow.insertCell(2);
            colunaValor.innerHTML = valorConteudo;
            document.getElementById(idTable).appendChild(newRow);
            return false;
        }

        //verificando se o foco está ativa no input do codigo de barra para adicionar e inserir dados na tabela
        if (document.hasFocus()) {
            var c = document.getElementById("in");
            var v = document.getElementById("inp");
            if ((c.value.length >= 8 || x == "13")) {
                criartabela(c.value, "tbl", v.value || 1, 1)
                c.value = null;
            }
        }

        //Cancelar Cupom apertando r
        if (x == "82") {
            var cupomCanc = prompt("codigo do cupom");
            Array.from(document.getElementsByTagName("tr")).forEach(function (row) {
                var fistTD = row.getElementsByTagName("td")
                if (fistTD.item(0) === null) { return; }
                var Cod = fistTD.item(0).innerHTML;
                if (cupomCanc.indexOf(Cod) >= 0) {
                    var inputCol = row.getElementsByTagName('td').item(2);
                    if (inputCol.value = Cod) {
                        row.remove()
                    }
                }
            })
            setTimeout(() => { document.getElementById("in").value = "" }, false);
        }
    }
    setTimeout(() => {
        window.addEventListener('keypress', (event) => {
            var pressKey = event.keyCode;
            if (pressKey == "13") {
                document.getElementById("in").focus();
            }
        }, false)
    }, 500)
    setTimeout(() => { document.getElementById("in").focus(); }, 500);
    return (
        <div>
            <p>Tecla precionado</p>
            <input id="inp" type="text" size="1" onKeyDown={() => dig(event)} />
            <input id='in' type="text" size="40" onKeyDown={() => dig(event)} maxLength='8' />
            <p id="letra"></p>
            <p id="input"></p>
            <p id="F1"></p>
            <div color="red">
                <table>
                    <tbody id="tbl">
                        <tr>
                            <th>
                                Produto
                            </th>
                            <th>
                                Quantidade
                            </th>
                            <th>
                                Valor
                            </th>
                        </tr>
                    </tbody>
                </table>
                <label id='valor Total'/>
            </div>
        </div>
    )
}