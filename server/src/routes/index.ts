import { Router, Request, Response, query } from 'express';
import Empresa from '../modelo/empresa';
import Telefone from '../modelo/telefone';
import RG from '../modelo/rg';
import CPF from '../modelo/cpf';
import Cliente from '../modelo/cliente';
import Pet from '../modelo/pet';
import Servico from '../modelo/servico';
import Produto from '../modelo/produto';
import CadastroCliente from '../negocio/cliente/cadastroCliente';
import CadastroPet from '../negocio/pet/cadastroPet';
import CadastroProduto from '../negocio/produto/cadastroProduto';
import CadastroServico from '../negocio/servico/cadastroServico';
import ListagemServicosProdutosPorTipoRaca from '../negocio/listagemProdutoServicoPorRacaTipo';

const router = Router();
let empresa = new Empresa()

let cadastro = new CadastroCliente(empresa.getClientes)
let cliente1 = {
    nome: "Luna Lovegood",
    nomeSocial: "Luna Lovegood",
    cpf: { cpf: "78945612312", dataEmissao: "2010-05-15" },
    rg: [{ id: 1, rg: "123456789", dataEmissao: "2010-05-15" }],
    dataCadastro: "2024-11-27T12:00:00.000Z",
    telefone: [{ id: 1, ddd: "21", telefone: "998765432" }]
};

let cliente2 = {
    nome: "Hermione Granger",
    nomeSocial: "Hermione Granger",
    cpf: { cpf: "98765432100", dataEmissao: "2012-08-22" },
    rg: [{ id: 1, rg: "987654321", dataEmissao: "2012-08-22" }],
    dataCadastro: "2024-11-27T12:00:00.000Z",
    telefone: [{ id: 1, ddd: "11", telefone: "912345678" }]
}

cadastro.cadastrar(cliente1)
cadastro.cadastrar(cliente2)
let petTeste = new Pet('Robso', 'Gato', 'munchkin', 'macho')
petTeste.setDono(cliente1.cpf.cpf)
empresa.getPets.push(petTeste)
let cliente = empresa.getClientes.find(cliente => cliente.id == 1)
cliente.addPet(petTeste)
let servicoTeste = new Servico("Banho", 29.99)
let produtoTeste = new Produto("Whiskas sabor salmão", 9.99)
empresa.getServicos.push(servicoTeste)
empresa.getProdutos.push(produtoTeste)
cliente.addProdutosConsumidos(produtoTeste)
produtoTeste.addVenda(1)
cliente.addServicosConsumidos(servicoTeste)
servicoTeste.addVenda(1)
cliente.addServicosConsumidos(servicoTeste)
servicoTeste.addVenda(1)
cliente.addServicosConsumidos(servicoTeste)
servicoTeste.addVenda(1)

// Rota para verificar se o servidor está rodando
router.get('/', (req, res) => {
    return res.json('Back-End');
});

// Rota para buscar mensagens(passando o id do chamado)
router.get('/clientes', (req, res) => {
    res.json(empresa.getClientes)
});

router.get('/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const cliente = empresa.getClientes.find(cliente => cliente.id == id)
    res.json(cliente)
});

router.post('/clientes/excluir/:id', (req, res) => {
    const clienteId = parseInt(req.params.id);
    empresa.removeCliente(clienteId);
    res.json(empresa.getClientes);
});

router.post('/clientes/:id', (req, res) => {
    try {
        const novosDados = req.body
        const id = parseInt(req.params.id)
        const cliente = empresa.getClientes.find(cliente => cliente.id == id)

        empresa.getClientes.some(cliente => {
            console.log(cliente.getCpf.getValor == novosDados.cpf.valor)
            console.log(cliente.id != id)
            console.log('---------')
        })

        if (empresa.getClientes.some(cliente => cliente.getCpf.getValor == novosDados.cpf.valor && cliente.id != id)) {
            return res.status(400).json('CPF já cadastrado!');
        }

        cliente.nome = novosDados.nome
        cliente.nomeSocial = novosDados.nomeSocial
        cliente.setCpf(novosDados.cpf)
        if (cliente.getPets().length > 0) {
            cliente.getPets().map(pet => {
                pet.setDono(novosDados.cpf.valor)
            })
        }
        cliente.setRgs([])
        novosDados.rgs.map(rg => {
            let novoRG = new RG(rg.valor, rg.dataEmissao)
            cliente.addRgs(novoRG)
        })
        cliente.setTel([])
        novosDados.telefones.map(tel => {
            let novotel = new Telefone(tel.ddd, tel.numero)
            cliente.addTelefone(novotel)
        })
        res.json(cliente)
    } catch (error) {
        res.status(500, 'Erro ao editar:', error)
    }
});

