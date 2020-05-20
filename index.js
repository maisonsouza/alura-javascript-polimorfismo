import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {ContaSalario} from "./ContaSalario.js";

const cliente1 = new Cliente("Maison",98225723287);
const contaCorrenteMaison = new ContaCorrente(cliente1,1001);
const contaPoupancaMaison = new ContaPoupanca(500,cliente1,1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);
console.log(contaPoupancaMaison);
console.log(contaCorrenteMaison);
