import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Exclusão from "../exclusao";

export default class ExclusãoPet extends Exclusão {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }
    public excluir(): void {
        let excluindo = true

        while (excluindo) {
            this.pets.forEach( pet => {
                console.log(`ID: ${pet.id} - Nome: ${pet.getNome} - Dono: ${pet.getDono.nome}`);
            })
            let petId = this.entrada.receberNumero("Insira o ID do pet que deseja excluir:")
            const petExcluido = this.pets.find(pet => pet.id == petId)
            if (petId) {
                this.pets.splice(this.pets.indexOf(petExcluido));
                petExcluido.getDono.removePet(petExcluido)
                excluindo = false
            } else {
                console.log("Operação não entendida :(");
            }
        }

}
}
