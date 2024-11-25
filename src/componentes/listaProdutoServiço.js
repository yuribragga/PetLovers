import React, { useState } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ListaProdutoServico ({ tema }) {
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

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

    return (
        <div className="container-fluid">
                <div className="modal-produtoServico">
                <Modal show={showInfoModal} onHide={handleCloseInfoModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Informações do produto/serviço</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            <strong>Categoria:</strong>
                        </p>
                        <p>
                            <strong>Nome:</strong>
                        </p>
                        <p>
                            <strong>Preço:</strong>
                        </p>
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
                        <Modal.Title>Atualizar produto/serviço</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                        Atualizar
                    </button>
                </div>
            </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseInfoModal}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            <div className="produto">
                <h3 className="titulo">Produtos</h3>
                <div className="list-group">
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="#" className="list-group-item-action custom-link" onClick={handleShowInfoModal}>
                            Produto 1
                        </a>
                        <div className="btn-group">
                            <button
                                onClick={handleShowEditModal}
                                type="button"
                                className="btn btn-outline-primary"
                            >
                                <FaPencil style={{ fontSize: 20 }} />
                            </button>
                            <button
                                onClick={() => console.log("Deletando Produto 1")}
                                type="button"
                                className="btn btn-outline-danger"
                            >
                                <FaRegTrashCan style={{ fontSize: 20 }} />
                            </button>
                        </div>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="#" className="list-group-item-action custom-link" onClick={handleShowInfoModal}>
                            Produto 2
                        </a>
                        <div className="btn-group">
                            <button
                                onClick={handleShowEditModal}
                                type="button"
                                className="btn btn-outline-primary"
                            >
                                <FaPencil style={{ fontSize: 20 }} />
                            </button>
                            <button
                                onClick={() => console.log("Deletando Produto 2")}
                                type="button"
                                className="btn btn-outline-danger"
                            >
                                <FaRegTrashCan style={{ fontSize: 20 }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="servico">
                <h3 className="titulo">Serviços</h3>
                <div className="list-group"> 
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="#" className="list-group-item-action custom-link" onClick={handleShowInfoModal}>
                            Serviço 1
                        </a>
                        <div className="btn-group">
                            <button
                                onClick={() => console.log("Editando Serviço 1")}
                                type="button"
                                className="btn btn-outline-primary"
                            >
                                <FaPencil style={{ fontSize: 20 }} />
                            </button>
                            <button
                                onClick={() => console.log("Deletando Serviço 1")}
                                type="button"
                                className="btn btn-outline-danger"
                            >
                                <FaRegTrashCan style={{ fontSize: 20 }} />
                            </button>
                        </div>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="#" className="list-group-item-action custom-link" onClick={handleShowInfoModal}>
                            Serviço 2
                        </a>
                        <div className="btn-group">
                            <button
                                onClick={() => console.log("Editando Serviço 2")}
                                type="button"
                                className="btn btn-outline-primary"
                            >
                                <FaPencil style={{ fontSize: 20 }} />
                            </button>
                            <button
                                onClick={() => console.log("Deletando Serviço 2")}
                                type="button"
                                className="btn btn-outline-danger"
                            >
                                <FaRegTrashCan style={{ fontSize: 20 }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
