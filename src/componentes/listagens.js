/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "./styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Listagens ({tema}) {
        return (
            <div className="container-fluid">
                <div className="listagens">
                    <h3 className="titulo">Listagens</h3>
                    <h5 className="subtitulo">Listagem dos 10 clientes que mais consumiram produtos ou serviços em quantidade</h5>
                    <div className="list-group">
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Cliente 1
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Cliente 2
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Cliente 3
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Cliente 4
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Cliente 5
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Cliente 6
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Cliente 7
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Cliente 8
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Cliente 9
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Cliente 10
                            </a>
                        </div>
                    </div>

                    <br />

                    <h5 className="subtitulo">Listagem dos 5 clientes que mais consumiram produtos ou serviços em valor</h5>
                    <div className="list-group">
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Cliente 1
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Cliente 2
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Cliente 3
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Cliente 4
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Cliente 5
                            </a>
                        </div>
                    </div>

                    <br />

                    <h5 className="subtitulo">Listagem geral dos serviços mais consumidos.</h5>
                    <div className="list-group">
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 1
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 2
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 3
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 4
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 5
                            </a>
                        </div>
                    </div>

                    <br />
                    <h5 className="subtitulo">Listagem de produtos mais consumidos por tipo de pet.</h5>
                    <div className="list-group">

                        <h6 className="subtitulo">Cachorro</h6>

                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 1
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 2
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 3
                            </a>
                        </div>

                        <h6 className="subtitulo">Gato</h6>

                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 4
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 5
                            </a>
                        </div>
                    </div>

                    <br/>

                    <h5 className="subtitulo">Listagem geral dos produtos mais consumidos.</h5>
                    <div className="list-group">
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 1
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 2
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 3
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 4
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 5
                            </a>
                        </div>
                    </div>

                    <br />

                    <h5 className="subtitulo">Listagem dos serviços mais consumidos por tipo de pet.</h5>
                    <div className="list-group">

                        <h6 className="subtitulo">Cachorro</h6>

                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 1
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 2
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 3
                            </a>
                        </div>

                        <h6 className="subtitulo">Gato</h6>

                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 4
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 5
                            </a>
                        </div>
                    </div>

                    <br />

                    <h5 className="subtitulo">Listagem dos produtos mais consumidos por raça de pet.</h5>
                    <div className="list-group">

                        <h6 className="subtitulo">Shih-tzu</h6>

                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 1
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 2
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 3
                            </a>
                        </div>

                        <h6 className="subtitulo">Siamês</h6>

                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 4
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 5
                            </a>
                        </div>
                    </div>

                    <br />

                    <h5 className="subtitulo">Listagem dos serviços mais consumidos por raça de pet.</h5>
                    <div className="list-group">

                        <h6 className="subtitulo">Munchkin</h6>

                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 1
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 2
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 3
                            </a>
                        </div>

                        <h6 className="subtitulo">Golden retriever</h6>

                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 4
                            </a>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 5
                            </a>
                        </div>
                    </div>

                    <br/> 

                </div>
            </div>
        );
    }
