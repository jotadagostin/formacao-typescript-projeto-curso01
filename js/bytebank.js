let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!elementoFormulario.checkValidity()) {
    alert("Please, fill all the fields!");
    return;
  }

  const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
  const inputValor = elementoFormulario.querySelector("#valor");
  const inputData = elementoFormulario.querySelector("#data");

  let tipoTransacao = inputTipoTransacao.value;
  let valor = inputValor.value;
  let data = inputData.value;

  if (tipoTransacao == "Deposit") {
    saldo += Number(valor);
  } else if (tipoTransacao == "Transfer" || tipoTransacao == "Bill Payment") {
    saldo -= valor;
  } else {
    alert("Transfer type invalid");
    return;
  }

  elementoSaldo.textContent = saldo;

  const novaTransacaoo = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  };

  console.log(novaTransacaoo);
  elementoFormulario.reset();
});
