export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor) {
        let taxa = 1;
        return this._sacar(valor,taxa);
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            console.log("Saque realizado com sucesso");
            console.log("Saldo = R$", this._saldo, "\n");
            return valorSacado;
        } else {
            console.log("Saldo em conta insuficiente para o saque\n");
            return 0;
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

    teste(){
        console.log("teste na classe conta");
    }
}