import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Cadastro from "../cadastro";

export default class CadastroPet extends Cadastro{
    private pets: Array<Pet>
    private clientes: Array<Cliente>
    constructor(pet: Array<Pet>, clientes: Array<Cliente>) {
        super()
        this.pets = pet
        this.clientes = clientes
    }

    public cadastrar(dados): Promise<void> {
        return new Promise((resolve, reject) => {
            dados.petList.forEach(async (data) => {
                try {
                    const pet = new Pet(data.nome, data.tipo, data.raca, data.genero);
                    const clienteAlterado = this.clientes.find(cliente => cliente.getCpf.getValor === dados.cpf);
        
                    if (clienteAlterado) {
                        pet.setDono(clienteAlterado.getCpf.getValor);
                        clienteAlterado.addPet(pet);
                        this.pets.push(pet);
                        console.log(`Pet cadastrado com sucesso!`);
                        resolve();
                    } else {
                        console.log("CPF não encontrado, tente novamente");
                        reject(new Error("CPF não encontrado, tente novamente"));
                    }
                } catch (error) {
                    console.error("Erro ao cadastrar pet:", error);
                    reject(error);
                }
            });
        });
    }
    
}