import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";
import ServicosMaisVendidos from "./servicosMaisVendidos";

export default class ListagemServico extends Listagem {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada
    }
    public listar(): void {
        let listando = true
        while (listando) {
            console.log(` --- Opções disponíveis: --- `);
            console.log(`1 - Listar todos os serviços `);
            console.log(`2 - Listar os serviços mais vendidos `);
            console.log(`0 - Voltar`);
        
            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `)

            if (opcao == 1) {
                console.log(`\nLista de todos os serviços:`);
                this.servicos.forEach(servico => {
                    console.log(`ID: ${servico.id} | Nome:  ${servico.nome}`);
                    console.log(`Valor: R$ ${servico.valor} | Vendas: ${servico.vendas}`);
                    console.log(`--------------------------------------`);
                });
                console.log(`\n`);
            } else if (opcao == 2) {
                let listandoTodos = new ServicosMaisVendidos(this.servicos)
                listandoTodos.listar()
            } else if (opcao == 0) {
                listando = false
            } else {
                console.log(`Operação não entendida :(`);
            }

    }
}}