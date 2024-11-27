import { Component, ChangeEvent } from "react";
import "../styles/form.css";
import axios from "axios";
import Cliente from "../listagens/listaClientes";

type PetInfo = {
    nome: string;
    tipo: string;
    raca: string;
    genero: string;
};

type Props = {
    tema: string;
};

type State = {
    petList: PetInfo[];
    cliCpf: string;
    clientes: Cliente[]
};

export default class FormularioCadastroPet extends Component<Props, State> {
    state: State = {
        petList: [{ nome: "", tipo: "", raca: "", genero: "" }],
        cliCpf: '',
        clientes: []
    };

    componentDidMount() {
        axios.get("http://localhost:5000/clientes")
          .then(response => {
            this.setState({ clientes: response.data });
          })
          .catch(error => {
            console.error("Erro ao obter clientes:", error);
          });
      }

    addPetField = () => {
        this.setState((prevState) => ({
            petList: [...prevState.petList, { nome: "", tipo: "", raca: "", genero: "" }],
        }));
    };

    handlePetChange = (
        e: ChangeEvent<HTMLInputElement>,
        index: number,
        campo: keyof PetInfo
    ) => {
        const { value } = e.target;
        this.setState((prevState) => {
            const updatedPetList = [...prevState.petList];
            updatedPetList[index][campo] = value;
            return { petList: updatedPetList };
        });
    };

    handleSubmit = (event: any) => {
        event.preventDefault();
    
        let data = {
            'petList': this.state.petList,
            'cpf': this.state.cliCpf
        };
    
        const clientes = this.state.clientes;
        const cliCpf: string = this.state.cliCpf;
        console.log(data);
        
    
        if (clientes.some(cliente => cliente.cpf.valor == cliCpf)) {
            axios.post('http://localhost:5000/pets', data)
                .then((response) => {
                    console.log(response.data);
                    alert("Pet(s) cadastrado com sucesso!");
                    this.setState({
                        petList: [{ nome: "", tipo: "", raca: "", genero: "" }],
                        cliCpf: "",
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            alert("Não há nenhum cliente com o CPF inserido, tente novamente!");
        }
    }
    
    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <h3 style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>
                    Cadastro de Pets
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <label className="form-titulo">CPF do cliente:</label>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite o CPF do cliente"
                            value={this.state.cliCpf}
                            onChange={(e) => this.setState({ cliCpf: e.target.value })}
                            aria-label="Digite o CPF do cliente"
                            aria-describedby="basic-addon1"
                            required
                        />
                    </div>
            
                    <h5 className="form-titulo">Pets:</h5>
                    {this.state.petList.map((pet, index) => (
                        <div key={index}>
                            <label className="form-titulo">Nome do pet:</label>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Digite o nome do pet"
                                    value={pet.nome}
                                    onChange={(e) => this.handlePetChange(e, index, "nome")}
                                    required
                                />
                            </div>

                            <label className="form-titulo">Tipo do pet:</label>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Digite o tipo do pet"
                                    value={pet.tipo}
                                    onChange={(e) => this.handlePetChange(e, index, "tipo")}
                                    required
                                />
                            </div>

                            <label className="form-titulo">Raça do pet:</label>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Digite a raça do pet"
                                    value={pet.raca}
                                    onChange={(e) => this.handlePetChange(e, index, "raca")}
                                    required
                                />
                            </div>

                            <label className="form-titulo">Gênero do pet:</label>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Digite o gênero do pet"
                                    value={pet.genero}
                                    onChange={(e) => this.handlePetChange(e, index, "genero")}
                                    required
                                />
                            </div>
                        </div>
                    ))}

                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        style={{ background: tema, marginBottom: 10 }}
                        onClick={this.addPetField}
                    >
                        Adicionar Pet
                    </button>

                    <div className="input-group mb-3 d-flex justify-content-center">
                        <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
