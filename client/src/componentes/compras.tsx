/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "./styles/listaGeral.css";
import { FaMinus, FaPlus } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { LiaShoppingCartSolid } from "react-icons/lia";
import ProdutosServicos from "./listagens/listaProdutoServico";
import axios from "axios";
import Cliente from "./listagens/listaClientes";

type Props = {
    tema: string;
};

interface State {
    show: boolean;
    count: number;
    produtos: ProdutosServicos[]
    servicos: ProdutosServicos[]
    produtoServicoSelecionado: ProdutosServicos | null
    cliCpf: string;
    clientes: Cliente[]
    tipoCompra: string
}

export default class ListaProdutosServico extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            show: false,
            count: 0,
            produtos: [],
            servicos: [],
            produtoServicoSelecionado: null,
            cliCpf: '',
            clientes: [],
            tipoCompra: ''
        };
    }

    async componentDidMount() {
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
            console.error("Erro ao obter serviços:", error);
          });
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

    handleShow = (produtoservico: ProdutosServicos, tipo: string) => {
        this.setState({ show: true, produtoServicoSelecionado:produtoservico, tipoCompra:tipo});
    };

    handleIncrementCounter = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    handleDecrementCounter = () => {
        if (this.state.count > 0) {
            this.setState((prevState) => ({
                count: prevState.count - 1,
            }));
        }
    };

    handleConfirm = (event: any) => {
        event.preventDefault();
    
        const clientes = this.state.clientes
        const cliCpf: string = this.state.cliCpf;

        if (clientes.some(cliente => cliente.cpf.valor === cliCpf)) {
    
            const data = {
                'id': this.state.produtoServicoSelecionado,
                'qnt': this.state.count,
                'cpf': cliCpf,
                'tipo': this.state.tipoCompra
            };
    
            axios.post(`http://localhost:5000/comprar`, data) 
                .then((response) => {
                    console.log(response.data);
                    alert("Produto/Serviço comprado com sucesso!");
    
                    this.setState({
                        count: 0,
                        cliCpf: "",
                    });
                })
                .catch(function (error): void {
                    console.log('erro:',error);
                });
        } else {
            alert("CPF não encontrado. Tente novamente!");
        }
    };
    

    render() {
        const proServSelecionado = this.state.produtoServicoSelecionado
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <div className="modal-compra">
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Informações do produto/serviço</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {proServSelecionado && (
                            <>
                            
                            <p>
                                <strong>Nome:</strong> {proServSelecionado.nome}
                            </p>
                            <p>
                                <strong>Valor:</strong> R$ {proServSelecionado.valor}
                            </p>
                            <strong>CPF do cliente:</strong>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Digite o CPF do cliente"
                                    value={this.state.cliCpf}
                                    onChange={(e) => this.setState({ cliCpf: e.target.value })}
                                    aria-label="Digite o CPF do cliente"
                                    required
                                />
                            <br/>
                                <p>
                                    <strong>Quantidade:</strong>
                                </p>
                                <div className="d-flex flex-column align-items-center mt-3">
                                    <div className="btn-group d-flex align-items-center mb-2">
                                        <button
                                            onClick={this.handleIncrementCounter}
                                            type="button"
                                            className="btn btn-sm increment-btn"
                                        >
                                            <FaPlus style={{ fontSize: 20 }} />
                                        </button>
                                        <p className="count">{this.state.count}</p>
                                        <button
                                            onClick={this.handleDecrementCounter}
                                            type="button"
                                            className="btn btn-sm decrement-btn"
                                        >
                                            <FaMinus style={{ fontSize: 20 }} />
                                        </button>
                                    </div>
                                    
                                    <br/>
                                    
                                    <button
                                        onClick={this.handleConfirm}
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="produto">
                    <h3 className="titulo">Produtos</h3>
                    <div className="list-group">
                    {this.state.produtos.map(produto => (
                        <div key={produto.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <a
                            href="#"
                            className="list-group-item-action custom-link"
                            onClick={() => this.handleShow(produto,'produto')}
                            >
                            <strong>
                                {produto.nome}
                            </strong>
                            </a>
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="botao-comprar"
                                    onClick={() => this.handleShow(produto,'produto')}
                                >
                                    <LiaShoppingCartSolid style={{ fontSize: 20 }} />
                                    <p style={{ margin: 0 }}>Comprar</p>
                                </button>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="servico">
                    <h3 className="titulo">Serviço</h3>
                    <div className="list-group">
                    {this.state.servicos.map(servico => (
                        <div key={servico.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <a
                            href="#"
                            className="list-group-item-action custom-link"
                            onClick={() => this.handleShow(servico,'serviço')}
                            >
                            <strong>
                                {servico.nome}
                            </strong>
                            </a>
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="botao-comprar"
                                    onClick={() => this.handleShow(servico,'serviço')}
                                >
                                    <LiaShoppingCartSolid style={{ fontSize: 20 }} />
                                    <p style={{ margin: 0 }}>Comprar</p>
                                </button>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                </div>
        );
    }
}
