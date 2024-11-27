/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "../styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Cliente from "./listaClientes";
import axios from "axios";
import ModalEdicaoCliente from "../modals/pet/modalEdicaoPet";
import ModalEdicaoPet from "../modals/pet/modalEdicaoPet";
import ModalInformacoesPet from "../modals/pet/modalInformacoesPet";

export default interface Pet {
    id: number;
    nome: string;
    tipo: string;
    raca: string;
    genero: string;
    dono: string | null;
  }
type Props = {
    tema: string;
};

interface State {
    show: boolean;
    pets: Pet[];
    petSelecionado: Pet | null
    modalType: string
}

export default class ListaPets extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            show: false,
            pets:[],
            petSelecionado: null,
            modalType: '',
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/pets")
          .then(response => {
            this.setState({ pets: response.data });
          })
          .catch(error => {
            console.error("Erro ao obter clientes:", error);
          });
      }

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = (pet: Pet, modalType:  | 'Edição' | 'Informações') => {
        this.setState({ show: true, petSelecionado: pet, modalType:modalType });
    };

    remover = (pet: Pet) => {
        let id = pet.id
        axios.post(`http://localhost:5000/pets/excluir/${id}`)
            .then((response) => {
                console.log(response.data);
                this.setState({ pets: response.data });
            })
                .catch(function (error) {
                    console.log(error);
                });
    }

    render() {
        const { petSelecionado, modalType, show } = this.state;
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <div className="modal-cliente">
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Informações do pet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {modalType == 'Edição' && (
                            <ModalEdicaoPet 
                            show={show}
                            handleClose={this.handleClose}
                            tema={tema}
                            pet={petSelecionado}
                            />
                        )}
                        {modalType == 'Informações' && (
                            <>
                            <ModalInformacoesPet 
                            show={show}
                            handleClose={this.handleClose}
                            tema={tema}
                            pet={petSelecionado}
                            />
                             </>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="pets">
                <h3 className="titulo">Pets</h3>
                <div className="list-group">
                { this.state.pets.length > 0 ? (
                    <>
                    {this.state.pets.map(pet => (
                        <div key={pet.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <a
                        href="#"
                        className="list-group-item-action custom-link"
                        onClick={() => this.handleShow(pet, 'Informações')}
                        >
                        <strong> {pet.nome} </strong>
                        </a>
                        <div className="btn-group">
                        <button
                           onClick={() => this.handleShow(pet, 'Edição')}
                           type="button"
                           className="btn btn-outline-primary"
                           >
                            <FaPencil style={{ fontSize: 20 }} />
                        </button>
                        <button
                            onClick={() => this.remover(pet)}
                            type="button"
                            className="btn btn-outline-danger"
                            >
                            <FaRegTrashCan style={{ fontSize: 20 }} />
                        </button>
                        </div>
                    </div>
                    ))}
                    </>
                    ) : (
                        <h4 className="aviso"> Ainda não há nada para mostrar aqui</h4>
                    )}
                </div>
                </div>

            </div>
        );
    }
}
