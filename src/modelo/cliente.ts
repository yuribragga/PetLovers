import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    static ultimoId: number = 0;
    public id: number
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        Cliente.ultimoId++;
        this.id = Cliente.ultimoId;
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public setCpf(novoCpf: CPF): void {
        this.cpf = novoCpf;
    }
    public getRgs(): void {
        if (this.rgs.length > 0) {
            this.rgs.forEach(rg => {
                console.log(`RGs cadastrados:`);
                console.log(`ID: ${rg.id} - RG: ${rg.getValor} - Data de Emissão: ${rg.getDataEmissao}`);
            });
        } else {
            console.log("Este cliente não possui RGs cadastrados");

        }
    }
    public addRgs(Rg: RG): void {
        this.rgs.push(Rg)
    }
    public removeRgs(id: number) {
        this.rgs = this.rgs.filter(rg => rg.id !== id);
    }
    public get getDataCadastro(): string {
        return this.dataCadastro.toDateString()
    }
    public getTelefones(): void {
        if (this.telefones.length > 0) {
            console.log(`Telefones:`);
            this.telefones.forEach(tel => {
                console.log(`ID${tel.id} - Número: ${tel.getDdd} ${tel.getNumero}`);
            })
        } else {
            console.log("Este cliente não possui telefones cadastrados");

        }
    }
    public addTelefone(telefone: Telefone): void {
        this.telefones.push(telefone)
    }
    public removeTelefone(id: number) {
        this.telefones = this.telefones.filter(telefone => telefone.id !== id);
    }
    public get getArrayProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public getProdutosConsumidos(): void {
        if (this.produtosConsumidos.length > 0) {
            let valorTotal = 0
            console.log("Produtos consumidos:");
            this.produtosConsumidos.forEach(produto => {
                console.log(`ID: ${produto.id} - Nome:${produto.nome} - Valor ${produto.valor}`);
                valorTotal += produto.valor
            })
            console.log(`Valor total: R$ ${valorTotal}`);
        } else {
            console.log("Este cliente não possui produtos consumidos");
        }
    }
    public addProdutosConsumidos(produto: Produto): void {
        this.produtosConsumidos.push(produto)
    }
    public removeProdutosConsumidos(id: number) {
        this.produtosConsumidos = this.produtosConsumidos.filter(produtos => produtos.id !== id);
    }
    public get getArrayServicosConsumidos(): Array<Produto> {
        return this.servicosConsumidos
    }
    public getServicosConsumidos(): void {
        if (this.servicosConsumidos.length > 0) {
            let valorTotal = 0
            this.servicosConsumidos.forEach(servico => {
                console.log(`ID: ${servico.id} - Nome:${servico.nome} - Valor ${servico.valor}`);
                valorTotal += servico.valor
            })
            console.log(`Valor total: R$ ${valorTotal}`);
        } else {
            console.log("Este cliente não possui serviços consumidos");
        }
    }
    public addServicosConsumidos(servico: Servico): void {
        this.servicosConsumidos.push(servico)
    }
    public removeServicosConsumidos(id: number) {
        this.servicosConsumidos = this.servicosConsumidos.filter(servicos => servicos.id !== id);
    }
    public getValorProdutosConsumidos(): number {
        let valor = 0
        this.produtosConsumidos.forEach(produto => {
            valor += produto.valor
        })
        return valor
    }
    public getValorServicosConsumidos(): number {
        let valor = 0
        this.servicosConsumidos.forEach(servico => {
            valor += servico.valor
        })
        return valor
    }

    public getPets(): void  {
        if (this.pets.length > 0) {
            console.log("Pets vinculados:");
            this.pets.forEach(pet => {
                console.log(`ID: ${pet.id} - Nome: ${pet.getNome} - Tipo: ${pet.getTipo} - Raça: ${pet.getRaca} - Gênero: ${pet.getGenero}`);
            })
        } else {
            console.log("Este cliente não possui pets vinculados");
        }
    }
    public addPet(pet: Pet) {
        this.pets.push(pet);
        pet.setDono(this);
    }
    public removePet(pet: Pet) {
        this.pets.splice(this.pets.indexOf(pet), 1);
        pet.setDono(null)
    }
    public get getAllPets(): Array<Pet> {
        return this.pets
    }
}