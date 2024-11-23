import { Component } from "react";
import CadastrarCliente from "../cadastrar/cadastradorCliente";
import Endereco from "../endereco";
import Telefone from "../telefone";
import Barra from "./barra";


export default class FormularioCliente extends Component {
    private nome: string
    private nomeSocial: string
    private email: string
    private numero: string
    private ddd: string
    private estado: string
    private cidade: string
    private bairro: string
    private rua: string
    private codigoPostal: string
    private ruaNumero: string
    private informacoesAdicionais: string

    constructor(props) {
        super(props)
        this.capturarNome = this.capturarNome.bind(this)
        this.capturarNomeSocial = this.capturarNomeSocial.bind(this)
        this.capturarEmail = this.capturarEmail.bind(this)
        this.capturarNumero = this.capturarNumero.bind(this)
        this.capturarDDD = this.capturarDDD.bind(this)
        this.capturarEstado = this.capturarEstado.bind(this)
        this.capturarCidade = this.capturarCidade.bind(this)
        this.capturarBairro = this.capturarBairro.bind(this)
        this.capturarRua = this.capturarRua.bind(this)
        this.capturarRuaNumero = this.capturarRuaNumero.bind(this)
        this.capturarCodigoPostal = this.capturarCodigoPostal.bind(this)
        this.capturarInfoAdicionais = this.capturarInfoAdicionais.bind(this)

        this.submeterFormulario = this.submeterFormulario.bind(this)
        this.cadastrarCliente = this.cadastrarCliente.bind(this)
    }

    public cadastrarCliente(objeto: Object) {
        let cadastrador = new CadastrarCliente()
        cadastrador.cadastrar(objeto)
    }

    public capturarNome(evento: any) {
        this.nome = evento.target.value
    }

    public capturarNomeSocial(evento: any) {
        this.nomeSocial = evento.target.value
    }

    public capturarEmail(evento: any) {
        this.email = evento.target.value
    }

    public capturarNumero(evento: any) {
        this.numero = evento.target.value
    }

    public capturarDDD(evento: any) {
        this.ddd = evento.target.value
    }

    public capturarEstado(evento: any) {
        this.estado = evento.target.value
    }

    public capturarCidade(evento: any) {
        this.cidade = evento.target.value
    }

    public capturarBairro(evento: any) {
        this.bairro = evento.target.value
    }

    public capturarRua(evento: any) {
        this.rua = evento.target.value
    }

    public capturarRuaNumero(evento: any) {
        this.ruaNumero = evento.target.value
    }

    public capturarCodigoPostal(evento: any) {
        this.codigoPostal = evento.target.value
    }

    public capturarInfoAdicionais(evento: any) {
        this.informacoesAdicionais = evento.target.value
    }

    public submeterFormulario(evento: any) {
        evento.preventDefault()
        let endereco = new Endereco(this.estado, this.cidade, this.bairro, this.rua, this.codigoPostal, this.ruaNumero, this.informacoesAdicionais)
        let telefones = new Telefone(this.numero, this.ddd)
        let cliente = {
            nome: this.nome,
            nomeSocial: this.nomeSocial,
            email: this.email,
            endereco: endereco,
            telefones: [telefones]
        }
        this.cadastrarCliente(cliente)
        evento.target.reset()
    }

    render() {
        return (
            <>
              <Barra textoApp="PetLovers 🦔"/>
                <div className="col s12 m7">
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <form className="col s12" onSubmit={(e) => this.submeterFormulario(e)}>
                                <div className="card-content">
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <p> Nome: </p>
                                            <input onChange={this.capturarNome} id="nome" type="text" className="validate active" maxLength={255} placeholder="Nome" required/>
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Nome Social: </p>
                                            <input onChange={this.capturarNomeSocial} id="nomeSocial" type="text" className="validate" maxLength={255} placeholder="Nome Social" required/>
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Email: </p>
                                            <input onChange={this.capturarEmail} id="email" type="text" className="validate" maxLength={255} placeholder="Email" required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <p> DDD do telefone: </p>
                                            <input onChange={this.capturarDDD} id="ddd" type="text" className="validate" maxLength={2} placeholder="DDD" required/>
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Numero do telefone: </p>
                                            <input onChange={this.capturarNumero} id="numero" type="text" className="validate" maxLength={9} placeholder="Telefone" required/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <p> Estado: </p>
                                            <input onChange={this.capturarEstado} id="estado" type="text" className="validate" maxLength={255} placeholder="Estado" required/>
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Cidade: </p>
                                            <input onChange={this.capturarCidade} id="cidade" type="text" className="validate" maxLength={255} placeholder="Cidade" required/>
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Bairro: </p>
                                            <input onChange={this.capturarBairro} id="bairro" type="text" className="validate" maxLength={255} placeholder="Bairro" required/>
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Rua: </p>
                                            <input onChange={this.capturarRua} id="rua" type="text" className="validate" maxLength={255} placeholder="Rua" required/>
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Numero: </p>
                                            <input onChange={this.capturarRuaNumero} id="ruaNumero" type="text" className="validate" maxLength={255} placeholder="Numero" required/>
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Código Postal: </p>
                                            <input onChange={this.capturarCodigoPostal} id="codigoPostal" type="text" className="validate" maxLength={10} placeholder="Código Postal" required/>
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Informações Adicionais: </p>
                                            <input onChange={this.capturarInfoAdicionais} id="informaçõesAdicionais" type="text" className="validate" maxLength={255} placeholder="Informações Adicionais" required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-action">
                                    <button className="btn waves-effect waves-light teal accent-3" type="submit" name="action">Cadastrar
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}