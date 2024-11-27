import React, { Component, ChangeEvent } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Pet from "../../listagens/listaPets";
import "../../styles/form.css";
import Cliente from "../../listagens/listaClientes";
import ProdutosServicos from "../../listagens/listaProdutoServico";

type Props = {
  show: boolean;
  handleClose: () => void;
  tema: string;
  prodServ: ProdutosServicos | null;
  tipo: "Produto" | "Serviço" | ""
};


type State = {
    nome: string;
    valor: number;
    vendas: number;
    tipo: string
  };

export default class ModalEdicaoProdutoServico extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    if (props.prodServ) {
      const { nome, valor, vendas } = props.prodServ;
      this.state = {
        nome: nome,
        valor: valor,
        vendas: vendas,
        tipo: this.props.tipo
      }
    } else {
      this.state = {
        nome: "",
        valor: 0,
        vendas: 0,
        tipo: ""
      };
    }
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { nome, valor, vendas, tipo } = this.state;

    const prodServ = {
        "id": this.props.prodServ?.id || 0,
        "nome": nome, "valor":valor, "vendas":vendas, "tipo": tipo
    };

    axios.post(`http://localhost:5000/produtoservico/${prodServ.id}`, prodServ)
    .then(response => {
      console.log(response.data);
      this.props.handleClose();
      window.location.reload();
    })
    .catch(error => {
      console.error(error + 'Erro ao editar produto / serviço');
    });
}

  render() {
    const { tema } = this.props;
    return (
        <>
          <form onSubmit={this.handleSubmit}>
            <p><strong>Nome: </strong></p>
            <div className="input-group mb-3">
                        <input type="text" className="form-control"value={this.state.nome}  placeholder="Digite o nome do produto/serviço" onChange={(e) => this.setState({ nome: e.target.value })} aria-label="Nome" aria-describedby="basic-addon1" />
            </div><hr/>
            <p><strong>Valor:</strong></p>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                    <input type="number" className="form-control" value={this.state.valor} placeholder="Digite o valor do produto/serviço" onChange={(e) => this.setState({ valor: parseFloat(e.target.value) })}  aria-label="Valor" aria-describedby="basic-addon1" />
                </div> <hr/>
            <div className="input-group mb-3 d-flex justify-content-center">
              <button type="submit"
                className="btn btn-outline-secondary"
                style={{ background: tema, marginBottom: 10 }}> Salvar Alterações</button>
            </div>
          </form>
        </>
    );
  }
}
