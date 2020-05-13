import {Cliente} from "./Cliente.js";

export class ContaCorrente {
    static  numeroDeContas = 0;

    set cliente(novoCliente) {
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(novoCliente, novaAgencia) {
        this.cliente = novoCliente;
        this.agencia = novaAgencia;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;

    }

    sacar(valor) {
        console.log("Sacando", valor, "reais ... ")
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log("Saque realizado com sucesso");
            console.log("Saldo = R$", this._saldo, "\n");
            return valor;
        } else {
            console.log("Saldo em conta insuficiente para o saque\n");
        }
    }

    depositar(valor) {
        console.log("Depositando", valor, "reais ... ")
        if (valor <= 0) {
            return
        } else {
            this._saldo += valor;
            console.log("Depósito realizado com sucesso");
            console.log("Saldo = R$", this._saldo, "\n");
        }
    }

    transferir(valor,contaDestino){
        console.log("Transferindo ",valor, 'de' , this, 'para',contaDestino )
        const valorSacado = this.sacar(valor);
        contaDestino.depositar(valorSacado);
        console.log("Transferência efetuada com sucesso");
    }
}