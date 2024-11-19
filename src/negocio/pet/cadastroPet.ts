import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Cadastro from "../cadastro";

export default class CadastroPet extends Cadastro{
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pet: Array<Pet>, clientes: Array<Cliente>) {
        super()
        this.pets = pet
        this.clientes = clientes
        this.entrada = new Entrada()
    }


    public cadastrar(): void {
        console.log(`\nIníciando cadastro de pet`);
            let nome = this.entrada.receberTexto(`Por favor, insira o nome do pet: `)
            let tipo = this.entrada.receberTexto(`Por favor, insira o tipo do pet: `)
            let raca = this.entrada.receberTexto(`Por favor, insira a raça do pet: `)
            let genero = this.entrada.receberTexto(`Por favor, insira o genero do pet: `)
            let pet = new Pet(nome,tipo,raca,genero)

            let vinculando = true
            while (vinculando){
                let donoCPF = this.entrada.receberTexto(`Por favor, insira o CPF do responsável pelo pet:`)
                const clienteAlterado = this.clientes.find(cliente => cliente.getCpf.getValor == donoCPF)
                if (clienteAlterado){
                    clienteAlterado.addPet(pet)
                    pet.setDono(clienteAlterado)
                    console.log(`Pet cadastrado com sucesso!`);
                    vinculando = false
                } else {
                    console.log("CPF não encontrado, tente novamente");
                }
            }
            this.pets.push(pet)

            }
        }