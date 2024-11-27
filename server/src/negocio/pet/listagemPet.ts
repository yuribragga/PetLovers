import Pet from "../../modelo/pet";
import Listagem from "../listagem";

export default class ListagemPet extends Listagem {
    private pets: Array<Pet>
    constructor(pet: Array<Pet>) {
        super()
        this.pets = pet
    }
    public listar(): void {
        console.log(`\nLista de todos os pets:`);
        this.pets.forEach(pet => {
            console.log(`ID: `+ pet.id + `| Nome: ` + pet.getNome);
            console.log(`Tipo: ` + pet.getTipo + `| Raça: ` + pet.getRaca);
            if (pet.getDono == null) {
                var dono = `Sem dono cadastrado`
                console.log(`Gênero: ` + pet.getGenero + ` | Dono: ` + dono);
            } else {
            console.log(`Gênero: ` + pet.getGenero + ` | Dono: ` + pet.getDono);
            }
            console.log(`--------------------------------------`);
        });
    }
}