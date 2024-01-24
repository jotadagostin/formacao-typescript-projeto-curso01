var saldo = 3000;
var elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
  elementoSaldo.textContent = saldo.toString();
}
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
  if (tipoTransacao == "Deposit") {
    saldo += valor;
  } else if (tipoTransacao == "Transfer" || tipoTransacao == "Bill Payment") {
    saldo -= valor;
  } else {
    alert("Transfer type invalid");
    return;
  }
  elementoSaldo.textContent = saldo.toString();
  var novaTransacaoo = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  };
  console.log(novaTransacaoo);
  elementoFormulario.reset();
});
