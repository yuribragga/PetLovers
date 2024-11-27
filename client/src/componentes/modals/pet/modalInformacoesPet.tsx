import React, { Component, ChangeEvent } from "react";
import Pet from "../../listagens/listaPets";

type Props = {
    show: boolean;
    handleClose: () => void;
    tema: string;
    pet: Pet | null;
  };

export default class ModalInformacoesPet extends Component<Props> {
    constructor(props: Props) {
      super(props);
    }

    render(){
        const petSelecionado = this.props.pet

        if (petSelecionado) {
            return(
                <>
                    <p><strong>Nome:</strong> {petSelecionado.nome}</p> <hr/>
                    <p><strong>Tipo:</strong>{petSelecionado.tipo}</p> <hr/>
                    <p><strong>Raça:</strong> {petSelecionado.raca}</p> <hr/>
                    <p><strong>Gênero:</strong> {petSelecionado.genero}</p> <hr/>
                    <p><strong>Cpf do dono:</strong>{petSelecionado.dono}</p>
                </>
    )}
    }
}
  