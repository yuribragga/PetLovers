import React, { useState } from "react";
import "./styles/form.css";

export default function FormularioCadastroProdutoServico ({ tema }) {
    return (
        <div className="container-fluid">
        <h3 style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>Cadastro de produtos e serviços</h3>
        <form>
            <label className="form-titulo">Tipo:</label>
            <div className="input-group mb-3">
                <select className="form-select" id="tipo">
                    <option value="" disabled selected>Selecione a opção que deseja cadastrar</option>
                    <option value="produto">Produto</option>
                    <option value="servico">Serviço</option>
                </select>
            </div>
            <label className="form-titulo">Nome do produto/serviço:</label>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Digite o nome do produto/serviço" aria-label="Nome" aria-describedby="basic-addon1" />
            </div>
            <label className="form-titulo">Valor do produto/serviço:</label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                <input type="number" className="form-control" placeholder="Digite o valor do produto/serviço" aria-label="Valor" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3 d-flex justify-content-center">
                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>
                    Cadastrar
                </button>
            </div>
        </form>
    </div>
    )
}


