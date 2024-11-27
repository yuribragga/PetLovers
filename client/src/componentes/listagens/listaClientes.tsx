import React, { Component } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import "../styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Pet from "./listaPets";
import ProdutosServicos from "./listaProdutoServico";
import ModalEdicaoCliente from "../modals/cliente/modalEdicaoCliente";
import ModalComprasCliente from "../modals/cliente/modalComprasCliente";
import ModalInformacoesCliente from "../modals/cliente/modalInformacoesCliente";

export default interface Cliente {
  id: number;
  nome: string;
  nomeSocial: string;
  cpf: {
    valor: string;
    dataEmissao: string;
  };
  rgs: {
    id: number;
    valor: string;
    dataEmissao: string;
  }[];
  dataCadastro: string;
  telefones: {
    id: number;
    ddd: string;
    numero: string;
  }[];
  produtosConsumidos: ProdutosServicos[];
  servicosConsumidos: ProdutosServicos[];
  pets: Pet[];
}

type Props = {
  tema: string;
};

interface State {
  show: boolean;
  clientes: Cliente[];
  clienteSelecionado: Cliente | null
  modalType: string
  nomeEditavel: string;
  nomeSocialEditavel: string;
};

export default class ListaCliente extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      show: false,
      clientes: [],
      clienteSelecionado: null,
      modalType: '',
      nomeEditavel: '',
      nomeSocialEditavel: '',
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/clientes")
      .then(response => {
        this.setState({ clientes: response.data });
      })
      .catch(error => {
        console.error("Erro ao obter clientes:", error);
      });
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (cliente: Cliente, modalType: 'Compras' | 'Edição' | 'Informações') => {
    this.setState({
      show: true,
      clienteSelecionado: cliente,
      modalType: modalType
    });
  };

  handleShowCompras = (cliente: Cliente) => {
    this.setState({
      clienteSelecionado: cliente,
      modalType: 'compras'
    })
  }

  handleShowEdicao = (cliente: Cliente) => {
    this.setState({
      show: true,
      clienteSelecionado: cliente,
      modalType: 'edicao',
      nomeEditavel: cliente.nome,
      nomeSocialEditavel: cliente.nomeSocial,
    });
  };

  removerCliente = (cliente: Cliente) => {
    let id = cliente.id
    axios.post(`http://localhost:5000/clientes/excluir/${id}`)
        .then((response) => {
            console.log(response.data);
            this.setState({ clientes: response.data });
        })
            .catch(function (error) {
                console.log(error);
            });
  }

  render() {
    const { show, clienteSelecionado, modalType } = this.state;
    const { tema } = this.props;

    return (
      <div className="container-fluid">
        <div className="modal-cliente">
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{`${modalType} do cliente`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {modalType === 'Compras' && (
                <ModalComprasCliente
                  show={show}
                  handleClose={this.handleClose}
                  tema={tema}
                  cliente={clienteSelecionado}
                />
              )}
              {modalType == 'Edição' && (
                <ModalEdicaoCliente 
                show={show}
                handleClose={this.handleClose}
                tema={tema}
                cliente={clienteSelecionado}
                />
              )}
              {modalType == 'Informações' && (
                <ModalInformacoesCliente 
                show={show}
                handleClose={this.handleClose}
                tema={tema}
                cliente={clienteSelecionado}
                />
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className="conteudo">
          <h3 className="titulo">Clientes</h3>
          <div className="list-group">
          { this.state.clientes.length > 0 ? (
           <>
            {this.state.clientes.map(cliente => (
              <div key={cliente.id} className="list-group-item d-flex justify-content-between align-items-center">
                <a
                  href="#"
                  className="list-group-item-action custom-link"
                  onClick={() => this.handleShow(cliente, "Informações")}
                  >
                  <strong> {cliente.nome} </strong> - {cliente.nomeSocial}
                </a>
                <div className="btn-group">
                  <button
                    onClick={() => this.handleShow(cliente, 'Compras')}
                    type= 'button'
                    className="btn btn-outline-primary">
                    <FaCartShopping style={{ fontSize: 20}}/>
                  </button>
                  <button
                    onClick={() => this.handleShow(cliente, 'Edição')}
                    type="button"
                    className="btn btn-outline-primary"
                    >
                    <FaPencil style={{ fontSize: 20 }} />
                  </button>
                  <button
                    onClick={() => this.removerCliente(cliente)}
                    type="button"
                    className="btn btn-outline-danger"
                    >
                    <FaRegTrashCan style={{ fontSize: 20 }} />
                  </button>
                </div>
              </div>
            ))}
              </>
              ) : (
                <h4 className="aviso"> Ainda não há nada para mostrar aqui</h4>
              )}
          </div>
        </div>
      </div>
    );
  }
}
