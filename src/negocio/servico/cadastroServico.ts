import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Cadastro from "../cadastro"

export default class CadastroProduto extends Cadastro {
    private servico: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super()
        this.servico = servico
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro de serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do servico: `)
        let valor = this.entrada.receberNumero(`Por favor informe o valor do serviços: `);
        let produto = new Servico(nome, valor)
        this.servico.push(produto)
        console.log(`\nCadastro concluído :)\n`);
    }
}