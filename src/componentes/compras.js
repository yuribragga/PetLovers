import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { LiaShoppingCartSolid } from "react-icons/lia";
import "./styles/listaGeral.css";

export default function Compras({ tema }) {
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(0);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    const handleIncrementCounter = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleDecrementCounter = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
        }
    };

    const handleConfirm = () => {
        console.log("Confirmação");
    };

    return (
        <div className="container-fluid">
            <div className="modal-compra">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Compra de produto/serviço</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <p>
                                <strong>CPF do cliente relacionado à compra:</strong>
                            </p>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder=" Digite o CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                            </div>
                            <p>
                                <strong>Categoria:</strong>
                            </p>
                            <p>
                                <strong>Nome:</strong>
                            </p>
                            <p>
                                <strong>Preço:</strong>
                            </p>
                            <p>
                                <strong>Quantidade:</strong>
                            </p>
                            <div className="d-flex flex-column align-items-center mt-3">
                                <div className="btn-group d-flex align-items-center mb-2">
                                    <button
                                        onClick={handleDecrementCounter}
                                        type="button"
                                        className="btn btn-sm decrement-btn"
                                    >
                                        <FaMinus style={{ fontSize: 20 }} />
                                    </button>
                                    <p className="count">{count}</p>
                                    <button
                                        onClick={handleIncrementCounter}
                                        type="button"
                                        className="btn btn-sm increment-btn"
                                    >
                                        <FaPlus style={{ fontSize: 20 }} />
                                    </button>
                                </div>

                                <br />

                                <button
                                    onClick={handleConfirm}
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Confirmar
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="produto">
                <div>
                    <h3 className="titulo">Produtos</h3>
                    <div className="list-group">
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link" onClick={handleShow}>
                                Produto 1
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={handleShow}
                                    type="button"
                                    className="botao-comprar"
                                >
                                    <LiaShoppingCartSolid style={{ fontSize: 20 }} />
                                    <p style={{ margin: 0 }}>Comprar</p>
                                </button>
                            </div>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 2
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={handleShow}
                                    type="button"
                                    className="botao-comprar"
                                >
                                    <LiaShoppingCartSolid style={{ fontSize: 20 }} />
                                    <p style={{ margin: 0 }}>Comprar</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="servico">
                <div className="servico">
                    <h3 className="titulo">Serviços</h3>
                    <div className="list-group">
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link" onClick={handleShow}>
                                Serviço 1
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={handleShow}
                                    type="button"
                                    className="botao-comprar"
                                >
                                    <LiaShoppingCartSolid style={{ fontSize: 20 }} />
                                    <p style={{ margin: 0 }}>Comprar</p>
                                </button>
                            </div>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 2
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={handleShow}
                                    type="button"
                                    className="botao-comprar"
                                >
                                    <LiaShoppingCartSolid style={{ fontSize: 20 }} />
                                    <p style={{ margin: 0 }}>Comprar</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
