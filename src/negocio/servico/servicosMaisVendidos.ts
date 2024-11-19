import Servico from "../../modelo/servico";

export default class ServicosMaisVendidos {
    private servicos: Array<Servico>
    constructor (servicos: Array<Servico>){
        this.servicos = servicos
    }
    public listar():void {
        this.servicos.sort((a, b) => {
            const consumoA = a.vendas
            const consumoB = b.vendas
            return consumoB - consumoA;
        });
        this.servicos.forEach(servico => {
                console.log(`Nome: ${servico.nome} | Vendas: ${servico.vendas}`);
                console.log(`--------------------------------------`);
        })
    }
}