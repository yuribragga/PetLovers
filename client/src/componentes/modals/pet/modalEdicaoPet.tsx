import React, { Component, ChangeEvent } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Pet from "../../listagens/listaPets";
import "../../styles/form.css";
import Cliente from "../../listagens/listaClientes";

type Props = {
  show: boolean;
  handleClose: () => void;
  tema: string;
  pet: Pet | null;
};


type State = {
    nome: string;
    raca: string;
    tipo: string;
    genero: string;
    dono: string | null;
    clientes: Cliente[]
  };

export default class ModalEdicaoPet extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    if (props.pet) {
      const { nome, raca, tipo, genero, dono } = props.pet;
      this.state = {
        nome: nome,
        raca: raca,
        tipo: tipo,
        genero: genero,
        dono: dono,
        clientes: []
      }
    } else {
      this.state = {
        nome: "",
        raca: "",
        tipo: "",
        genero: "",
        dono: "",
        clientes: []
      };
    }
  }

  componentDidMount(): void {
    axios.get("http://localhost:5000/clientes")
    .then(response => {
      this.setState({ clientes: response.data });
    })
    .catch(error => {
      console.error("Erro ao obter clientes:", error);
    });
}

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { nome, raca, tipo, genero, dono, clientes} = this.state;

    const pet = {
        "id": this.props.pet?.id || 0,
        "nome": nome, "raca":raca, "tipo":tipo, "genero":genero,
        "dono": dono
    };

    if (clientes.some((cliente: { cpf: { valor: string | null; }; }) => cliente.cpf.valor == dono)) {

    axios.post(`http://localhost:5000/pets/${pet.id}`, pet)
    .then(response => {
      console.log(response.data);
      this.props.handleClose();
      window.location.reload();
    })
    .catch(error => {
      console.error(error + 'Erro ao editar pet');
    });
    } else {
        alert("CPF não encontrado, tente novamente!")
    }
}

  render() {
    const { tema } = this.props;
    return (
      <>
      { this.state.dono != null && (
          <form onSubmit={this.handleSubmit}>
          <p><strong>CPF do dono:</strong></p>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" value={this.state.dono} placeholder="Digite o valor o CPF do dono do pet" onChange={(e) => this.setState({ dono: e.target.value  })}  aria-label="Dono" aria-describedby="basic-addon1" />
                </div> <hr/>
            <p><strong>Nome: </strong></p>
            <div className="input-group mb-3">
                      <input type="text" className="form-control"value={this.state.nome}  placeholder="Digite o nome do pet" onChange={(e) => this.setState({ nome: e.target.value })} aria-label="Nome" aria-describedby="basic-addon1" />
            </div><hr/>
            <p><strong>Tipo:</strong></p>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={this.state.tipo} placeholder="Digite o tipo do pet" onChange={(e) => this.setState({ raca: e.target.value  })}  aria-label="Raça" aria-describedby="basic-addon1" />
                </div> <hr/>
              <p><strong>Raça:</strong></p>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={this.state.raca} placeholder="Digite a raça do pet" onChange={(e) => this.setState({ raca: e.target.value  })}  aria-label="Raça" aria-describedby="basic-addon1" />
                </div> <hr/>
              <p><strong>Gênero:</strong></p>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={this.state.genero} placeholder="Digite o gênero do pet" onChange={(e) => this.setState({ genero: e.target.value  })}  aria-label="Gênero" aria-describedby="basic-addon1" />
                </div> <hr/>
            <div className="input-group mb-3 d-flex justify-content-center">
              <button type="submit"
                className="btn btn-outline-secondary"
                style={{ background: tema, marginBottom: 10 }}> Salvar Alterações</button>
            </div>
          </form>
        )}
      </>
    );
  }
}
