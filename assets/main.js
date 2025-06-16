
var onibus = [];
/**
 * adiciona um onibus no array :P
 * @param {string} inicio - onde que o onibus comeca
 * @param {string} fim - onde que o onibus vai
 * @param {string} dataInicio - quando que o onibus vai
 * @param {string} dataVolta - quando que o onibus volta
 * @param {string} empresa - empresa
 * @param {number} paradas - quantas paradas que vai ter
 * @param {string} tipo - tipo do onibus
*/
function adicionarOnibus(inicio, fim, dataInicio, dataVolta, empresa, paradas, tipo) {
    onibus = onibus.concat({
        inicio: inicio,
        fim: fim,
        dataInicio: dataInicio,
        dataVolta: dataVolta,
        empresa: empresa,
        paradas: paradas,
        tipo: tipo
    })
}

adicionarOnibus("Epitaciolândia", "Jordão", "16/06/2025", "23/06/2025", "Relâmpago", 6, "Executivo");
adicionarOnibus("São José", "Bom Jesus do Oeste", "16/06/2025", "22/06/2025", "Seu José", 4, "Convencional");
adicionarOnibus("Wagner", "Macapá", "19/06/2025", "27/06/2025", "Baianinho", 16, "Tradicional");
adicionarOnibus("Florianópolis", "Londrina", "30/06/2025", "07/07/2025", "Relâmpago", 6, "Executivo");
adicionarOnibus("Jordão", "Macapá", "30/06/2025", "05/07/2025", "Carlônibus", 9, "Convencional");

adicionarOnibus("São Paulo", "São José", "03/07/2025", "13/07/2025", "Seu José", 7, "Leito");
adicionarOnibus("Macapá", "Porto Alegre", "03/07/2025", "13/08/2025", "Marcão Ônibus", 24, "Leito-cama");
adicionarOnibus("Santa Cruz da Vitória", "São José", "05/07/2025", "12/07/2025", "Baianinho", 12, "Tradicional");
adicionarOnibus("Ibaiti", "Curitiba", "06/07/2025", "10/07/2025", "Carlônibus", 5, "Convencional");
adicionarOnibus("São José", "Ibaiti", "15/07/2025", "20/07/2025", "Seu José", 8, "Convencional");

adicionarOnibus("Londrina", "Rio de Janeiro", "01/08/2025", "13/08/2025", "Marcão Ônibus", 8, "Semi-leito");
adicionarOnibus("Curitiba", "São Paulo", "01/08/2025", "05/08/2025", "Carlônibus", 3, "Convencional");
adicionarOnibus("Goiânia", "Curitiba", "24/08/2025", "30/08/2025", "Carlônibus", 12, "Convencional");
adicionarOnibus("Londrina", "Maringá", "25/08/2025", "30/08/2025", "Relâmpago", 5, "Executivo");

adicionarOnibus("Xique-Xique", "Santa Cruz da Vitória", "16/09/2025", "20/09/2025", "Baianinho", 9, "Tradicional");
adicionarOnibus("Ibaiti", "São Miguel do Oeste", "25/09/2025", "28/09/2025", "Relâmpago", 3, "Convencional");
adicionarOnibus("São Paulo", "Epitaciolândia", "25/09/2025", "30/09/2025", "Seu José", 15, "Leito");
adicionarOnibus("Rio de Janeiro", "Goiânia", "30/09/2025", "15/09/2025", "Marcão Ônibus", 10, "Semi-leito");

adicionarOnibus("Epitaciolândia", "Jordão", "05/10/2025", "07/10/2025", "Relâmpago", 6, "Executivo");
adicionarOnibus("São José", "Xique-Xique", "05/10/2025", "13/10/2025", "Marcão Ônibus", 8, "Semi-leito");
adicionarOnibus("Wanderley", "Wagner", "06/10/2025", "10/10/2025", "Baianinho", 11, "Tradicional");
adicionarOnibus("Xique-Xique", "Goiânia", "10/10/2025", "15/10/2025", "Marcão Ônibus", 14, "Semi-leito");

