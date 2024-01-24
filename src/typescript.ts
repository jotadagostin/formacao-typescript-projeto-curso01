//Tipos primitivos

let valor: number = 3000;
let nome: string = "Joao";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

//Arrays

const lista: number[] = [];
lista.push(23, 25.6, 22, 89);

//Tipos personalizados(Type Alias)
type transacao = {
  tipoTransacao: tipoTransacao;
  data: Date;
  valor: number;
};

//Enums(conjuto de valores fixos)
enum tipoTransacao {
  DEPOSIT = "Deposit",
  TRANSFER = "Transfer",
  BILL_PAYMENT = "Bill Payment",
}

const novaTransacaoo = {
  tipoTransacao: tipoTransacao,
  data: new Date(),
  valor: 0,
};
