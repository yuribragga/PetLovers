import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import CadastroPet from "../negocio/pet/cadastroPet";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import CadastroServico from "../negocio/servico/cadastroServico";
import ListagemCliente from "../negocio/cliente/listagemCliente";
import ListagemPet from "../negocio/pet/listagemPet";
import ListagemProduto from "../negocio/produto/listagemProduto";
import ListagemServico from "../negocio/servico/listagemServico";
import EdicaoCliente from "../negocio/cliente/edicaoCliente";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Telefone from "../modelo/telefone";
import RG from "../modelo/rg";
import AdicaoCliente from "../negocio/cliente/adicaoCliente";
import ExclusaoCliente from "../negocio/cliente/exclusaoCliente";
import EdicaoPet from "../negocio/pet/edicaoPet";
import ExclusãoPet from "../negocio/pet/exclusaoPet";
import EdicaoProduto from "../negocio/produto/edicaoProduto";
import ExclusãoProduto from "../negocio/produto/exclusaoProduto";
import EdicaoServico from "../negocio/servico/edicaoServico";
import ExclusãoServico from "../negocio/servico/exclusaoServico";
import ListagemServicosProdutosPorTipoRaca from "../negocio/produto/listagemProdutoServicoRacaTipo";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

/*cliente teste */
let rgTeste = new RG('565142033', new Date())
let telefoneTeste = new Telefone('12','991059434')
let cpfTeste = new CPF('45642791818',new Date())
let clienteTeste = new Cliente('Felipe', "Felipe", cpfTeste)
clienteTeste.addRgs(rgTeste)
clienteTeste.addTelefone(telefoneTeste)
empresa.getClientes.push(clienteTeste)


while (execucao) {
    console.log(`Opções disponíveis:`);
    console.log(`1 - Cliente `);
    console.log(`2 - Pet `);
    console.log(`3 - Produto `);
    console.log(`4 - Serviço `);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1: // Cliente
            console.log(`\n`);
            console.log(` --- Cliente --- `);
            console.log(`1 - Cadastro `);
            console.log(`2 - Listagem`);
            console.log(`3 - Editar dados`);
            console.log(`4 - Adicionar dados`);
            console.log(`5 - Excluir dados`); 
            console.log(`0 - Voltar`); 

            let topicoCliente = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (topicoCliente) {
                case 1:
                    let cadastroCliente = new CadastroCliente(empresa.getClientes)
                    cadastroCliente.cadastrar()
                    break;
                case 2:
                    let listagemCliente = new ListagemCliente(empresa.getClientes)
                    listagemCliente.listar()
                    break;
                case 3:
                    let editarCliente = new EdicaoCliente(empresa.getClientes)
                    editarCliente.editar()
                    break;
                case 4:
                    let adicionarNoCliente = new AdicaoCliente(empresa.getClientes,empresa.getProdutos,empresa.getServicos,empresa.getPets)
                    adicionarNoCliente.adicionar()
                    break;
                case 5:
                    let excluirCliente = new ExclusaoCliente(empresa.getClientes, empresa.getPets, empresa.getProdutos, empresa.getServicos)
                    excluirCliente.excluir()
                    break;
                case 0: 
                    break;
                default:
                    console.log(`Operação não entendida :(`);
            } break;

        case 2: // Pet
            console.log(`\n`);
            console.log(` --- Pet --- `);
            console.log(`1 - Cadastro`);
            console.log(`2 - Edição`);
            console.log(`3 - Exclusão`);
            console.log(`4 - Listagem de todos os pets`);
            console.log(`5 - Listagem de produtos e serviços mais consumidos por raça e tipo`)
            
            console.log(`0 -  Voltar`); 

            let topicoPet = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (topicoPet) {
                case 1:
                    let cadastrarPet = new CadastroPet(empresa.getPets, empresa.getClientes)
                    cadastrarPet.cadastrar()
                    break;
                case 2:
                    let editarPet = new EdicaoPet(empresa.getPets)
                    editarPet.editar()
                    break;
                case 3:
                    let excluirPet = new ExclusãoPet(empresa.getPets)
                    excluirPet.excluir()
                    break;
                case 4:
                    let listagemPet = new ListagemPet(empresa.getPets)
                    listagemPet.listar()
                case 5:
                    let listagemRacaTipo = new ListagemServicosProdutosPorTipoRaca(empresa.getClientes)
                    listagemRacaTipo.listar()
                case 0: 
                    break;
                default:
                    console.log(`Operação não entendida :(`);
            }
            break;

        case 3: // Produto
            console.log(`\n`);
            console.log(` --- Produto --- `);
            console.log(`1 - Cadastro`);
            console.log(`2 - Edição`);
            console.log(`3 - Listagem`);
            console.log(`4 - Exclusão`);
            console.log(`0 -  Voltar`); 

            let topicoProduto = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (topicoProduto) {
                case 1:
                    let cadastroProduto = new CadastroProduto(empresa.getProdutos)
                    cadastroProduto.cadastrar()
                    break;
                case 2:
                    let edicaoProduto = new EdicaoProduto(empresa.getProdutos)
                    edicaoProduto.editar()
                    break;
                case 3:
                    let listagemProduto = new ListagemProduto(empresa.getProdutos)
                    listagemProduto.listar()
                    break;
                case 4:
                    let exclusaoProduto = new ExclusãoProduto(empresa.getProdutos)
                    exclusaoProduto.excluir()
                case 0: 
                    break;
                default:
                    console.log(`Operação não entendida :(`);
            }
            break;
        case 4: // Serviço
        console.log(`\n`);
        console.log(` --- Serviço --- `);
        console.log(`1 - Cadastro`);
        console.log(`2 - Edição`);
        console.log(`3 - Listagem`);
        console.log(`4 - Exclusão`);
        console.log(`0 -  Voltar`); 

        let topicoServico = entrada.receberNumero(`Por favor, escolha uma opção: `)

        switch (topicoServico) {
            case 1:
                let cadastroServico = new CadastroServico(empresa.getServicos)
                cadastroServico.cadastrar()
                break;
            case 2:
                let edicaoServico = new EdicaoServico(empresa.getServicos)
                edicaoServico.editar()
                break;
            case 3:
                let listagemServico = new ListagemServico(empresa.getServicos)
                listagemServico.listar()
                break;
            case 4:
                let exclusaoServico = new ExclusãoServico(empresa.getServicos)
                exclusaoServico.excluir()
            case 0: 
                break;
            default:
                console.log(`Operação não entendida :(`);
        }
        break;
        case 0: // Sair
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}