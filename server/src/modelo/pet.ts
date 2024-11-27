import Cliente from "./cliente"
import Produto from "./produto";
import Servico from "./servico";

export default class Pet {
    static ultimoId: number = 0;
    public id: number
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    private dono: string | null

    constructor(nome: string, tipo: string, raca: string, genero: string) {
        Pet.ultimoId++;
        this.id = Pet.ultimoId;
        this.nome = nome
        this.tipo = tipo
        this.raca = raca
        this.genero = genero
        this.dono = null
    }

    public get getNome(){return this.nome}
    public setNome(novoNome){
        this.nome = novoNome
    }
    public get getRaca(){return this.raca}
    public setRaca(novaRaca){
        this.raca = novaRaca
    }
    public get getGenero(){return this.genero}
    public setGenero(novoGenero){
        this.genero = novoGenero
    }
    public get getTipo(){return this.tipo}
    public setTipo(novoTipo){
        this.tipo = novoTipo
    }
    public get getDono(){return this.dono}
    public setDono(novoDono:string | null):void {
        this.dono = novoDono
    }
}