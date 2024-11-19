import Cliente from "../../modelo/cliente";

export default class ClientesQueMaisConsumiramProdutosValor {
    private clientes: Array<Cliente>
    constructor (clientes: Array<Cliente>){
        this.clientes = clientes
    }
    public listar():void {
        this.clientes.sort((a, b) => {
            const consumoA = a.getValorProdutosConsumidos()
            const consumoB = b.getValorProdutosConsumidos()
            return consumoB - consumoA;
        });
        if (this.clientes.length > 5){
            let topClientes = this.clientes.slice(0,5)
            topClientes.forEach(cliente => {
                console.log(`Nome: ${cliente.nome} | Valor consumido: R$ ${cliente.getValorProdutosConsumidos}`);
            })
        } else {
            this.clientes.forEach(cliente => {
                console.log(`Nome: ${cliente.nome} | Valor consumido: R$ ${cliente.getValorProdutosConsumidos}`);
        })
    }
}}