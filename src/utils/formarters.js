"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatarData = exports.formatarMoeda = void 0;
var FormatoData_1 = require("../types/FormatoData");
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });
}
exports.formatarMoeda = formatarMoeda;
function formatarData(data, formato) {
    if (formato === void 0) { formato = FormatoData_1.FormatoData.PADRAO; }
    if (formato === FormatoData_1.FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-b", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    }
    else if (formato === FormatoData_1.FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br", {
            day: "2-digit",
            month: "2-digit",
        });
    }
    return data.toLocaleDateString("pt-br");
}
exports.formatarData = formatarData;
