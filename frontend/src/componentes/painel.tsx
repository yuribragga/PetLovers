import { Component } from "react";
import Barra from "./barra";
import Clientes from "./clientes";


type props = {
    textoApp: string
}

export default class Painel extends Component<props> {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <div>
                    <Barra textoApp={this.props.textoApp} />
                    <Clientes />
                </div>
            )
        }
}
