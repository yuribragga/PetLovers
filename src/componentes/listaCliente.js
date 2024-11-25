/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, ChangeEvent } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import "./styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


export default function ListaCliente({ tema }) {
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showProdutoModal, setShowProdutoModal] = useState(false);
    const [rgList, setRgList] = useState([{ rg: '', dataEmissao: '' }]);
    const [telefoneList, setTelefoneList] = useState([{ telefone: '' }]);

    const handleShowProdutoModal = () => {
        setShowProdutoModal(true);
    };

    const handleCloseProdutoModal = () => {
        setShowProdutoModal(false);
    };

    const handleShowInfoModal = () => {
        setShowInfoModal(true);
    };

    const handleCloseInfoModal = () => {
        setShowInfoModal(false);
    };

    const handleShowEditModal = () => {
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

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
        <div className="modal-cliente">
            <Modal show={showInfoModal} onHide={handleCloseInfoModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Informações do cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <strong>Nome:</strong>
                    </p>
                    <p>
                        <strong>Nome social:</strong>
                    </p>
                    <p>
                        <strong>E-mail:</strong>
                    </p>
                    <p>
                        <strong>CPF:</strong>
                    </p>
                    <p>
                        <strong>Data de emissão do CPF:</strong>
                    </p>
                    <p>
                        <strong>RG:</strong>
                    </p>
                    <p>
                        <strong>Data de emissão do RG:</strong>
                    </p>
                    <p>
                        <strong>Telefone:</strong>
                    </p>

                    <div className="pets-cliente">
                        <h5 style={{ textAlign: "center" }}>Pets</h5>
                        <p>
                            <strong>Nome do pet:</strong>
                        </p>
                        <p>
                            <strong>Tipo do pet:</strong>
                        </p>
                        <p>
                            <strong>Raça do pet:</strong>
                        </p>
                        <p>
                            <strong>Gênero do pet:</strong>
                        </p>
                    </div>

                    <div className="produtos-servicos">
                        <h5 style={{ textAlign: "center" }}>Produtos/Serviços consumidos</h5>
                        <p>
                            <strong>Nome do produto/serviço:</strong>
                        </p>
                        <p>
                            <strong>Valor do produto/serviço:</strong>
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseInfoModal}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

        <div className="modal-atualizar">
            <Modal show={showEditModal} onHide={handleCloseEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Atualizar cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label className="form-titulo">Nome:</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Digite o nome" aria-label="Nome" aria-describedby="basic-addon1" />
                        </div>

                        <label className="form-titulo">Nome social:</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Digite o nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
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
                                Atualizar
                            </button>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEditModal}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

        <div className="excluir-produtoServico">
            <Modal show={showProdutoModal} onHide={handleCloseProdutoModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Produtos/serviços consumidos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="lista-produtosServicos">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <p style={{ margin: 0 }}>
                                <strong>Nome do produto/serviço 1:</strong>
                            </p>
                            <div className="btn-group" style={{ marginLeft: '5px' }}>
                                <button
                                    type="button"
                                    className="botao-excluir"
                                    style={{
                                        border: 'none',
                                        background: 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <FaRegTrashCan style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </div>
                        <p>
                            <strong>Preço do produto/serviço 1:</strong>
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <p style={{ margin: 0 }}>
                                <strong>Nome do produto/serviço 2:</strong>
                            </p>
                            <div className="btn-group" style={{ marginLeft: '5px' }}>
                                <button
                                    type="button"
                                    className="botao-excluir"
                                    style={{
                                        border: 'none',
                                        background: 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <FaRegTrashCan style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </div>
                        <p>
                            <strong>Preço do produto/serviço 2:</strong>
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseProdutoModal}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

        <div className="conteudo">
            <h3 className="titulo">Clientes</h3>
            <div className="list-group">
                <div className="list-group-item d-flex justify-content-between align-items-center">
                    <a
                        href="#"
                        className="list-group-item-action custom-link"
                        onClick={handleShowInfoModal}
                    >
                        Cliente 1
                    </a>
                    <div className="btn-group">
                        <button
                            onClick={handleShowProdutoModal}
                            type="button"
                            className="btn btn-outline-primary"
                        >
                            <FaShoppingCart style={{ fontSize: 20 }} />
                        </button>
                        <button
                            onClick={handleShowEditModal}
                            type="button"
                            className="btn btn-outline-primary"
                        >
                            <FaPencil style={{ fontSize: 20 }} />
                        </button>
                        <button
                            onClick={() => console.log("Deletando Cliente 1")}
                            type="button"
                            className="btn btn-outline-danger"
                        >
                            <FaRegTrashCan style={{ fontSize: 20 }} />
                        </button>
                    </div>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center">
                    <a
                        href="#"
                        className="list-group-item-action custom-link"
                        onClick={handleShowInfoModal}
                    >
                        Cliente 2
                    </a>
                    <div className="btn-group">
                        <button
                            onClick={handleShowProdutoModal}
                            type="button"
                            className="btn btn-outline-primary"
                        >
                            <FaShoppingCart style={{ fontSize: 20 }} />
                        </button>
                        <button
                            onClick={handleShowEditModal}
                            type="button"
                            className="btn btn-outline-primary"
                        >
                            <FaPencil style={{ fontSize: 20 }} />
                        </button>
                        <button
                            onClick={() => console.log("Deletando Cliente 1")}
                            type="button"
                            className="btn btn-outline-danger"
                        >
                            <FaRegTrashCan style={{ fontSize: 20 }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div >
    )
}