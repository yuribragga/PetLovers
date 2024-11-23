import { URI } from "../enuns/uri";
import Cadastrar from "./cadastrar";

export default class CadastrarCliente implements Cadastrar {
    cadastrar(objeto: Object): void {
        fetch(URI.CADASTRAR_CLIENTE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }

}
