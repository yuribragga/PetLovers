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
    public setCpf(novoCpf: CPF): void{
        this.cpf = novoCpf;
    }
    public setRgs( rgs: Array<any>):void {
        this.rgs = rgs
    }
    public getRgs(): Array<RG> {
        return this.rgs
    }
    public addRgs(Rg : RG): void{
        this.rgs.push(Rg)
    }
    public removeRgs(id: number) {
        this.rgs = this.rgs.filter(rg => rg.id !== id);
    }
    public get getDataCadastro(): string {
        return this.dataCadastro.toDateString()
    }
    public setTel(novoTel: Array<any>): void{
        this.telefones = novoTel;
    }
    public getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public addTelefone(telefone : Telefone): void{
        this.telefones.push(telefone)
    }
    public removeTelefone(id: number) {
        this.telefones = this.telefones.filter(telefone => telefone.id !== id);
    }
    public getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public addProdutosConsumidos(produto: Produto): void{
        this.produtosConsumidos.push(produto)
    }
    public removeProdutosConsumidos(pos: number) {
        if (pos === 0){
            this.servicosConsumidos.shift()
        } else {
        this.produtosConsumidos.splice(pos,1);
        }
    }
    public removeProdutosConsumidosPorId(id: number) {
        this.produtosConsumidos = this.produtosConsumidos.filter(prod => prod.id !== id);
    }
    public getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public addServicosConsumidos(servico: Servico): void{
        this.servicosConsumidos.push(servico)
    }
    public removeServicosConsumidos(pos: number) {
        if (pos === 0){
            this.servicosConsumidos.shift()
        } else {
            this.servicosConsumidos.splice(pos,1);
        }
    }
    public removeServicosConsumidosPorId(id: number) {
        this.servicosConsumidos = this.servicosConsumidos.filter( serv => serv.id !== id)
    }
    public getValorProdutosConsumidos():number{
        let valor = 0
        this.produtosConsumidos.forEach( produto => {
            valor += produto.valor
        })
        return valor
    }
    public getValorServicosConsumidos():number{
        let valor = 0
        this.servicosConsumidos.forEach( servico => {
            valor += servico.valor
        })
        return valor
    }

    public getPets(): Array<Pet>{
        return this.pets
    }
    public addPet(pet: Pet) {
        this.pets.push(pet);
    }
    public removePet(pet: Pet) {
        this.pets = this.pets.filter(p => p.id !== pet.id);
    }
    public removePetPorId(id: number) {
        this.pets = this.pets.filter(pet => pet.id !== id);
    }
    public get getAllPets(): Array<Pet> {
        return this.pets
    }
}