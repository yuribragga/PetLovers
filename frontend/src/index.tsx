import React from 'react';
import ReactDOM from 'react-dom';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Painel from './componentes/painel';
import reportWebVitals from './reportWebVitals';
import FormularioCliente from './componentes/formulario';
import Barra from './componentes/barra';
import VerCliente from './componentes/verCliente';
import FormularioClienteEditar from './componentes/formularioEditar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Painel textoApp='PetLovers 🦔'/>,
  },
  {
    path: "/cliente/:id",
    element: <VerCliente/>,
  },
  {
    path: "/cliente/cadastrar",
    element: <FormularioCliente />
  },
  {
    path: "/cliente/editar/:id",
    element: <FormularioClienteEditar />
  }

]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
