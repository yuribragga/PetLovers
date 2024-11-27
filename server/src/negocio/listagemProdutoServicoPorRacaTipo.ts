import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemServicosProdutosPorTipoRaca extends Listagem {
  private clientes: Cliente[];
  public dados: any

  constructor(clientes: Cliente[]) {
    super();
    this.clientes = clientes;
    this.dados = null
  }

  public listar(): void {
    const consumoPorRaca: { [raca: string]: { nome: string, tipo: string; produtos: string[]; servicos: string[] } } = {};

    this.clientes.forEach((cliente) => {
      cliente.getAllPets.forEach((pet) => {
        const nome = pet.getRaca
        const raca = pet.getRaca;
        const tipo = pet.getTipo;
        const servicosConsumidos = cliente.getServicosConsumidos().map((servico) => servico.nome);
        const produtosConsumidos = cliente.getProdutosConsumidos().map((produto) => produto.nome);

        if (!consumoPorRaca[raca]) {
          consumoPorRaca[raca] = { nome: "", tipo: "", produtos: [], servicos: [] };
        }

        consumoPorRaca[raca].tipo = tipo;
        consumoPorRaca[raca].nome = nome;
        consumoPorRaca[raca].produtos.push(...produtosConsumidos);
        consumoPorRaca[raca].servicos.push(...servicosConsumidos);
      });
    });
    this.dados = consumoPorRaca
  }

  public getDados() {
    return this.dados
  }

  private listarItensMaisConsumidos(itens: string[], quantidade: number): void {
    const itemCount: { [item: string]: number } = {};
    itens.forEach((item) => {
      if (!itemCount[item]) {
        itemCount[item] = 0;
      }
      itemCount[item]++;
    });

    const ordenacao = Object.entries(itemCount).sort((a, b) => {
      return b[1] - a[1];
    });

    const restricao = ordenacao.slice(0, quantidade);

    restricao.forEach(([item, quantidade], index) => {
      console.log(`${index + 1}. ${item}  - Quantidade: ${quantidade}`);
    });
  }
}