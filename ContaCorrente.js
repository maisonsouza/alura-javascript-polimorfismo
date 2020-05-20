import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta{
    static  numeroDeContas = 0;

    constructor(novoCliente, novaAgencia) {
        super(0,novoCliente,novaAgencia );
        ContaCorrente.numeroDeContas += 1;
    }

    //Sobrescrevendo o método sacar
    sacar(valor) {
        let taxa = 1.1;
        return super._sacar(valor,taxa);
    }

}