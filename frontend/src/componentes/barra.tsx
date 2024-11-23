import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    textoApp: string
}

class Barra extends Component<props> {
    render() {
        return (
            <>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper  blue-grey darken-2" >
                            <a href="/" className="brand-logo">{this.props.textoApp}</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li>
                                    <a href='/'> Visualizar clientes </a>
                                </li>
                                <li>
                                    <a href='/cliente/cadastrar'> Cadastrar clientes </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </>

        )
    }
}
export default Barra