
import React, { useEffect, useState } from "react";
import CadastrarCliente from "../cadastrar/cadastradorCliente";
import Endereco from "../endereco";
import Telefone from "../telefone";
import Barra from "./barra";
import RemovedorCliente from "../removedores/removedorCliente";

const FormularioClienteEditar = () => {

        const [id, setId] = useState(null);
        const [nome, setNome] = useState("");
        const [nomeSocial, setNomeSocial] = useState("");
        const [email, setEmail] = useState("");
        const [numero, setNumero] = useState("");
        const [ddd, setDdd] = useState("");
        const [estado, setEstado] = useState("");
        const [cidade, setCidade] = useState("");
        const [bairro, setBairro] = useState("");
        const [rua, setRua] = useState("");
        const [codigoPostal, setCodigoPostal] = useState("");
        const [ruaNumero, setRuaNumero] = useState("");
        const [informacoesAdicionais, setInformacoesAdicionais] = useState("");
    
        const cadastrarCliente = (objeto) => {
            let cadastrador = new CadastrarCliente();
            cadastrador.cadastrar(objeto);
        }
    
        const excluirRemoto = (idCliente) => {
            let removedor = new RemovedorCliente();
            removedor.remover({ id: idCliente });
        }
    
        const capturarNome = (evento) => {
            setNome(evento.target.value);
        }
    
        const capturarNomeSocial = (evento) => {
            setNomeSocial(evento.target.value);
        }
    
        const capturarEmail = (evento) => {
            setEmail(evento.target.value);
        }
    
        const capturarNumero = (evento) => {
            setNumero(evento.target.value);
        }
    
        const capturarDDD = (evento) => {
            setDdd(evento.target.value);
        }
    
        const capturarEstado = (evento) => {
            setEstado(evento.target.value);
        }
    
        const capturarCidade = (evento) => {
            setCidade(evento.target.value);
        }
    
        const capturarBairro = (evento) => {
            setBairro(evento.target.value);
        }
    
        const capturarRua = (evento) => {
            setRua(evento.target.value);
        }
    
        const capturarRuaNumero = (evento) => {
            setRuaNumero(evento.target.value);
        }
    
        const capturarCodigoPostal = (evento) => {
            setCodigoPostal(evento.target.value);
        }
    
        const capturarInfoAdicionais = (evento) => {
            setInformacoesAdicionais(evento.target.value);
        }

        const limparFormulario = () => {
            setId(null);
            setNome("");
            setNomeSocial("");
            setEmail("");
            setNumero("");
            setDdd("");
            setEstado("");
            setCidade("");
            setBairro("");
            setRua("");
            setCodigoPostal("");
            setRuaNumero("");
            setInformacoesAdicionais("");
        };
    
        const submeterFormulario = (evento:any) => {
            evento.preventDefault();
            let endereco = new Endereco(estado, cidade, bairro, rua, codigoPostal, ruaNumero, informacoesAdicionais);
            let telefones = new Telefone(numero, ddd);
            let cliente = {
                nome,
                nomeSocial,
                email,
                endereco,
                telefones: [telefones]
            }
    
            excluirRemoto(id);
            cadastrarCliente(cliente);
            limparFormulario()
        }
    
        useEffect(() => {
        async function buscarDadosCliente() {
            const url = window.location.href.split("/");
            const response = await fetch(`http://localhost:32831/cliente/${url[5]}`);
            const data = await response.json();
            console.log("Data:", data);
            setId(data.id);
            setNome(data.nome);
            setNomeSocial(data.nomeSocial);
            setEmail(data.email);
            setDdd(data.telefones[0].ddd);
            setNumero(data.telefones[0].numero);
            setRua(data.endereco.rua);
            setEstado(data.endereco.estado);
            setCidade(data.endereco.cidade);
            setBairro(data.endereco.bairro);
            setRuaNumero(data.endereco.numero);
            setCodigoPostal(data.endereco.codigoPostal);
            setInformacoesAdicionais(data.endereco.informacoesAdicionais);
        }

        buscarDadosCliente()
    }, []);

    return (
            <>
              <Barra textoApp="PetLovers 🦔"/>
                <div className="col s12 m7">
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <form className="col s12" onSubmit={(e) => submeterFormulario(e)}>
                                <div className="card-content">
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <p> Nome: </p>
                                            <input onChange={capturarNome} id="nome" type="text" className="validate active" maxLength={30} value={nome} required placeholder="Nome"/>
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Nome Social: </p>
                                            <input onChange={capturarNomeSocial} id="nomeSocial" type="text" className="validate" maxLength={30} value={nomeSocial} required placeholder="Nome Social" />
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Email: </p>
                                            <input onChange={capturarEmail} id="email" type="text" className="validate" maxLength={30} value={email} required placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <p> DDD do telefone: </p>
                                            <input onChange={capturarDDD} id="ddd" type="text" className="validate" maxLength={30} value={ddd} required placeholder="DDD" />
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Numero do telefone: </p>
                                            <input onChange={capturarNumero} id="numero" type="text" className="validate" maxLength={30} value={numero} required placeholder="Telefone" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <p> Estado: </p>
                                            <input onChange={capturarEstado} id="estado" type="text" className="validate" maxLength={30} value={estado} required placeholder="Estado" />
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Cidade: </p>
                                            <input onChange={capturarCidade} id="cidade" type="text" className="validate" maxLength={30} value={cidade} required placeholder="Cidade" />
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Bairro: </p>
                                            <input onChange={capturarBairro} id="bairro" type="text" className="validate" maxLength={30} value={bairro} required placeholder="Bairro" />
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Rua: </p>
                                            <input onChange={capturarRua} id="rua" type="text" className="validate" maxLength={30} value={rua} required placeholder="Rua" />
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Numero: </p>
                                            <input onChange={capturarRuaNumero} id="ruaNumero" type="text" className="validate" maxLength={30} value={numero} required placeholder="Numero" />
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Código Postal: </p>
                                            <input onChange={capturarCodigoPostal} id="codigoPostal" type="text" className="validate" maxLength={30} value={codigoPostal} required placeholder="Código Postal" />
                                        </div>
                                        <div className="input-field col s6">
                                            <p> Informações Adicionais: </p>
                                            <input onChange={capturarInfoAdicionais} id="informaçõesAdicionais" type="text" className="validate" maxLength={255} value={informacoesAdicionais} required placeholder="Informações Adicionais" />
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

export default FormularioClienteEditar