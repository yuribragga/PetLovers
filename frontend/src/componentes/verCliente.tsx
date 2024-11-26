import { Console } from "console";
import React, { useEffect, useState } from "react";
import Barra from "./barra";
import { Link } from "react-router-dom";
import './style.css'
const DetalhesCliente = () => {
  const [cliente, setCliente] = useState(null);
  const url = window.location.href.split("/");

  useEffect(() => {
    const buscarDetalhesCliente = async () => {
      try {
        const response = await fetch(`http://localhost:32831/cliente/${url[4]}`);
        
        const data = await response.json();
        setCliente(data);
        data.array.forEach(dado => {
          if (dado == null || dado == ''){
            dado = "Não há"
          }
        });
        console.log("Data:", data)
      } catch (error) {
        console.error(error.message);
      }
    };

    buscarDetalhesCliente();
  }, [url[4]]);

  return (
    <div>
      {cliente && (
        <div>
          <Barra textoApp={`RESTful`}/>
          <section className="container">
              <div className="row col s12">
                <h6>Nome:</h6>
                <p>{cliente.nome}</p>
              </div>
              <div className="row col s12">
                <h6>Nome Social:</h6>
                <p>{cliente.nomeSocial}</p>
              </div>
              <div className="row col s12">
                <h6>E-mail:</h6>
                <p>{cliente.email}</p>
              </div>
              <div className="row col s12">
                  <h6>Telefone:</h6>
                  <p>{"(" + cliente.telefones[0].ddd + ")" + " " + cliente.telefones[0].numero}</p>
              </div>
              <div className="row col s12">
                  <h6>Endereço:</h6>
                  <p> {cliente.endereco.rua} n°{cliente.endereco.numero}</p>
                  <p>{cliente.endereco.bairro} - {cliente.endereco.codigoPostal} </p>
                  <p> {cliente.endereco.cidade} - {cliente.endereco.estado}</p>
              </div>
              <div className="row col s12">
                  <h6>Informações Adicionais:</h6>
                  <p>{cliente.endereco.informacoesAdicionais}</p>
              </div>
          </section>
          <div className="botao">
          <Link to={`/cliente/editar/${cliente["id"]}`}> Editar </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetalhesCliente;
