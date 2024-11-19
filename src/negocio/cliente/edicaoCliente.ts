import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Edição from "../edicao";

export default class EdicaoCliente extends Edição {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.entrada = new Entrada()
        this.clientes = clientes
    }
    public editar(): void {
        let editando = true

        while (editando) {
            let cpfBusca = this.entrada.receberTexto("Insira o CPF do cliente:")
            const clienteAlterado = this.clientes.find(cliente => cliente.getCpf.getValor == cpfBusca)
            if (clienteAlterado) {
                let nome = this.entrada.receberTexto(`Por favor insira o nome do cliente: `)
                clienteAlterado.nome = nome

                let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
                clienteAlterado.nomeSocial = nomeSocial

                let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
                let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
                let partesData = data.split('/')
                let ano = new Number(partesData[2].valueOf()).valueOf()
                let mes = new Number(partesData[1].valueOf()).valueOf()
                let dia = new Number(partesData[0].valueOf()).valueOf()
                let dataEmissao = new Date(ano, mes, dia)
                let cpf = new CPF(valor, dataEmissao);
                clienteAlterado.setCpf(cpf)
                console.log( `\n Edição concluída :) \n`);
                editando = false
            }
        }

}
}
