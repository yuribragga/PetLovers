/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home({ tema }) {
    return (
        <div className="container-fluid">
            <h1 className="titulo-home">PetLovers</h1>
            <h2 className="subtitulo-home">
            Seja bem-vindo ao nosso sistema para gestão de pet shops e clínicas veterinárias!        </h2>
            <hr />
            <div className="recursos">
                <h3 className="titulo-recursos">O que você pode fazer aqui:</h3>
                <ul>
                    <li className="lista-recursos">Cadastrar clientes, pets, produtos e serviços</li>
                    <li className="lista-recursos">Atualizar e excluir informações</li>
                    <li className="lista-recursos">Ver o histórico completo</li>
                    <li className="lista-recursos">Comprar produtos e serviços</li>
                </ul>
            </div>

            <div className="contatos">
                <h3 className="titulo-contatos">Fale conosco:</h3>
                <h5>Nos mande um email!</h5>
                <ul>
                    <li className="lista-contatos">Email: petlovers@gmail.com</li>
                </ul>
            </div>
        </div>
    );
}
