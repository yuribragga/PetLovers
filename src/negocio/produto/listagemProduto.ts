import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Listagem from "../listagem";
import ProdutosMaisVendidos from "./produtosMaisVendidos";

export default class ListagemProduto extends Listagem {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }
    public listar(): void {
        let listando = true
        while (listando) {
            console.log(` --- Opções disponíveis: --- `);
            console.log(`1 - Listar todos os produtos `);
            console.log(`2 - Listar os produtos mais vendidos `);
            console.log(`0 - Voltar`);
        
            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `)

            if (opcao == 1) {
                console.log(`\nLista de todos os produtos:`);
                this.produtos.forEach(produto => {
                    console.log(`ID: ${produto.id} | Nome:  ${produto.nome}`);
                    console.log(`Valor: R$ ${produto.valor} | Vendas: ${produto.vendas}`);
                    console.log(`--------------------------------------`);
                });
                console.log(`\n`);
            } else if (opcao == 2) {
                let listandoTodos = new ProdutosMaisVendidos(this.produtos)
                listandoTodos.listar()
            } else if (opcao == 0) {
                listando = false
            } else {
                console.log(`Operação não entendida :(`);
            }

    }
}}