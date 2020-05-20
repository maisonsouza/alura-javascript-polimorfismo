import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

const cliente1 = new Cliente("Maison",98225723287);
const contaCorrenteMaison = new ContaCorrente(0,cliente1,1001);

// Movimentações
contaCorrenteMaison.depositar(500)
contaCorrenteMaison.sacar(50);

const contaPoupancaMaison = new ContaPoupanca(500,cliente1,1001);
contaPoupancaMaison.sacar(50);

console.log(contaPoupancaMaison);
console.log(contaCorrenteMaison);
