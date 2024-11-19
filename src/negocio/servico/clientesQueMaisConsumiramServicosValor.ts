import Cliente from "../../modelo/cliente";

export default class ClientesQueMaisConsumiramServicosValor {
    private clientes: Array<Cliente>
    constructor (clientes: Array<Cliente>){
        this.clientes = clientes
    }
    public listar():void {
        this.clientes.sort((a, b) => {
            const consumoA = a.getValorServicosConsumidos()
            const consumoB = b.getValorServicosConsumidos()
            return consumoB - consumoA;
          });
          if (this.clientes.length > 5){
            let topClientes = this.clientes.slice(0,5)
            topClientes.forEach(cliente => {
                console.log(`Nome: ${cliente.nome} | Valor consumido: R$ ${cliente.getValorServicosConsumidos}`);
            })
          } else {
            this.clientes.forEach(cliente => {
                console.log(`Nome: ${cliente.nome} | Valor consumido: R$ ${cliente.getValorServicosConsumidos}`);
            })
          }
}}