import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import Conta from "../types/Conta.js";
import SaldoComponent from "./saldo-component.js";

const elementoFormulario = document.querySelector(
  ".block-nova-transacao form"
) as HTMLFormElement;

elementoFormulario.addEventListener("submit", function (event) {
  try {
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

    let tipoTransacao: TipoTransacao =
      inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    const novaTransacaoo: Transacao = {
      tipoTransacao: tipoTransacao,
      valor: valor,
      data: data,
    };

    Conta.registrarTransacao(novaTransacaoo);
    SaldoComponent.atualizar();
    elementoFormulario.reset();
  } catch (error) {
    alert(error.message);
  }
});
