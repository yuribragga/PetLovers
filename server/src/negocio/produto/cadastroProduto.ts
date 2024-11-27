import Produto from "../../modelo/produto"
import Cadastro from "../cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }

    public cadastrar(data): void {
        let produto = new Produto(data.nome, data.valor)
        this.produtos.push(produto)
    }
}