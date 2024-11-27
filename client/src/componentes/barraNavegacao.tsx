/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    tema: string,
    botoes: string[],
    seletorView: Function
}

export default class BarraNavegacao extends Component<props> {
    constructor(props: props | Readonly<props>) {
        super(props);
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this);
    }

    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>;
        } else {
            let lista = this.props.botoes.map(valor => (
                <li key={valor} className="nav-item">
                    <a className="nav-link" href="#" onClick={(e) => this.props.seletorView(valor, e)}>
                        {valor}
                    </a>
                </li>
            ));
            return lista;
        }
    }

    render() {
        let tema = this.props.tema;
        return (
            <>
                <nav className="navbar navbar-expand-lg" data-bs-theme="light" style={{ backgroundColor: tema, marginBottom: 10 }}>
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">PetLovers</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {this.gerarListaBotoes()}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Cadastrar
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={(e) => this.props.seletorView('Cadastro de Cliente', e)}>
                                                Cliente
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={(e) => this.props.seletorView('Cadastro de Pets', e)}>
                                                Pet
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={(e) => this.props.seletorView('Cadastro de Produto e Serviço', e)}>
                                                Produto e Serviço
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}
