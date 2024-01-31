import { Transacao } from "./Transacao.js";
let saldo: number = 3000;

const Conta = {
  getSaldo() {
    return saldo;
  },

  getDataAcesso(): Date {
    return new Date();
  },

  registrarTransacao(novaTransacaoo: Transacao): void {},
};
