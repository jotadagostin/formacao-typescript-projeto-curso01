import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
let saldo: number = 3000;

const Conta = {
  getSaldo() {
    return saldo;
  },

  getDataAcesso(): Date {
    return new Date();
  },

  registrarTransacao(novaTransacaoo: Transacao): void {
    if (novaTransacaoo.tipoTransacao == TipoTransacao.DEPOSIT) {
      saldo += novaTransacaoo.valor;
    } else if (
      novaTransacaoo.tipoTransacao == TipoTransacao.TRANSFER ||
      novaTransacaoo.tipoTransacao == TipoTransacao.PAYMENT_BILL
    ) {
      saldo -= novaTransacaoo.valor;
    } else {
      alert("Transfer type invalid");
      return;
    }
  },
};
export default Conta;
