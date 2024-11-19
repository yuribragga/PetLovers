import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Exclusão from "../exclusao";

export default class ExclusãoServico extends Exclusão {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super()
        this.servicos = servico
        this.entrada = new Entrada()
    }
    public excluir(): void {
        let excluindo = true

        while (excluindo) {
            this.servicos.forEach( servico => {
                console.log(`ID: ${servico.id} - Nome: ${servico.nome} - Valor: ${servico.valor}`);
            })
            let servicoId = this.entrada.receberNumero("Insira o ID do servico que deseja excluir:")
            const servicoExcluido = this.servicos.find(servico => servico.id == servicoId)
            if (servicoId) {
                this.servicos.splice(this.servicos.indexOf(servicoExcluido));
                excluindo = false
            } else {
                console.log("Operação não entendida :(");
            }
        }

}
}