router.post('/clientes', async (req: Request, res: Response) => {
    let cadastro = new CadastroCliente(empresa.getClientes)
    try {
        const insert = cadastro.cadastrar(req.body)
        if (insert && 'status' in insert) return res.status(insert.status).json(insert.msg);
        res.json('Cliente cadastrado com sucesso');
    } catch (error) {
        res.json("Erro ao cadastrar cliente ", error)
    }
});

router.get('/pets', (req, res) => {
    res.json(empresa.getPets)
});

router.post('/pets', async (req: Request, res: Response) => {
    try {
        let cadastro = new CadastroPet(empresa.getPets, empresa.getClientes)
        cadastro.cadastrar(req.body)
        res.json('Pet(s) cadastrado(s) com sucesso')
    } catch (error) {
        res.status(500, "Erro ao cadastrar pet ", error)
    }
})

router.get('/pets/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pet = empresa.getPets.find(pet => pet.id == id)
    res.json(pet)
});

router.post('/pets/:id', (req, res) => {
    try {
        const novosDados = req.body
        const id = parseInt(req.params.id)
        const pet = empresa.getPets.find(pet => pet.id == id)
        if (novosDados.dono != pet.getDono) {
            const donoAntigo = empresa.getClientes.find(cliente => cliente.getCpf.getValor == pet.getDono)
            donoAntigo.removePet(pet)
            const donoNovo = empresa.getClientes.find(cliente => cliente.getCpf.getValor == novosDados.dono)
            donoNovo.addPet(pet)
        }
        pet.setNome(novosDados.nome)
        pet.setRaca(novosDados.raca)
        pet.setGenero(novosDados.genero)
        pet.setTipo(novosDados.tipo)
        pet.setDono(novosDados.dono)
        res.json(pet)
    } catch (error) {
        res.status(500, 'Erro ao editar:', error)
    }
});

router.post('/pets/excluir/:id', (req, res) => {
    try {
        const petId = parseInt(req.params.id);
        const pet = empresa.getPets.find(pet => pet.id === petId)
        const cliente = empresa.getClientes.find(cli => cli.getCpf.getValor === pet.getDono)
        cliente.removePet(pet)
        empresa.removePet(pet)
        res.json(empresa.getPets);
    } catch (error) {
        res.status(500, error)
    }
});

router.get('/produtos', (req, res) => {
    res.json(empresa.getProdutos)
});

router.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const produto = empresa.getServicos.find(produto => produto.id == id)
    res.json(produto)
});

router.post('/produtos/excluircompra', (req, res) => {
    try {
        const pos = parseInt(req.body.pos)
        const cliId = parseInt(req.body.cliId)
        const prodId = parseInt(req.body.id)
        const produto = empresa.getProdutos.find(p => p.id == prodId)
        produto.removerVenda(1)
        const cliente = empresa.getClientes.find(cliente => cliente.id == cliId)
        cliente.removeProdutosConsumidos(pos)
        res.json(empresa.getClientesPorID(cliId))
    } catch (error) {
        res.status(500, "Erro ao excluir", error)
    }
});

router.post('/produtoservico/:id', async (req: Request, res: Response) => {
    try {
        let tipo = req.body.tipo
        if (tipo == 'Produto') {
            const novosDados = req.body
            const id = parseInt(req.params.id)
            const produto = empresa.getProdutos.find(produto => produto.id == id)
            produto.nome = novosDados.nome
            produto.valor = novosDados.valor
            res.json(produto)
        } if (tipo == "Serviço") {
            const novosDados = req.body
            const id = parseInt(req.params.id)
            const servico = empresa.getServicos.find(servico => servico.id == id)
            servico.nome = novosDados.nome
            servico.valor = novosDados.valor
            res.json(servico)
        } else {
            res.status(500, 'Erro ao cadastrar')
        }
    } catch (error) {
        res.json("Erro ao cadastrar produto ou serviço", error)
    }
});

router.post('/produtoservico/excluir/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let tipo = req.body.tipo
    if (tipo == 'Produto') {
        empresa.getClientes.map(cli => {
            cli.removeProdutosConsumidosPorId(id)
        })
        empresa.removeProdutoPorId(id)
        res.json(empresa.getProdutos)
    } if (tipo == "Serviço") {
        empresa.getClientes.map(cli => {
            cli.removeServicosConsumidosPorId(id)
        })
        empresa.removeServicoPorId(id)
        res.json(empresa.getServicos)
    } else {
        res.status(500, 'Erro ao cadastrar')
    }
});

