import { Component, ChangeEvent } from "react";
import "../styles/form.css";
import axios from "axios";

type TelefoneInfo = {
    ddd: string,
    telefone: string;
};

type RgInfo = {
    rg: string;
    dataEmissao: string;
};

type Props = {
    tema: string;
};

type State = {
    nome: string;
    nomeSocial: string;
    cpf: { cpf: string, dataEmissao: any }
    rgList: RgInfo[];
    telefoneList: TelefoneInfo[];
};

export default class FormularioCadastroCliente extends Component<Props, State> {
    state: State = {
        nome: "",
        nomeSocial: "",
        cpf: { cpf: '', dataEmissao: '' },
        rgList: [{ rg: "", dataEmissao: "" }],
        telefoneList: [{ ddd: '', telefone: "" }],
    };

    addRgField = () => {
        this.setState((prevState) => ({
            rgList: [...prevState.rgList, { rg: "", dataEmissao: "" }],
        }));
    };

    addTelefoneField = () => {
        this.setState((prevState) => ({
            telefoneList: [...prevState.telefoneList, { ddd: '', telefone: "" }],
        }));
    };

    handleRgChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        this.setState((prevState) => {
            const updatedRgList = [...prevState.rgList];
            updatedRgList[index].rg = value;
            return { rgList: updatedRgList };
        });
    };

    handleDataEmissaoChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        this.setState((prevState) => {
            const updatedRgList = [...prevState.rgList];
            updatedRgList[index].dataEmissao = value;
            return { rgList: updatedRgList };
        });
    };

    handleDDDChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        this.setState((prevState) => {
            const updatedTelefoneList = [...prevState.telefoneList];
            updatedTelefoneList[index].ddd = value;
            return { telefoneList: updatedTelefoneList };
        });
    };

    handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        this.setState((prevState) => {
            const updatedTelefoneList = [...prevState.telefoneList];
            updatedTelefoneList[index].telefone = value;
            return { telefoneList: updatedTelefoneList };
        });
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let data = {
            'nome': this.state.nome,
            'nomeSocial': this.state.nomeSocial,
            'cpf': this.state.cpf,
            'rg': this.state.rgList,
            'telefone': this.state.telefoneList
        }

        axios.post('http://localhost:5000/clientes', data)
            .then((response) => {
                alert("Cliente cadastrado com sucesso!");
                this.setState({
                    nome: "",
                    nomeSocial: "",
                    cpf: { cpf: '', dataEmissao: '' },
                    rgList: [{ rg: "", dataEmissao: "" }],
                    telefoneList: [{ ddd: '', telefone: "" }],
                });
            })
            .catch(function (error) {
                if (error.response.data) {
                    alert("CPF já cadastrado!");
                }
            });
    }

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <h3 style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>
                    Cadastro de Clientes
                </h3>
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
                        <input type="text" className="form-control" value={this.state.cpf.cpf} placeholder=" Digite o CPF" onChange={(e) => this.setState(prevState => ({ cpf: { ...prevState.cpf, cpf: e.target.value } }))} aria-label="CPF" aria-describedby="basic-addon1" required />
                    </div>

                    <label className="form-titulo">Data de Emissão do CPF:</label>
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" value={this.state.cpf.dataEmissao} placeholder="Data de Emissão do CPF" onChange={(e) => this.setState(prevState => ({ cpf: { ...prevState.cpf, dataEmissao: e.target.value } }))} aria-label="Data de emissão do CPF" aria-describedby="basic-addon1" required />
                    </div>

                    <label className="form-titulo">RG:</label>
                    {this.state.rgList.map((rg, index) => (
                        <div key={index} className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Digite o RG"
                                value={rg.rg}
                                onChange={(e) => this.handleRgChange(e, index)} required
                            />
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Data de Emissão do RG"
                                value={rg.dataEmissao}
                                onChange={(e) => this.handleDataEmissaoChange(e, index)} required
                            />
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
                    {this.state.telefoneList.map((telefone, index) => (
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
                                value={telefone.telefone}
                                onChange={(e) => this.handleTelefoneChange(e, index)} required
                            />
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
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
