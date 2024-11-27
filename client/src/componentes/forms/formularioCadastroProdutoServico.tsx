import { Component } from "react";
import "../styles/form.css"
import axios from "axios";

type props = {
    tema: string
}

type State = {
    nome: string,
    valor: number,
    tipo: string
}

export default class FormularioCadastroProdutoServico extends Component<props> {
    state: State = {
        nome: "",
        valor: 0,
        tipo: ""
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let data = {
           'dados': {
               'nome': this.state.nome,
               'valor': this.state.valor
           },
           'tipo': this.state.tipo,
        }    
    
        axios.post('http://localhost:5000/produtoservico', data)
        .then((response) => {
            console.log(response.data);
            alert(`${this.state.tipo} cadastrado com sucesso!`);
            this.setState({
                nome: "",
                valor: 0,
                tipo: ""
            });
        })
            .catch(function (error) {
                console.log(error);
            });
        }
        
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <h3 style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>Cadastro de produtos e serviços</h3>
                <form onSubmit={this.handleSubmit}>
                    <label className="form-titulo">Tipo:</label>
                    <div className="input-group mb-3">
                        <select className="form-select" id="tipo" onChange={(e) => this.setState({ tipo: e.target.value })} >
                            <option value="" disabled selected>Selecione a opção que deseja cadastrar</option>
                            <option value="Produto">Produto</option>
                            <option value="Servico">Serviço</option>
                        </select>
                    </div>
                    <label className="form-titulo">Nome do produto/serviço:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"value={this.state.nome}  placeholder="Digite o nome do produto/serviço" onChange={(e) => this.setState({ nome: e.target.value })} aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <label className="form-titulo">Valor do produto/serviço:</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                        <input type="number" className="form-control" value={this.state.valor} placeholder="Digite o valor do produto/serviço" onChange={(e) => this.setState({ valor: e.target.value })}  aria-label="Valor" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3 d-flex justify-content-center">
                        <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}