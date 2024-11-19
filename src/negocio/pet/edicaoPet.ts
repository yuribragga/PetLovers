import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Edição from "../edicao";

export default class EdicaoPet extends Edição {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }
    public editar(): void {
        let editando = true

        while (editando) {
            this.pets.forEach( pet => {
                console.log(`ID: ${pet.id} - Nome: ${pet.getNome} - Dono: ${pet.getDono.nome}`);
            })
            let petId = this.entrada.receberNumero("Insira o ID do pet que deseja alterar")
            const petAlterado = this.pets.find(pet => pet.id == petId)
            if (petId) {
                let nome = this.entrada.receberTexto(`Por favor, insira o nome do pet: `)
                petAlterado.setNome(nome)
                let tipo = this.entrada.receberTexto(`Por favor, insira o tipo do pet: `)
                petAlterado.setTipo(tipo)
                let raca = this.entrada.receberTexto(`Por favor, insira a raça do pet: `)
                petAlterado.setRaca(raca)
                let genero = this.entrada.receberTexto(`Por favor, insira o genero do pet: `)
                petAlterado.setGenero(genero)
                console.log(`\n Edição concluída com sucesso :) \n`);
                editando = false
            } else {
                console.log("Operação não entendida :(");
            }
        }

}
}
