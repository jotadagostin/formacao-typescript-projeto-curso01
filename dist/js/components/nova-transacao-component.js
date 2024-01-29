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
    if (tipoTransacao == TipoTransacao.DEPOSIT) {
        saldo += valor;
    }
    else if (tipoTransacao == TipoTransacao.TRANSFER ||
        tipoTransacao == TipoTransacao.PAYMENT_BILL) {
        saldo -= valor;
    }
    else {
        alert("Transfer type invalid");
        return;
    }
    elementoSaldo.textContent = formatarMoeda(saldo);
    var novaTransacaoo = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    console.log(novaTransacaoo);
    elementoFormulario.reset();
});
