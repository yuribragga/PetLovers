import React, { Component, ChangeEvent } from "react";
import Pet from "../../listagens/listaPets";
import ProdutosServicos from "../../listagens/listaProdutoServico";

type Props = {
    show: boolean;
    handleClose: () => void;
    tema: string;
    produtoServico: ProdutosServicos | null;

  };

export default class ModalInformacoesProdutoServicos extends Component<Props> {
    constructor(props: Props) {
      super(props);
    }

    render(){
        const produtoServico = this.props.produtoServico
        if (produtoServico) {
            return(
                <>
                    <p><strong>Nome:</strong> {produtoServico.nome}</p>
                    <p><strong>Valor:</strong> R$ {produtoServico.valor}</p>
                    <p><strong>Vendas:</strong> {produtoServico.vendas}</p>
                </>
    )}
    }
}
  