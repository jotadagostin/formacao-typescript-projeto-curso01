import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { GrupoTransacao } from "./GrupoTransacao.js";

let saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;

const transacoes: Transacao[] =
  JSON.parse(
    localStorage.getItem("transacoes"),
    (key: string, value: string) => {
      if (key === "data") {
        return new Date(value);
      }

      return value;
    }
  ) || [];

function debitar(valor: number): void {
  if (valor <= 0) {
    throw new Error("the value to be debit must be bigger than zero");
  }
  if (valor > saldo) {
    throw new Error("Value not avalueble");
  }
  saldo -= valor;
  localStorage.setItem("saldo", saldo.toString());
}

function depositar(valor: number): void {
  if (valor <= 0) {
    throw new Error("the value to be debit must be bigger than zero");
  }
  saldo += valor;
  localStorage.setItem("saldo", saldo.toString());
}

const Conta = {
  getSaldo() {
    return saldo;
  },

  getDataAcesso(): Date {
    return new Date();
  },

  getGruposTransacoes(): GrupoTransacao[] {
    const gruposTransacoes: GrupoTransacao[] = [];
    const listaTransacoes: Transacao[] = structuredClone(transacoes);
    const transacoesOrdenadas: Transacao[] = listaTransacoes.sort(
      (t1, t2) => t2.data.getTime() - t1.data.getTime()
    );
    let labelAtualGrupoTransacao: string = "";

    for (let transacao of transacoesOrdenadas) {
      let labelGrupoTransacao: string = transacao.data.toLocaleDateString(
        "pt-br",
        { month: "long", year: "numeric" }
      );
      if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
        labelAtualGrupoTransacao = labelGrupoTransacao;
        gruposTransacoes.push({
          label: labelGrupoTransacao,
          transacoes: [],
        });
      }
      gruposTransacoes.at(-1).transacoes.push(transacao);
    }

    return gruposTransacoes;
  },

  registrarTransacao(novaTransacaoo: Transacao): void {
    if (novaTransacaoo.tipoTransacao == TipoTransacao.DEPOSIT) {
      depositar(novaTransacaoo.valor);
    } else if (
      novaTransacaoo.tipoTransacao == TipoTransacao.TRANSFER ||
      novaTransacaoo.tipoTransacao == TipoTransacao.PAYMENT_BILL
    ) {
      debitar(novaTransacaoo.valor);
    } else {
      throw new Error("Transfer type invalid");
    }

    transacoes.push(novaTransacaoo);
    console.log(this.getGruposTransacoes());
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
  },
};
export default Conta;
