import Produto from "../../modelo/produto";

export default class ProdutosMaisVendidos {
    private produtos: Array<Produto>
    constructor (produtos: Array<Produto>){
        this.produtos = produtos
    }
    public listar():void {
        this.produtos.sort((a, b) => {
            const consumoA = a.vendas
            const consumoB = b.vendas
            return consumoB - consumoA;
        });
        this.produtos.forEach(produto => {
                console.log(`Nome: ${produto.nome} | Vendas: ${produto.vendas}`);
                console.log(`--------------------------------------`);
        })
    }
}