import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemServicosProdutosPorTipoRaca extends Listagem {
  private clientes: Cliente[];

  constructor(clientes: Cliente[]) {
    super();
    this.clientes = clientes;
  }

  public listar(): void {
    const consumoPorRaca: { [raca: string]: { tipo: string; produtos: string[]; servicos: string[] } } = {};

    this.clientes.forEach((cliente) => {
      cliente.getAllPets.forEach((pet) => {
        const raca = pet.getRaca;
        const tipo = pet.getTipo;
        const servicosConsumidos = cliente.getArrayServicosConsumidos.map((servico) => servico.nome);
        const produtosConsumidos = cliente.getArrayProdutosConsumidos.map((produto) => produto.nome);

        if (!consumoPorRaca[raca]) {
          consumoPorRaca[raca] = { tipo: "", produtos: [], servicos: [] };
        }

        consumoPorRaca[raca].tipo = tipo;
        consumoPorRaca[raca].produtos.push(...produtosConsumidos);
        consumoPorRaca[raca].servicos.push(...servicosConsumidos);
      });
    });

    console.log("Produtos, serviços e tipo mais consumidos por raça de pets:");
    Object.entries(consumoPorRaca).forEach(([raca, consumo]) => {
      console.log(`Raça: ${raca}`);
      console.log(`Tipo: ${consumo.tipo}`);
      console.log("Produtos mais consumidos:");
      this.listarItensMaisConsumidos(consumo.produtos, 3);
      console.log("Serviços mais consumidos:");
      this.listarItensMaisConsumidos(consumo.servicos, 3);
      console.log();
    });
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