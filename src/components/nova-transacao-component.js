"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TipoTransacao_js_1 = require("../types/TipoTransacao.js");
var saldo_component_js_1 = require("./saldo-component.js");
var elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Please, fill all the fields!");
        return;
    }
    var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    var inputValor = elementoFormulario.querySelector("#valor");
    var inputData = elementoFormulario.querySelector("#data");
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    var saldo = (0, saldo_component_js_1.getSaldo)();
    if (tipoTransacao == TipoTransacao_js_1.TipoTransacao.DEPOSIT) {
        saldo += valor;
    }
    else if (tipoTransacao == TipoTransacao_js_1.TipoTransacao.TRANSFER ||
        tipoTransacao == TipoTransacao_js_1.TipoTransacao.PAYMENT_BILL) {
        saldo -= valor;
    }
    else {
        alert("Transfer type invalid");
        return;
    }
    (0, saldo_component_js_1.atualizarSaldo)(saldo);
    var novaTransacaoo = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    console.log(novaTransacaoo);
    elementoFormulario.reset();
});
