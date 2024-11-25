import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import ListaProdutoServico from "./listaProdutoServiço";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProdutoServico from "./formularioCadastroProdutoServico";
import Compras from "./compras";
import Home from "./home";
import Listagens from "./listagens";
import ListaPets from "./listaPets";


export default function Roteador() {
  const [tela, setTela] = useState("Home");

  const selecionarView = (novaTela, evento) => {
    evento.preventDefault();
    console.log(novaTela);
    setTela(novaTela);
  };

  let barraNavegacao = (
    <BarraNavegacao
      seletorView={selecionarView}
      tema="#adb5bd"
      botoes={[
        "Home",
        "Clientes",
        "Pets",
        "Produtos e Serviços",
        "Compras",
        "Listagens"
      ]}
    />
  );

  switch (tela) {
    case "Clientes":
      return (
        <>
          {barraNavegacao}
          <ListaCliente tema="#adb5bd" />
        </>
      );
    case "Cadastro de Pets":
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroPet tema="#adb5bd" />
        </>
      );
    case "Cadastro de Produto e Serviço":
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroProdutoServico tema="#adb5bd" />
        </>
      );
    case "Compras":
      return (
        <>
          {barraNavegacao}
          <Compras tema="#adb5bd" />
        </>
      );
    case "Home":
      return (
        <>
          {barraNavegacao}
          <Home tema="#adb5bd" />
        </>
      );
    case "Listagens":
      return (
        <>
          {barraNavegacao}
          <Listagens tema="#adb5bd" />
        </>
      );
    case "Produtos e Serviços":
      return (
        <>
          {barraNavegacao}
          <ListaProdutoServico tema="#adb5bd" />
        </>
      );
      case "Pets":
        return (
          <>
            {barraNavegacao}
            <ListaPets tema="#adb5bd" />
          </>
        );
    default:
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroCliente tema="#adb5bd" />
        </>
      );
  }
}
