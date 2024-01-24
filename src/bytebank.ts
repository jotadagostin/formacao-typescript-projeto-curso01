let saldo = 3000;

const elementoSaldo = document.querySelector(
  ".saldo-valor .valor"
) as HTMLElement;
if (elementoSaldo != null) {
  elementoSaldo.textContent = saldo.toString();
}

const elementoFormulario = document.querySelector(
  ".block-nova-transacao form"
) as HTMLFormElement;
elementoFormulario.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!elementoFormulario.checkValidity()) {
    alert("Please, fill all the fields!");
    return;
  }

  const inputTipoTransacao = elementoFormulario.querySelector(
    "#tipoTransacao"
  ) as HTMLSelectElement;
  const inputValor = elementoFormulario.querySelector(
    "#valor"
  ) as HTMLInputElement;
  const inputData = elementoFormulario.querySelector(
    "#data"
  ) as HTMLInputElement;

  let tipoTransacao: string = inputTipoTransacao.value;
  let valor: number = inputValor.valueAsNumber;
  let data: Date = new Date(inputData.value);

  if (tipoTransacao == "Deposit") {
    saldo += valor;
  } else if (tipoTransacao == "Transfer" || tipoTransacao == "Bill Payment") {
    saldo -= valor;
  } else {
    alert("Transfer type invalid");
    return;
  }

  elementoSaldo.textContent = saldo.toString();

  const novaTransacaoo = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  };

  console.log(novaTransacaoo);
  elementoFormulario.reset();
});
