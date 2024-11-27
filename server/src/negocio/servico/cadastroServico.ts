import Servico from "../../modelo/servico"
import Cadastro from "../cadastro"

export default class CadastroServico extends Cadastro {
    private servico: Array<Servico>
    constructor(servico: Array<Servico>) {
        super()
        this.servico = servico
    }

    public cadastrar(data): void {
        let produto = new Servico(data.nome, data.valor)
        this.servico.push(produto)
    }
}