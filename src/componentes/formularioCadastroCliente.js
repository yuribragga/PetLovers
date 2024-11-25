import React, { useState } from 'react';
import "./styles/form.css";

export default function FormularioCadastroCliente({ tema }) {
    const [rgList, setRgList] = useState([{ rg: '', dataEmissao: '' }]);
    const [telefoneList, setTelefoneList] = useState([{ telefone: '' }]);

    const addRgField = () => {
        setRgList([...rgList, { rg: '', dataEmissao: '' }]);
    };

    const handleRgChange = (e, index) => {
        const updatedRgList = [...rgList];
        updatedRgList[index].rg = e.target.value;
        setRgList(updatedRgList);
    };

    const handleDataEmissaoChange = (e, index) => {
        const updatedRgList = [...rgList];
        updatedRgList[index].dataEmissao = e.target.value;
        setRgList(updatedRgList);
    };

    const addTelefoneField = () => {
        setTelefoneList([...telefoneList, { telefone: '' }]);
    };

    const handleTelefoneChange = (e, index) => {
        const updatedTelefoneList = [...telefoneList];
        updatedTelefoneList[index].telefone = e.target.value;
        setTelefoneList(updatedTelefoneList);
    };

    return (
        <div className="container-fluid">
            <h3 style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>
                Cadastro de Clientes
            </h3>
            <form>
                <label className="form-titulo">Nome:</label>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite o nome"
                        aria-label="Nome"
                        aria-describedby="basic-addon1"
                    />
                </div>

                <label className="form-titulo">Nome social:</label>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite o nome social"
                        aria-label="Nome social"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <label className="form-titulo">E-mail:</label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text" className="form-control" placeholder="Digite o E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div>

                <label className="form-titulo">CPF:</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder=" Digite o CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                </div>

                <label className="form-titulo">Data de Emissão do CPF:</label>
                <div className="input-group mb-3">
                    <input type="date" className="form-control" placeholder="Data de Emissão do CPF" aria-label="Data de emissão do CPF" aria-describedby="basic-addon1" />
                </div>

                <label className="form-titulo">RG:</label>
                {rgList.map((rg, index) => (
                    <div key={index} className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite o RG"
                            value={rg.rg}
                            onChange={(e) => handleRgChange(e, index)}
                        />
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Data de Emissão do RG"
                            value={rg.dataEmissao}
                            onChange={(e) => handleDataEmissaoChange(e, index)}
                        />
                    </div>
                ))}

                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    style={{ background: tema, marginBottom: 10 }}
                    onClick={addRgField}
                >
                    Adicionar RG
                </button>

                <br />

                <label className="form-titulo">Telefone:</label>
                {telefoneList.map((telefone, index) => (
                    <div key={index} className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite o telefone"
                            value={telefone.telefone}
                            onChange={(e) => handleTelefoneChange(e, index)}
                        />
                    </div>
                ))}

                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    style={{ background: tema, marginBottom: 10 }}
                    onClick={addTelefoneField}
                >
                    Adicionar Telefone
                </button>

                <div className="input-group mb-3 d-flex justify-content-center">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
}
