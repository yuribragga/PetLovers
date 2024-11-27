import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"
import Pet from "./pet"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private pets: Array<Pet>
    static getClientes: number
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.pets = []
    }
    public get getClientes(){
        return this.clientes
    }
    public removeCliente(clienteId: number) {
        const cliente = this.clientes.find(cli => cli.id === clienteId)
        cliente.getPets().forEach(pet => {
                this.removePet(pet)
                cliente.removePet(pet);
            });
        this.clientes = this.clientes.filter(cliente => cliente.id !== clienteId);
        }
    
    public getClientesPorID(id:number){
        const cliente = { ...this.clientes.find(cli => cli.id === id)}
        return cliente
    }
    public get getClientesCPF(){
        let cpfs = []
        this.clientes.forEach( cli => {
            cpfs.push(cli.getCpf)
        })
        return cpfs
    }
    public get getProdutos(){
        return this.produtos
    }
    public removeProdutoPorId(id: number) {
        this.produtos = this.produtos.filter(prod => prod.id !== id);
    }
    public removeServicoPorId(id:number) {
        this.servicos = this.servicos.filter(serv => serv.id !== id)
    }
    public get getServicos(){
        return this.servicos
    }
    public get getPets(){
        return this.pets
    }
    public removePet(pet: Pet) {
        this.pets = this.pets.filter(p => p.id !== pet.id);
    }
}