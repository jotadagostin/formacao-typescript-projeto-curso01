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

  let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
  let valor: number = inputValor.valueAsNumber;
  let data: Date = new Date(inputData.value);

  if (tipoTransacao == TipoTransacao.DEPOSIT) {
    saldo += valor;
  } else if (
    tipoTransacao == TipoTransacao.TRANSFER ||
    tipoTransacao == TipoTransacao.PAYMENT_BILL
  ) {
    saldo -= valor;
  } else {
    alert("Transfer type invalid");
    return;
  }

  elementoSaldo.textContent = formatarMoeda(saldo);

  const novaTransacaoo: Transacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  };

  console.log(novaTransacaoo);
  elementoFormulario.reset();
});
