import React, { Component, ChangeEvent } from "react";
import Cliente from "../../listagens/listaClientes";
import { FaRegTrashCan } from "react-icons/fa6";
import axios from "axios";

type Props = {
    show: boolean;
    handleClose: () => void;
    tema: string;
    cliente: Cliente | null
  };

type State = {
    cliente: Cliente | null
}

export default class ModalComprasCliente extends Component<Props, State> {
    constructor(props: Props) {
      super(props);
  
      this.state = {
        cliente: props.cliente
      };
    }

    removerItem(pos:number, cliID: number,tipo: 'produtos' | 'serviços', id: number){
      let data = {
            'pos': pos,
            'cliId': cliID,
            'id': id
        }
        console.log(data);
        
        if (tipo == 'produtos'){
        axios.post("http://localhost:5000/produtos/excluircompra",data)
        .then((response) => {
            console.log(response.data);
            this.setState({ cliente: response.data });
        })
            .catch(function (error) {
                console.log(error);
            });
        } else {
            axios.post("http://localhost:5000/servicos/excluircompra",data)
            .then((response) => {
                this.setState({ cliente: response.data });
            })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    render(){
        const clienteSelecionado = this.state.cliente

        if (clienteSelecionado) {
            
            return(
                <>
        <p><strong> Serviços Consumidos: </strong></p>
      {clienteSelecionado.servicosConsumidos.length > 0 ? (
          <>
          {clienteSelecionado.servicosConsumidos.map((serv, index) => (
            <>
              <div key={index} className="d-flex align-items-center">
                <div className="list-group-item-action">
                    <p><strong>Nome:</strong> {serv.nome}</p>
                    <p><strong>Valor:</strong> {serv.valor}</p>
                </div>
                <div>
                    <button
                    onClick={() => this.removerItem(index,clienteSelecionado.id,'serviços', serv.id)}
                    type="button"
                    className="btn btn-outline-danger"
                    >
                    <FaRegTrashCan style={{ fontSize: 30 }} />
                  </button>
                </div>
              </div>
             <hr/>
            </>
          ))}
          </>
      ) : (
          <p>Não há serviços consumidos. <hr/> </p>
      )}
        <p><strong> Produtos Consumidos: </strong></p> 
      {clienteSelecionado.produtosConsumidos.length > 0 ? (
          <>
          {clienteSelecionado.produtosConsumidos.map((prod, index) => (
            <>
              <div key={index} className="d-flex align-items-center">
                <div className="list-group-item-action">
                    <p><strong>Nome:</strong> {prod.nome}</p>
                    <p><strong>Valor:</strong> {prod.valor}</p>
                    </div>
                    <div>
                    <button
                    onClick={() => this.removerItem(index,clienteSelecionado.id,'produtos',prod.id)}
                        type="button"
                            className="btn btn-outline-danger"
                        >
                        <FaRegTrashCan style={{ fontSize: 30 }} />
                    </button>
                </div>
              </div>
            <hr/>
            </>
          ))}
          </>
      ) : (
          <p>Não há produtos consumidos. <hr/> </p>
          )}
      </>
    )}
    }
}
  