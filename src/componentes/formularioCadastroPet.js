import React, { useState } from "react";
import "./styles/form.css";

export default function FormularioCadastroPet({ tema }) {
    const [cpf, setCpf] = useState("");
    const [petList, setPetList] = useState([{ nome: "", tipo: "", raca: "", genero: "" }]);

    const addPetField = () => {
        setPetList((prevPetList) => [...prevPetList, { nome: "", tipo: "", raca: "", genero: "" }]);
    };

    const handlePetChange = (e, index, campo) => {
        const { value } = e.target;
        setPetList((prevPetList) => {
            const updatedPetList = [...prevPetList];
            updatedPetList[index][campo] = value;
            return updatedPetList;
        });
    };

    const handleCpfChange = (e) => {
        setCpf(e.target.value);
    };

    return (
        <div className="container-fluid">
            <h3 style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>
                Cadastro de Pets
            </h3>
            <form>
                <label className="form-titulo">CPF do cliente:</label>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite o CPF do cliente"
                        value={cpf}
                        onChange={handleCpfChange}
                        aria-label="Digite o CPF do cliente"
                        aria-describedby="basic-addon1"
                    />
                </div>

                <h5 className="form-titulo">Pets:</h5>
                {petList.map((pet, index) => (
                    <div key={index}>
                        <label className="form-titulo">Nome do pet:</label>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Digite o nome do pet"
                                value={pet.nome}
                                onChange={(e) => handlePetChange(e, index, "nome")}
                            />
                        </div>

                        <label className="form-titulo">Tipo do pet:</label>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Digite o tipo do pet"
                                value={pet.tipo}
                                onChange={(e) => handlePetChange(e, index, "tipo")}
                            />
                        </div>

                        <label className="form-titulo">Raça do pet:</label>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Digite a raça do pet"
                                value={pet.raca}
                                onChange={(e) => handlePetChange(e, index, "raca")}
                            />
                        </div>

                        <label className="form-titulo">Gênero do pet:</label>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Digite o gênero do pet"
                                value={pet.genero}
                                onChange={(e) => handlePetChange(e, index, "genero")}
                            />
                        </div>
                    </div>
                ))}

                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    style={{ background: tema, marginBottom: 10 }}
                    onClick={addPetField}
                >
                    Adicionar Pet
                </button>

                <div className="input-group mb-3 d-flex justify-content-center">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        style={{ background: tema }}
                    >
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
}


