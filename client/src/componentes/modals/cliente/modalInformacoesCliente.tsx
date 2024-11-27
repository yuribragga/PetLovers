import React, { Component, ChangeEvent } from "react";
import Cliente from "../../listagens/listaClientes";

type Props = {
    show: boolean;
    handleClose: () => void;
    tema: string;
    cliente: Cliente | null;
  };

export default class ModalInformacoesCliente extends Component<Props> {
    constructor(props: Props) {
      super(props);
    }

    render(){
        const clienteSelecionado = this.props.cliente

        if (clienteSelecionado) {
            
            return(
                <>
        <p><strong>Nome:</strong> {clienteSelecionado.nome}</p> <hr/>
        <p><strong>Nome social:</strong> {clienteSelecionado.nomeSocial}</p> <hr/>
        <p><strong>CPF:</strong> {clienteSelecionado.cpf.valor} - Emitido em: {clienteSelecionado.cpf.dataEmissao}</p> <hr/>
        <p><strong>RG:</strong>{clienteSelecionado.rgs.map ( rg =>  (
            <> <p>{rg.valor} - Emitido em: {rg.dataEmissao} </p> <hr/> </>
            ))}</p>
        <p><strong>Telefone:</strong>{clienteSelecionado.telefones.map ( tel =>  (
            <> <p>({tel.ddd}) {tel.numero} </p> <hr/> </>
          ))}</p>
        <p><strong> Pets: </strong>
      {clienteSelecionado.pets.length > 0 ? (
          <>
          {clienteSelecionado.pets.map(pet => (
              <div key={pet.id}>
              <p><strong>Nome:</strong> {pet.nome}</p>
              <p><strong>Tipo:</strong> {pet.tipo}</p>
              <p><strong>Raça:</strong> {pet.raca}</p>
              <p><strong>Gênero:</strong> {pet.genero}</p>
              <hr/>
              </div>
          ))}
          </>
      ) : (
          <p>Não há pet cadastrado. <hr/> </p>
          )}</p>   
        <p><strong> Serviços Consumidos: </strong>
      {clienteSelecionado.servicosConsumidos.length > 0 ? (
          <>
          {clienteSelecionado.servicosConsumidos.map(serv => (
              <div key={serv.id}>
              <p><strong>Nome:</strong> {serv.nome}</p>
              <p><strong>Valor:</strong> {serv.valor}</p>
              <hr/>
              </div>
          ))}
          </>
      ) : (
          <p>Não há serviços consumidos. <hr/> </p>
      )}</p>  
        <p><strong> Produtos Consumidos: </strong>
      {clienteSelecionado.produtosConsumidos.length > 0 ? (
          <>
          {clienteSelecionado.produtosConsumidos.map(prod => (
              <div key={prod.id}>
              <p><strong>Nome:</strong> {prod.nome}</p>
              <p><strong>Valor:</strong> {prod.valor}</p>
              <hr/>
              </div>
          ))}
          </>
      ) : (
          <p>Não há produtos consumidos. <hr/> </p>
          )}</p> 
      </>
    )}
    }
}
  