function compareNames(name1, name2) {
    if (name1.toString().toLowerCase() == name2.toString().toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * 
 * @param {HTMLSelectElement} list 
 * @param {string} name
 */
function addOption(list, name) {
    let added = false;

    for (let i = 0; i < list.options.length; i++) {
        if (compareNames(list.options[i].text, name)) {
            added = true;
            break
        }
    }

    if (added != true) {
        let option = document.createElement("option");
        option.text = name;
        list.add(option);
    }
}

function main() {
    var onde = document.getElementById("ondeOnibus");
    var ate = document.getElementById("fimOnibus");
    var ida = document.getElementById("idaOnibus");
    var volta = document.getElementById("voltaOnibus");
    var empresa = document.getElementById("empresaOnibus");
    var paradas = document.getElementById("paradaList");
    var tipo = document.getElementById("tipoOnibus");
    let maiorNumero = 0
    for (let i = 0; i < onibus.length; i++) {
        var onibusAtual = onibus[i];

        addOption(onde, onibusAtual.inicio);
        addOption(ate, onibusAtual.fim);
        addOption(ida, onibusAtual.dataInicio);
        addOption(volta, onibusAtual.dataVolta);
        addOption(empresa, onibusAtual.empresa);
        addOption(tipo, onibusAtual.tipo);

        let added = false;
        for (let ii = 0; ii < paradas.options.length; ii++) {
            if (compareNames(paradas.options[ii].text, onibusAtual.paradas)) {
                added = true;
                break
            }
        }

        if (added == false) {
            let option = document.createElement("option");
            option.text = onibusAtual.paradas;
            paradas.appendChild(option);

            if (onibusAtual.paradas > maiorNumero) {
                maiorNumero = onibusAtual.paradas
            }
        }
    }
    document.getElementById("paradasOnibus").max = maiorNumero
}

function encontrarOnibus() {
    var onde = document.getElementById("ondeOnibus");
    var ate = document.getElementById("fimOnibus");
    var ida = document.getElementById("idaOnibus");
    var volta = document.getElementById("voltaOnibus");
    var empresa = document.getElementById("empresaOnibus");
    var paradas = document.getElementById("paradasOnibus");
    var tipo = document.getElementById("tipoOnibus");

    let tabela = document.getElementsByClassName("tabelaPrincipal").item(0);
    tabela.border = true;
    tabela.innerHTML = "<tr>" +
        "<th>Partida</th>" +
        "<th>Destinação</th>" +
        "<th>Data de ida</th>" +
        "<th>Data de volta</th>" +
        "<th>Empresa</th>" +
        "<th>Paradas</th>" +
        "<th>Tipo de ônibus</th>" +
    "</tr>"

    for (let i = 0; i < onibus.length; i++) {
        let onibusAtual = onibus[i];

        if ((!compareNames(onibusAtual.inicio, onde.value) && onde.value != "")
        || (!compareNames(onibusAtual.fim, ate.value) && ate.value != "")
        || (!compareNames(onibusAtual.dataInicio, ida.value) && ida.value != "")
        || (!compareNames(onibusAtual.dataVolta, volta.value) && volta.value != "")
        || (!compareNames(onibusAtual.empresa, empresa.value) && empresa.value != "")
        || (onibusAtual.paradas != paradas.value && paradas.value != 0)
        || (!compareNames(onibusAtual.tipo, tipo.value) && tipo.value != "")) {
            continue;
        }
        
        tabela.innerHTML += "<tr>" +
            "<td>" +
                onibusAtual.inicio +
            "</td>" +
            "<td>" +
                onibusAtual.fim +
            "</td>" +
            "<td>" +
                onibusAtual.dataInicio +
            "</td>" +
            "<td>" +
                onibusAtual.dataVolta +
            "</td>" +
            "<td>" +
                onibusAtual.empresa +
            "</td>" +
            "<td>" +
                onibusAtual.paradas +
            "</td>" +
            "<td>" +
                onibusAtual.tipo +
            "</td>" +
        "</tr>"
    }

    tabela.innerHTML += "<tr>" +
        '<td colspan="7">' +
            '<input type="button" value="Voltar a procura" onclick="recarregarPagina()">' +
        '</td>' +
    '</tr>'
}

function recarregarPagina() {
    location.reload();
}