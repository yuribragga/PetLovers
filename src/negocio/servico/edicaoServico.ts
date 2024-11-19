import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Edição from "../edicao";

export default class EdicaoServico extends Edição  {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super()
        this.servicos = servico
        this.entrada = new Entrada()
    }
    public editar(): void {
        let editando = true

        while (editando) {
            this.servicos.forEach( servico => {
                console.log(`ID: ${servico.id} - Nome: ${servico.nome} - Valor: ${servico.valor}`);
            })
            let servicoId = this.entrada.receberNumero("Insira o ID do servico que deseja excluir:")
            const servicoEditado = this.servicos.find(servico => servico.id == servicoId)
            if (servicoId) {
                let nome = this.entrada.receberTexto(`Por favor informe o nome do servico: `)
                servicoEditado.nome = nome
                let valor = this.entrada.receberNumero(`Por favor informe o valor do serviços: `)
                servicoEditado.valor = valor
                console.log(`Serviço alterado com sucesso!`);
                editando = false
            } else {
                console.log("Operação não entendida :(");
            }
        }

}
}
