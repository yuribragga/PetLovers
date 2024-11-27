import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import RG from "../../modelo/rg"
import Telefone from "../../modelo/telefone"
import Cadastro from "../cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public cadastrar(data): {status: number, msg: string} | void {
        if (this.clientes.some(cliente => cliente.getCpf.getValor === data.cpf.cpf)) {
            return { status: 400, msg: "CPF já cadastrado" };
        }

        let cpf = new CPF(data.cpf.cpf, data.cpf.dataEmissao)

        const cliente = new Cliente(data.nome, data.nomeSocial, cpf);

        data.rg.forEach(rg => {
            let rgAdd = new RG(rg.rg, rg.dataEmissao)
            cliente.addRgs(rgAdd);
        });

        data.telefone.forEach(tel => {
            let telAdd = new Telefone(tel.ddd, tel.telefone)
            cliente.addTelefone(telAdd);
        })

        this.clientes.push(cliente);
    }
}