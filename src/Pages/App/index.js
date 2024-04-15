import React from 'react';
import {useRoutes, BrowserRouter} from 'react-router-dom'
import { Slider } from '../../Componentes/Slider';
import { NavBar } from '../../Componentes/NavBar';
// import '../App.css';
import { Inicio } from '../Inicio';
import { Sublimable } from '../Sublimable';
import { Vinil } from '../Vinil';
import { Servicios } from '../Servicios';
import { SobreNosotros } from '../SobreNosotros';
import { Contactos } from '../Contacto';
import { Otros } from '../Otros';
import { NoEncontrado } from '../NoEncontrado';
import { Pedido } from '../Pedido';
import { Pedidos } from '../Pedidos';
import { Cuenta } from '../Cuenta';



const Approutes = () =>{
  let routes = useRoutes([
    {path:'/', element: <Inicio />},
    {path:'/sublimable', element: <Sublimable />},
    {path:'/vinil', element: <Vinil />},
    {path:'/servicio', element: <Servicios />},
    {path:'/sobreNosotros', element: <SobreNosotros />},
    {path:'/contactos', element: <Contactos />},
    {path:'/otros', element: <Otros />},
    {path:'/*', element: <NoEncontrado />},
    {path: '/cuenta', element: <Cuenta />,
    children: [
      {
        path: "dashboard",
        element:  'Dashboard',
      },
      {
        path: "about",
        element:'About',
      },
    ],
  },
    {path:'/pedido', element: <Pedido />},
    {path: '/pedidos', element: <Pedidos />}



  ])

   return routes
}

function App() {
  return (
  <>
  
  <BrowserRouter>
    <Approutes />
    <NavBar />
  </BrowserRouter>

  <Slider />
  
  </>
  );
}

export default App;
