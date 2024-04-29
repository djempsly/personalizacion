import React from 'react';
import { BrowserRouter, useRoutes} from 'react-router-dom'
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
import { Footer } from '../../Componentes/Footer';
import { Logo } from '../../Componentes/HeaderLogo';
 import { Registrar } from '../Sesion/Registrar';



const AppRoutes = () =>{
  let routes = useRoutes([
    {path:'/', element: <Inicio />},
    {path:'/sublimable', element: <Sublimable />},
    {path:'/vinil', element: <Vinil />},
    {path:'/servicio', element: <Servicios />},
    {path:'/sobreNosotros', element: <SobreNosotros />},
    {path:'/contactos', element: <Contactos />},
    {path:'/otros', element: <Otros />},
    {path:'/*', element: <NoEncontrado />},
    {path: '/cuenta', element: <Cuenta />},
    {path:'/pedido', element: <Pedido />},
    {path: '/pedidos', element: <Pedidos />},
    {path:'/registrar', element:<Registrar />}

  ])

   return routes
}

function App() {
  return (
  <>
  
  <BrowserRouter>
  <Logo />
 
    <NavBar />
    <Slider />
    <AppRoutes />
    
  <Footer />
  </BrowserRouter>
  
  </>
  );
}



export default App;
