import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";

let saldo: number = 3000;

const transacoes: Transacao[] =
  JSON.parse(
    localStorage.getItem("transacoes"),
    (key: string, value: string) => {
      if (key === "data") {
        return new Date(value);
      }
    }
  ) || [];

function debitar(valor: number): void {
  if (valor <= 0) {
    throw new Error("the value to be debit must be bigger than zero");
  }
  if (valor > saldo) {
    throw new Error("Value not avalueble");
  }
}

function depositar(valor: number): void {
  if (valor <= 0) {
    throw new Error("the value to be debit must be bigger than zero");
  }
  saldo += valor;
}

const Conta = {
  getSaldo() {
    return saldo;
  },

  getDataAcesso(): Date {
    return new Date();
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
    console.log(transacoes);
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
  },
};
export default Conta;
