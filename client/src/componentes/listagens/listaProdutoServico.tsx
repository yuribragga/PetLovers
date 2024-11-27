/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "../styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import ModalInformacoesProdutoServicos from "../modals/ProdutoServico/modalInformacoesProdutoServico";
import ModalEdicaoProdutoServico from "../modals/ProdutoServico/modalEdicaoProdutoServico";

export default interface ProdutosServicos {
    id: number;
    nome: string;
    valor: number;
    vendas: number;
};

type Props = {
    tema: string;
};

interface State {
    show: boolean;
    produtos: ProdutosServicos[]
    servicos: ProdutosServicos[]
    proServSelecionado: ProdutosServicos | null
    modalType: string
    tipo: "Produto" | "Serviço" | ""
}

export default class ListaProdutosServico extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            show: false,
            produtos: [],
            servicos: [],
            proServSelecionado: null,
            modalType: '',
            tipo: ''
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/produtos")
          .then(response => {
            this.setState({ produtos: response.data });
          })
          .catch(error => {
            console.error("Erro ao obter produtos:", error);
          });
        axios.get("http://localhost:5000/servicos")
          .then(response => {
            this.setState({ servicos: response.data });
          })
          .catch(error => {
            console.error("Erro ao obter servicos:", error);
          });
    }

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = (produtoservico: ProdutosServicos,  modalType: 'Edição' | 'Informações', tipo?: 'Produto' | 'Serviço') => {
        this.setState({ show: true, proServSelecionado:produtoservico, modalType:modalType });
        if (tipo) {
            this.setState({ tipo: tipo})
        }
    };

    remover = (prodserv: ProdutosServicos, tipo: string) => {
        let id = prodserv.id
        let data = {
            tipo: tipo
        }
        axios.post(`http://localhost:5000/produtoservico/excluir/${id}`, data)
            .then((response) => {
                console.log(response.data);
                if (tipo == "Produto"){
                    this.setState({ produtos: response.data })
                } else if (tipo == "Serviço") {
                    this.setState({ servicos: response.data})
                }
            })
                .catch(function (error) {
                    console.log(error);
                });
    }
    
    render() {
        const {proServSelecionado, modalType, show, tipo} = this.state
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                    <div className="modal-cliente">
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{modalType} do produto/serviço</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {modalType == 'Edição' && (
                        <ModalEdicaoProdutoServico 
                        show={show}
                        handleClose={this.handleClose}
                        tema={tema}
                        prodServ={proServSelecionado}
                        tipo={tipo}
                        />
                        )}
                        {modalType == 'Informações' && (
                        <ModalInformacoesProdutoServicos 
                        show={show}
                        handleClose={this.handleClose}
                        tema={tema}
                        produtoServico={proServSelecionado}
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
                <div className="produtos">
                    <h3 className="titulo">Produtos</h3>
                    <div className="list-group">
                        { this.state.produtos.length > 0 ? (
                            <>
                            {this.state.produtos.map(produto => (
                                <div key={produto.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <a
                            href="#"
                            className="list-group-item-action custom-link"
                            onClick={() => this.handleShow(produto, 'Informações')}
                            >
                            <strong> 
                                {produto.nome}
                            </strong>
                            </a>
                            <div className="btn-group">
                            <button
                                onClick={() => this.handleShow(produto, 'Edição', "Produto")}
                                type="button"
                                className="btn btn-outline-primary"
                                >
                                <FaPencil style={{ fontSize: 20 }} />
                            </button>
                            <button
                                onClick={() => this.remover(produto, "Produto")}
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

                    <div className="servicos">
                        <h3 className="titulo">Serviços</h3>
                        <div className="list-group">
                        { this.state.servicos.length > 0 ? (
                            <>
                            {this.state.servicos.map(servico => (
                            <div key={servico.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <a
                                href="#"
                                className="list-group-item-action custom-link"
                                onClick={() => this.handleShow(servico, 'Informações')}
                                >
                                <strong>
                                {servico.nome}
                                </strong>
                                    
                                </a>
                                <div className="btn-group">
                                <button
                                onClick={() => this.handleShow(servico, 'Edição', "Serviço")}
                                type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <FaPencil style={{ fontSize: 20 }} />
                                </button>
                                <button
                                    onClick={() => this.remover(servico, "Serviço")}
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
