import { URI } from "../enuns/uri";
import Busca from "./busca";

export default class BuscarClientes implements Busca {
    public async buscar() {
        let json = await fetch(URI.CLIENTES).then(resposta => resposta.json())        
        return json
    }
}