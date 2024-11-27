export default class Produto {
    static ultimoId: number = 0;
    public id: number
    public nome: string
    public valor: number
    public vendas: number
    constructor(nome: string, valor: number) {
        Produto.ultimoId++;
        this.id = Produto.ultimoId;
        this.nome = nome
        this.valor = valor
        this.vendas = 0
} public addVenda(qnt): void {
    this.vendas = this.vendas + qnt
} public removerVenda(qnt): void {
    this.vendas = this.vendas - qnt
}
}