import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from "react-router-dom";
import RemovedorClienteLocal from "../removedores/removedorClienteLocal";
import BuscadorClientes from "../buscar/buscaClientes";
import RemovedorCliente from "../removedores/removedorCliente";

type state = {
    clientes: Object[]
}
 
export default class Clientes extends Component<{}, state> {
    constructor(props) {
        super(props)
        this.state = { clientes: [] }
        this.excluirLocal = this.excluirLocal.bind(this)
    }

    public buscarClientes() {
        let buscadorClientes = new BuscadorClientes()
        const clientes = buscadorClientes.buscar()        
        clientes.then(clientes => {
            this.setState({ clientes })
        })
    }

    public excluirRemoto(idCliente: string) {
        let removedor = new RemovedorCliente()
        removedor.remover({ id: idCliente })
    }

    public excluirLocal(id: string, e: any) {
        e.preventDefault()
        let removedorLocal = new RemovedorClienteLocal()
        let clientes = removedorLocal.remover(this.state.clientes, id)
        this.setState({
            clientes: clientes
        })
        this.excluirRemoto(id)
    }

    componentDidMount(){
        this.buscarClientes()        
    }

    render() {
        console.log(this.state);
        
        let quantidadeClientes = this.state.clientes.length
        if (quantidadeClientes >= 0) {
            let lista = this.state.clientes.map(cliente => 
                <li className="collection-item avatar" key={cliente['id']}>
                    <i className="material-icons circle">person</i>
                    <span className="title">{cliente['nome']}</span>
                    <p>{cliente['nomeSocial']}</p>
                    <Link to={`/cliente/${cliente["id"]}`} className="secondary-content">
                        Detalhes
                        <i className="material-icons">block</i>
                    </Link>
                    <a href="" target={"_self"} onClick={(e) => this.excluirLocal(cliente['id'], e)} className="secondary-content"> Excluir 
                        <i className="material-icons">block</i>
                    </a>
                </li>
            )
            return (
                <div>
                    <ul className="collection with-header">
                        <li className="collection-header"><h4>Clientes</h4></li>
                        {lista}
                    </ul>
                </div>
            )
        } else {            
            return (
                <div> </div>
            )
        }
    }
}