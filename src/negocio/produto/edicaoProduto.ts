import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Edição from "../edicao";

export default class EdicaoProduto extends Edição {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public editar(): void {
        let editando = true

        while (editando) {
            this.produtos.forEach( produto => {
                console.log(`ID: ${produto.id} - Nome: ${produto.nome} - Valor: ${produto.valor}`);
            })
            let produtoId = this.entrada.receberNumero("Insira o ID do produto que deseja editar:")
            const produtoEditado = this.produtos.find(produto => produto.id == produtoId)
            if (produtoId) { 
                let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
                produtoEditado.nome = nome
                let valor = this.entrada.receberNumero(`Por favor informe o valor do produto: `);
                produtoEditado.valor = valor
                console.log(`Produto editado com sucesso!`);
                editando = false
            } else {
                console.log("Operação não entendida :(");
            }
        }

}
}
