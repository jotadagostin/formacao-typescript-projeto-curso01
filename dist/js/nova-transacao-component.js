var elementoFormulario1 = document.querySelector(".block-nova-transacao form");
elementoFormulario1.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario1.checkValidity()) {
        alert("Please, fill all the fields!");
        return;
    }
    var inputTipoTransacao = elementoFormulario1.querySelector("#tipoTransacao");
    var inputValor = elementoFormulario1.querySelector("#valor");
    var inputData = elementoFormulario1.querySelector("#data");
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (tipoTransacao == "Deposit") {
        saldo1 += valor;
    }
    else if (tipoTransacao == "Transfer" || tipoTransacao == "Bill Payment") {
        saldo1 -= valor;
    }
    else {
        alert("Transfer type invalid");
        return;
    }
    elementoSaldo1.textContent = saldo1.toString();
    var novaTransacaoo = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    console.log(novaTransacaoo);
    elementoFormulario1.reset();
});
