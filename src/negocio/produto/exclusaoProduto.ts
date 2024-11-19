import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Exclusão from "../exclusao";

export default class ExclusãoProduto extends Exclusão {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public excluir(): void {
        let excluindo = true

        while (excluindo) {
            this.produtos.forEach( produto => {
                console.log(`ID: ${produto.id} - Nome: ${produto.nome} - Valor: ${produto.valor}`);
            })
            let produtoId = this.entrada.receberNumero("Insira o ID do produto que deseja excluir:")
            const produtoExcluido = this.produtos.find(produto => produto.id == produtoId)
            if (produtoId) {
                this.produtos.splice(this.produtos.indexOf(produtoExcluido));
                excluindo = false
            } else {
                console.log("Operação não entendida :(");
            }
        }

}
}
