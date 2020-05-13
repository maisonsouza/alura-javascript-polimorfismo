export class ContaPoupanca {

    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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

    transferir(valor,contaDestino) {
        console.log("Transferindo ", valor, 'de', this, 'para', contaDestino)
        const valorSacado = this.sacar(valor);
        contaDestino.depositar(valorSacado);
        console.log("Transferência efetuada com sucesso");
    }

}