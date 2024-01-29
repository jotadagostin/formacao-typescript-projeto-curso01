var saldo = 3000;
var elementoSaldo = document.querySelector(".saldo-valor .valor");
var elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}
if (elementoDataAcesso != null) {
    var dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, formatarData.DIA_SEMANA_MES_ANO);
}
