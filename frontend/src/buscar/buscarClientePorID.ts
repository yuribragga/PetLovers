import Busca from "./busca"

export const getClientePorIdUrl = (id: string): string => `http://localhost:32831/cliente/${id}`;

export default class BuscarClientesPorID implements Busca {
    private url: string;

    constructor(id: string) {
        this.url = getClientePorIdUrl(id);
    }

    public async buscar() {
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                throw new Error(`Erro ao buscar cliente por ID. Status: ${response.status}`);
            }

            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