router.post('/produtoservico', async (req: Request, res: Response) => {
    try {
        let tipo = req.body.tipo
        if (tipo == 'Produto') {
            let cadastro = new CadastroProduto(empresa.getProdutos)
            cadastro.cadastrar(req.body.dados)
            res.json('Produto cadastrado com sucesso')
        } else if (tipo == "Servico") {
            let cadastro = new CadastroServico(empresa.getServicos)
            cadastro.cadastrar(req.body.dados)
            res.json('Servico cadastrado com sucesso')
        } else {
            res.status(500, 'Erro ao cadastrar')
        }
    } catch (error) {
        res.json("Erro ao cadastrar produto ", error)
    }
});

router.get('/servicos', (req, res) => {
    res.json(empresa.getServicos)
});

router.get('/servicos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const servico = empresa.getServicos.find(servico => servico.id == id)
    res.json(servico)
});

router.post('/servicos/excluircompra', async (req, res) => {
    try {
        const pos = parseInt(req.body.pos)
        const cliId = parseInt(req.body.cliId)
        const servId = parseInt(req.body.id)
        const servico = empresa.getServicos.find(s => s.id == servId)
        servico.removerVenda(1)
        const cliente = empresa.getClientes.find(cliente => cliente.id == cliId)
        cliente.removeServicosConsumidos(pos)
        res.json(empresa.getClientesPorID(cliId))
    } catch (error) {
        res.status(500, "Erro ao excluir", error)
    }
});

router.post('/comprar', async (req: Request, res: Response) => {
    try {
        let tipo = req.body.tipo
        let qnt = parseInt(req.body.qnt)

        const cliente = empresa.getClientes.find(cliente => cliente.getCpf.getValor == req.body.cpf)
        if (tipo == "produto") {
            let produto = empresa.getProdutos.find(produto => produto.id == req.body.id.id)
            for (let i = 0; i < qnt; i++) {
                cliente.addProdutosConsumidos(produto)
            }
            produto.addVenda(qnt)
        } else if (tipo == "serviço") {
            let servico = empresa.getServicos.find(servico => servico.id == req.body.id.id)
            for (let i = 0; i < qnt; i++) {
                cliente.addServicosConsumidos(servico)
            }
            servico.addVenda(qnt)
        }
        res.json(`${tipo} comprado com sucesso`)
    } catch (error) {
        res.json("Erro ao comprar ", error)
    }
});

router.get('/listagens', (req, res) => {
    let clientes = empresa.getClientes;

    let clientesComValorQuantidade = clientes.map(cliente => {
        return {
            id: cliente.id,
            nome: cliente.nome,
            nomeSocial: cliente.nomeSocial,
            valorProdutos: cliente.getValorProdutosConsumidos().toFixed(2),
            quantidadeProdutos: cliente.getProdutosConsumidos().length,
            valorServicos: cliente.getValorServicosConsumidos().toFixed(2),
            quantidadeServicos: cliente.getServicosConsumidos().length,
        };
    });

    let cliProdValor = [...clientesComValorQuantidade].sort((a, b) => parseFloat(b.valorProdutos) - parseFloat(a.valorProdutos));
    if (cliProdValor.length > 5) { cliProdValor = cliProdValor.slice(0, 5) }

    let cliProdQnt = [...clientesComValorQuantidade].sort((a, b) => b.quantidadeProdutos - a.quantidadeProdutos);
    if (cliProdQnt.length > 10) { cliProdQnt = cliProdQnt.slice(0, 10) }

    let cliServValor = [...clientesComValorQuantidade].sort((a, b) => parseFloat(b.valorServicos) - parseFloat(a.valorServicos));
    if (cliServValor.length > 5) { cliServValor = cliServValor.slice(0, 5) }

    let cliServQnt = [...clientesComValorQuantidade].sort((a, b) => b.quantidadeServicos - a.quantidadeServicos);
    if (cliServQnt.length > 10) { cliServQnt = cliServQnt.slice(0, 10) }

    let topProd = empresa.getProdutos.sort((a, b) => {
        const consumoA = a.vendas;
        const consumoB = b.vendas;
        return consumoB - consumoA;
    });
    let topServ = empresa.getServicos.sort((a, b) => {
        const consumoA = a.vendas;
        const consumoB = b.vendas;
        return consumoB - consumoA;
    });
    const listagemInstance = new ListagemServicosProdutosPorTipoRaca(empresa.getClientes);
    listagemInstance.listar();
  
    const servProdTipoRaca = listagemInstance.getDados();
  

    let data = {
        "cliServValor": cliServValor,
        "cliServQnt": cliServQnt,
        "cliProdValor": cliProdValor,
        "cliProdQnt": cliProdQnt,
        "topProd": topProd,
        "topServ": topServ,
        "servProdTipoRaca": servProdTipoRaca
    };

    res.json(data);
});



export default router