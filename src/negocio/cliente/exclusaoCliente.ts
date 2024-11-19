import { privateDecrypt } from "crypto";
import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Servico from "../../modelo/servico";
import Exclusão from "../exclusao";

export default class ExclusaoCliente extends Exclusão {
    private clientes: Array<Cliente>
    private entrada: Entrada
    private pets: Array<Pet>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, pets: Array<Pet>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.entrada = new Entrada()
        this.pets = pets
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
    }
    public excluir(): void {
        let excluindo = true
        
        while (excluindo) {
            console.log(` --- Opções disponíveis: --- `);
            console.log(`1 - RG `);
            console.log(`2 - Telefone `);
            console.log(`3 - Produto consumido `);
            console.log(`4 - Serviço consumido `);
            console.log(`5 - Desvincular Pet `);
            console.log(`6 - Excluir Cliente `);
            
            console.log(`0 - Voltar`);
        
            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            let cpfBusca = this.entrada.receberTexto("Insira o CPF do cliente:")
            const clienteAlterado = this.clientes.find(cliente => cliente.getCpf.getValor == cpfBusca)
            if (clienteAlterado) {
                if (opcao == 1){
                    clienteAlterado.getRgs()
                    let rgID = this.entrada.receberNumero("Insira o ID do RG que deseja excluir:")
                    clienteAlterado.removeRgs(rgID)        
                    console.log("RG excluído com sucesso!");
                } else if (opcao == 2) {
                    clienteAlterado.getTelefones()
                    let telID = this.entrada.receberNumero("Insira o ID do Telefone que deseja excluir:")
                    clienteAlterado.removeTelefone(telID) 
                    console.log("Telefone excluído com sucesso!");     
                } else if (opcao == 3) {
                    clienteAlterado.getProdutosConsumidos()
                    let produtoID = this.entrada.receberNumero("Insira o ID do Produto que deseja excluir:")
                    clienteAlterado.removeProdutosConsumidos(produtoID)
                    let produtoExcluido = this.produtos.find( produto => produto.id == produtoID)
                    produtoExcluido.removerVenda()
                    console.log("Produto excluído com sucesso!");     
                } else if (opcao == 4) {
                    clienteAlterado.getServicosConsumidos()
                    let servicoID = this.entrada.receberNumero("Insira o ID do Serviço que deseja excluir:")
                    clienteAlterado.removeServicosConsumidos(servicoID)
                    let servicoExcluido = this.servicos.find( servico => servico.id == servicoID)
                    servicoExcluido.removerVenda()
                    console.log("Serviço excluído com sucesso!");
                } else if (opcao == 5) {
                    clienteAlterado.getPets()
                    let petID = this.entrada.receberNumero("Insira o ID do Pet que deseja desvincular:")
                    let petSelecionado = this.pets.find(pet => pet.id == petID)
                    clienteAlterado.removePet(petSelecionado) 
                    console.log("Pet desvinculado com sucesso! (Caso deseja, excluir o Pet acesse: Pet -> Excluir Pet)");
                } else if (opcao == 6) {
                    this.clientes = this.clientes.filter(cliente => cliente.id !== clienteAlterado.id);
                    excluindo = false
                } else if (opcao == 0) {
                    console.log("Voltando...");
                    excluindo = false
                } else {
                    console.log(`Operação não entendida :(`);
                    
                }
            }
        }

}
}
