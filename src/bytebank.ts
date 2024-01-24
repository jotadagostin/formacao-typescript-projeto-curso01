let saldo1 = 3000;

alert("teste");
const elementoSaldo1 = document.querySelector(
  ".saldo-valor .valor"
) as HTMLElement;
if (elementoSaldo != null) {
  elementoSaldo.textContent = saldo.toString();
}

const elementoFormulario1 = document.querySelector(
  ".block-nova-transacao form"
) as HTMLFormElement;
elementoFormulario1.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!elementoFormulario1.checkValidity()) {
    alert("Please, fill all the fields!");
    return;
  }

  const inputTipoTransacao = elementoFormulario1.querySelector(
    "#tipoTransacao"
  ) as HTMLSelectElement;
  const inputValor = elementoFormulario1.querySelector(
    "#valor"
  ) as HTMLInputElement;
  const inputData = elementoFormulario1.querySelector(
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

  elementoSaldo1.textContent = saldo.toString();

  const novaTransacaoo = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  };

  console.log(novaTransacaoo);
  elementoFormulario1.reset();
});
