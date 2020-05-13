import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Maison",98225723287);

const contaCorrenteMaison = new Conta(0,cliente1,1001);

// Movimentações
contaCorrenteMaison.depositar(120)
const valorSacado = contaCorrenteMaison.sacar(50);
console.log(valorSacado);
contaCorrenteMaison.sacar(80);

console.log(cliente1);
console.log(contaCorrenteMaison);
console.log(ContaCorrente.numeroDeContas);

const contaPoupancaMaison = new Conta(50,cliente1,1001);
console.log(contaPoupancaMaison);