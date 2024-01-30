"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarSaldo = exports.getSaldo = void 0;
var formarters_js_1 = require("../utils/formarters.js");
var FormatoData_js_1 = require("../types/FormatoData.js");
var saldo = 3000;
var elementoSaldo = document.querySelector(".saldo-valor .valor");
var elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    var dataAcesso = new Date();
    elementoDataAcesso.textContent = (0, formarters_js_1.formatarData)(dataAcesso, FormatoData_js_1.FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
function getSaldo() {
    return saldo;
}
exports.getSaldo = getSaldo;
atualizarSaldo(saldo);
function atualizarSaldo(novoSaldo) {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = (0, formarters_js_1.formatarMoeda)(saldo);
    }
}
exports.atualizarSaldo = atualizarSaldo;
//void para retornar vazio sem valor
