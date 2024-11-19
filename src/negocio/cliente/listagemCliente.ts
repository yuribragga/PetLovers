import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";
import ClientesQueMaisConsumiramProdutosQuant from "../produto/clientesQueMaisConsumiramProdutosQuant";
import ClientesQueMaisConsumiramProdutosValor from "../produto/clientesQueMaisConsumiramProdutosValor";
import ClientesQueMaisConsumiramServicosQuant from "../servico/clientesQueMaisConsumiramServicosQuant";
import ClientesQueMaisConsumiramServicosValor from "../servico/clientesQueMaisConsumiramServicosValor";

export default class ListagemCliente extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar(): void {
        let listando = true
        while (listando) {
            console.log(` --- Opções disponíveis: --- `);
            console.log(`1 - Listar todos os clientes `);
            console.log(`2 - Listar consumo de um cliente `);
            console.log(`3 - Top 10 cliente que mais consumiram produtos (Quantidade) `);
            console.log(`4 - Top 5 clientes que mais consumiram produtos (Valor) `);
            console.log(`3 - Top 10 cliente que mais consumiram serviços (Quantidade) `);
            console.log(`4 - Top 5 clientes que mais consumiram serviços (Valor) `);
            console.log(`0 - Voltar`);
        
            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            if (opcao == 1){
                    console.log(`\nLista de todos os clientes:`);
                    this.clientes.forEach(cliente => {
                        console.log(`ID: `+ cliente.id + ` - Nome: ` + cliente.nome + ` - Nome social: ` + cliente.nomeSocial);
                        console.log(`CPF: ` + cliente.getCpf.getValor + ` - Data de Emissão: ` + cliente.getCpf.getDataEmissao);
                        cliente.getTelefones();
                        cliente.getRgs();   
                        cliente.getPets()                     
                        console.log(`--------------------------------------`);
                    });
                    listando = false
            } else if (opcao == 2) {
                let cpf = this.entrada.receberTexto("Insira o CPF do cliente:")
                console.log(`\n`);
                let clienteEscolhido = this.clientes.find(cliente => cliente.getCpf.getValor == cpf)
                if (clienteEscolhido) {
                    console.log(`ID: `+ clienteEscolhido.id + ` - Nome: ` + clienteEscolhido.nome + ` - Nome social: ` + clienteEscolhido.nomeSocial);
                    clienteEscolhido.getProdutosConsumidos()
                    clienteEscolhido.getServicosConsumidos()
                    console.log(`--------------------------------------`);
                    listando = false
                } else {
                    console.log(`CPF não encontrado!`);
                }
            } else if (opcao == 3) {
                let top10 = new ClientesQueMaisConsumiramProdutosQuant(this.clientes)
                top10.listar()
                listando = false
            } else if (opcao == 4) {
                let top5 = new ClientesQueMaisConsumiramProdutosValor(this.clientes)
                top5.listar()
                listando = false
            } else if (opcao == 5) {
                let top10 = new ClientesQueMaisConsumiramServicosQuant(this.clientes)
                top10.listar()
                listando = false
            } else if (opcao == 6) {
                let top5 = new ClientesQueMaisConsumiramServicosValor(this.clientes)
                top5.listar()
                listando = false
            } else {
                console.log(`Operação não entendida :(`);
            }
    }}
}
