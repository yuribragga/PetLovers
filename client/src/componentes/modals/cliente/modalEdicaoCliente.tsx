import React, { Component, ChangeEvent } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Pet from "../../listagens/listaPets";
import "../../styles/form.css";
import { FaRegTrashCan } from "react-icons/fa6";

type Props = {
  show: boolean;
  handleClose: () => void;
  tema: string;
  cliente: Cliente | null;
};

type TelefoneInfo = {
  ddd: string;
  numero: string;
};

type RgInfo = {
  valor: string;
  dataEmissao: string;
};

type Cliente = {
  id: number;
  nome: string;
  nomeSocial: string;
  cpf: { valor: string; dataEmissao: string };
  rgs: RgInfo[];
  telefones: TelefoneInfo[];
  pets: Pet[]
};

type State = {
  nome: string;
  nomeSocial: string;
  cpf: { valor: string; dataEmissao: string };
  rgs: RgInfo[];
  telefones: TelefoneInfo[];
  pets: Pet[]
};

export default class ModalEdicaoCliente extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    if (props.cliente) {
      const { nome, nomeSocial, cpf, rgs, telefones, pets } = props.cliente;
      this.state = {
        nome,
        nomeSocial,
        cpf: cpf,
        rgs: [...rgs],
        telefones: [...telefones],
        pets: [...pets]
      };
    } else {
      this.state = {
        nome: "",
        nomeSocial: "",
        cpf: { valor: "", dataEmissao: "" },
        rgs: [],
        telefones: [],
        pets: []
      };
    }
  }

  addRgField = () => {
    this.setState((prevState) => ({
      ...prevState,
      rgs: [...prevState.rgs, { valor: "", dataEmissao: "" }],
    }));
  };

  removeRgField = (index: number) => {
    this.setState((prevState) => {
      const novosRgs = [...prevState.rgs];
      novosRgs.splice(index, 1);

      return {
        ...prevState,
        rgs: novosRgs,
      };
    });
  };


  addTelefoneField = () => {
    this.setState((prevState) => ({
      ...prevState,
      telefones: [...prevState.telefones, { ddd: '', numero: "" }],
    }));
  };

  removeTelefoneField = (index: number) => {
    this.setState((prevState) => {
      const novosTelefones = [...prevState.telefones];
      novosTelefones.splice(index, 1);  // Remove o telefone no índice especificado

      return {
        ...prevState,
        telefones: novosTelefones,
      };
    });
  };


  handleRgChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    this.setState((prevState) => {
      const updatedRgList = [...prevState.rgs];
      updatedRgList[index].valor = value;
      return { rgs: updatedRgList };
    });
  };

  handleDataEmissaoChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    this.setState((prevState) => {
      const updatedRgList = [...prevState.rgs];
      updatedRgList[index].dataEmissao = value;
      return { rgs: updatedRgList };
    });
  };

  handleDDDChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    this.setState((prevState) => {
      const updatedTelefoneList = [...prevState.telefones];
      updatedTelefoneList[index].ddd = value;
      return { telefones: updatedTelefoneList };
    });
  };

  handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    this.setState((prevState) => {
      const updatedTelefoneList = [...prevState.telefones];
      updatedTelefoneList[index].numero = value;
      return { telefones: updatedTelefoneList };
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { nome, nomeSocial, cpf, rgs, telefones, pets } = this.state;

    const clienteEditado: Cliente = {
      id: this.props.cliente?.id || 0,
      nome,
      nomeSocial,
      cpf,
      rgs,
      telefones,
      pets
    };

    axios.post(`http://localhost:5000/clientes/${clienteEditado.id}`, clienteEditado)
      .then(response => {
        console.log(response.data);
        this.props.handleClose();
        window.location.reload();
      })
      .catch(error => {
        console.error(error + 'Erro ao editar usuário');
        alert("CPF já cadastrado.")
      });
  };

  render() {
    const { tema } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="form-titulo">Nome:</label>
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={this.state.nome} placeholder="Digite o nome" onChange={(e) => this.setState({ nome: e.target.value })} aria-label="Nome" aria-describedby="basic-addon1" required />
        </div>

        <label className="form-titulo">Nome social:</label>
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={this.state.nomeSocial} placeholder="Digite o nome social" onChange={(e) => this.setState({ nomeSocial: e.target.value })} aria-label="Nome social" aria-describedby="basic-addon1" required />
        </div>

        <label className="form-titulo">CPF:</label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={this.state.cpf.valor}
            placeholder="Digite o CPF"
            onChange={(e) => this.setState((prevState) => ({
              cpf: { ...prevState.cpf, valor: e.target.value }
            }))}
            aria-label="CPF"
            aria-describedby="basic-addon1"
            required
          />
        </div>


        <label className="form-titulo">Data de Emissão do CPF:</label>
        <div className="input-group mb-3">
          <input type="date" className="form-control" value={this.state.cpf.dataEmissao} placeholder="Data de Emissão do CPF" onChange={(e) => this.setState(prevState => ({ cpf: { ...prevState.cpf, dataEmissao: e.target.value } }))} aria-label="Data de emissão do CPF" aria-describedby="basic-addon1" required />
        </div>

        <label className="form-titulo">RG:</label>
        {this.state.rgs.map((rg, index) => (
          <div key={index} className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Digite o RG"
              value={rg.valor}
              onChange={(e) => this.handleRgChange(e, index)} required
            />
            <input
              type="date"
              className="form-control"
              placeholder="Data de Emissão do RG"
              value={rg.dataEmissao}
              onChange={(e) => this.handleDataEmissaoChange(e, index)} required
            />
            {index > 0 && (
              <button
                onClick={() => this.removeRgField(index)}
                type="button"
                className="btn btn-outline-danger"
              >
                <FaRegTrashCan style={{ fontSize: 20 }} />
              </button>
            )}
          </div>
        ))}

        <button
          className="btn btn-outline-secondary"
          type="button"
          style={{ background: tema, marginBottom: 10 }}
          onClick={this.addRgField}
        >
          Adicionar RG
        </button>

        <br />

        <label className="form-titulo">Telefone:</label>
        {this.state.telefones.map((telefone, index) => (
          <div key={index} className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Digite o DDD do telefone"
              value={telefone.ddd}
              onChange={(e) => this.handleDDDChange(e, index)} required
            />
            <input
              type="text"
              className="form-control"
              placeholder="Digite o número do telefone"
              value={telefone.numero}
              onChange={(e) => this.handleTelefoneChange(e, index)} required
            />
            {index > 0 && (
              <button
                onClick={() => this.removeTelefoneField(index)}
                type="button"
                className="btn btn-outline-danger"
              >
                <FaRegTrashCan style={{ fontSize: 20 }} />
              </button>
            )}
          </div>
        ))}

        <button
          className="btn btn-outline-secondary"
          type="button"
          style={{ background: tema, marginBottom: 10 }}
          onClick={this.addTelefoneField}
        >
          Adicionar Telefone
        </button>

        <div className="input-group mb-3 d-flex justify-content-center">
          <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>
            Concluír
          </button>
        </div>
      </form>
    );
  }
}
