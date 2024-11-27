/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "../styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Cliente from "./listaClientes";
import ProdutosServicos from "./listaProdutoServico";

type Props = {
    tema: string;
};

export default interface Listagem {
    id: number,
    nome: string,
    nomeSocial: string,
    valorProdutos: number,
    quantidadeProdutos: number,
    valorServicos: number,
    quantidadeServicos: number
}


interface Raca {
    nome: string;
    tipo: string;
    produtos: string[];
    servicos: string[];
  }

interface State {
    listagens: {
        cliProdValor: Listagem [];
        cliProdQnt: Listagem[];
        topProd: {
            id:number,
            nome:string,
            valor:number,
            vendas:number
        }[];
        cliServValor: Listagem[];
        cliServQnt: Listagem[];
        topServ: {
            id:number,
            nome:string,
            valor:number,
            vendas:number
        }[];
        servProdTipoRaca: {
            [raca: string]: Raca;
            }
    }
}

export default class Listagens extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            listagens: {
                cliProdValor: [],
                cliProdQnt: [],
                topProd: [],
                cliServValor: [],
                cliServQnt: [],
                topServ: [],
                servProdTipoRaca: {}
            }
        };
    }

    componentDidMount(): void {
        axios.get("http://localhost:5000/listagens")
        .then(response => {
          this.setState({ listagens: response.data });
        })
        .catch(error => {
          console.error("Erro ao obter listagens:", error);
        });
    }
    render() {
        let listagem = this.state.listagens
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <div className="listagens">
                    <h5 className="titulo">Listagens</h5>
                    <h5 className="subtitulo">Listagem dos 10 clientes que mais consumiram produtos em quantidade</h5>
                    <div className="list-group">
                        { listagem.cliProdQnt.length > 0 ? (
                            <>
                            {listagem.cliProdQnt.map( (cli, index) => (
                            <>
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a
                            href="#"
                            className="list-group-item-action custom-link"
                            >
                            <strong> {index+1}° {cli.nome} </strong> - {cli.nomeSocial}
                            </a>
                                <strong> {cli.quantidadeProdutos}</strong>
                            </div>
                            </>
                            ))}
                            </>
                        ) : (
                            <h5 className="aviso"> Ainda não há nada para mostrar aqui</h5>
                        )}
                    </div>

                    <br/>

                    <h5 className="subtitulo">Listagem dos 10 clientes que mais consumiram serviços em quantidade</h5>
                    <div className="list-group">
                        { listagem.cliServQnt.length > 0 ? (
                            <>
                            {listagem.cliProdQnt.map( (cli, index) => (
                            <>
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a
                            href="#"
                            className="list-group-item-action custom-link"
                            >
                            <strong> {index+1}° {cli.nome}</strong> - {cli.nomeSocial}
                            </a>
                                <strong> {cli.quantidadeServicos}</strong>
                            </div>
                            </>
                            ))}
                            </>
                        ) : (
                            <h5 className="aviso"> Ainda não há nada para mostrar aqui</h5>
                        )}
                    </div>

                    <br />

                    <h5 className="subtitulo">Listagem dos 5 clientes que mais consumiram produtos em valor</h5>
                    <div className="list-group">
                        { listagem.cliProdValor.length > 0 ? (
                            <>
                            {listagem.cliProdValor.map( (cli, index) => (
                            <>
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a
                            href="#"
                            className="list-group-item-action custom-link"
                            >
                            <strong> {index+1}° {cli.nome}</strong> - {cli.nomeSocial}
                            </a>
                            <div>
                                <strong> R$:{cli.valorProdutos}</strong>
                            </div>
                            </div>
                            </>
                            ))}
                            </>
                        ) : (
                            <h5 className="aviso"> Ainda não há nada para mostrar aqui</h5>
                        )}
                    </div>

                    <br/> 

                    <h5 className="subtitulo">Listagem dos 5 clientes que mais consumiram serviços em valor</h5>
                    <div className="list-group">
                        { listagem.cliServValor.length > 0 ? (
                            <>
                            {listagem.cliServValor.map( (cli, index) => (
                            <>
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a
                            href="#"
                            className="list-group-item-action custom-link"
                            >
                            <strong> {index+1}° {cli.nome}</strong> - {cli.nomeSocial}
                            </a>
                            <div>
                                <strong> R$:{cli.valorServicos}</strong>
                            </div>
                            </div>
                            </>
                            ))}
                            </>
                        ) : (
                            <h5 className="aviso"> Ainda não há nada para mostrar aqui</h5>
                        )}
                    </div>

                    <br />

                    <h5 className="subtitulo">Listagem geral dos produtos que mais consumidos</h5>
                    <div className="list-group">
                        { listagem.topProd.length > 0 ? (
                            <>
                            {listagem.topProd.map( (prod, index) => (
                            <>
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a
                            href="#"
                            className="list-group-item-action custom-link"
                            >
                            <strong> {index+1}° {prod.nome}</strong> - R$ {prod.valor}
                            </a>
                            <div>
                                <strong> {prod.vendas}</strong>
                            </div>
                            </div>
                            </>
                            ))}
                            </>
                        ) : (
                            <h5 className="aviso"> Ainda não há nada para mostrar aqui</h5>
                        )}
                    </div>

                    <br />

                    <h5 className="subtitulo">Listagem geral dos serviços que mais consumidos</h5>
                    <div className="list-group">
                        { listagem.topServ.length > 0 ? (
                            <>
                            {listagem.topServ.map( (serv, index) => (
                            <>
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a
                            href="#"
                            className="list-group-item-action custom-link"
                            >
                            <strong> {index+1}° {serv.nome}</strong> - R$ {serv.valor}
                            </a>
                            <div>
                                <strong> {serv.vendas}</strong>
                            </div>
                            </div>
                            </>
                            ))}
                            </>
                        ) : (
                            <h5 className="aviso"> Ainda não há nada para mostrar aqui</h5>
                        )}
                    </div>

                    <br />

                    <h5 className="subtitulo">Listagem geral dos produtos e serviços consumidos por raça e tipo de pet</h5>

                    {Object.keys(listagem.servProdTipoRaca).length !== 0 ? (
                    Object.entries(listagem.servProdTipoRaca).map(([raca, dados], index: number) => (
                        <>
                        <div key={index} className="list-group">
                        <strong>Raça: {raca} - {dados.tipo}</strong>
                        <strong>Produtos:</strong>
                        {dados.produtos.length > 0 && (
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                {dados.produtos.join(", ")}
                            </a>
                            <div>
                                <strong>{dados.produtos.length}</strong>
                            </div>
                            </div>
                        )}

                        <strong>Serviços:</strong>
                        {dados.servicos.length > 0 && (
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                {dados.servicos.join(", ")}
                            </a>
                            <div>
                                <strong>{dados.servicos.length}</strong>
                            </div>
                            </div>
                        )}
                        </div>
                        <br />
                        </>
                    ))
                    ) : (
                    <h5 className="aviso">Ainda não há nada para mostrar aqui</h5>
                    )}

                </div>
            </div>
        );
    }
}
