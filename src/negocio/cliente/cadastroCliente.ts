import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import RG from "../../modelo/rg"
import Telefone from "../../modelo/telefone"
import Cadastro from "../cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
    console.log(`\nInício do cadastro do cliente`);
        
    const nome = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `)
    const nomeSocial = this.entrada.receberTexto(`Por favor, informe o nome social do cliente: `)
    const cpfValor = this.entrada.receberTexto(`Por favor, informe o número do CPF: `);
    const cpfData = this.entrada.receberTexto(`Por favor, informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
    const cpf = new CPF(cpfValor, this.parseData(cpfData));

    const rgValor = this.entrada.receberTexto(`Por favor, informe o número do RG: `);
    const rgData = this.entrada.receberTexto(`Por favor, informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
    const rg = new RG(rgValor, this.parseData(rgData));

    const telefoneDDD = this.entrada.receberTexto(`Por favor, informe o ddd do telefone: `);
    const telefoneValor = this.entrada.receberTexto(`Por favor, informe o numero do telefone: `);
    const telefone = new Telefone(telefoneDDD, telefoneValor);

    const cliente = new Cliente(nome, nomeSocial, cpf);
    cliente.addRgs(rg);
    cliente.addTelefone(telefone);
    this.clientes.push(cliente);

    console.log(`\nCadastro concluído :)\n`);
    }

    private parseData(dataString: string): Date {
        const partesData = dataString.split('/');
        const ano = parseInt(partesData[2], 10);
        const mes = parseInt(partesData[1], 10);
        const dia = parseInt(partesData[0], 10);

        return new Date(ano, mes, dia);
    }
}