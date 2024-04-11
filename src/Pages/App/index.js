import React from 'react';
import {useRoutes, BrowserRouter} from 'react-router-dom'
import { Slider } from '../../Slider';
// import '../App.css';
import { Inicio } from '../Inicio';
import { Sublimable } from '../Sublimable';
import { Vinil } from '../Vinil';
import { Servicios } from '../Servicios';
import { SobreNosotros } from '../SobreNosotros';
import { Contactos } from '../Contacto';
import { Otros } from '../Otros';


const Approutes = () =>{
  let routes = useRoutes([
    {path:'/', element: <Inicio />},
    {path:'/sublimable', element: <Sublimable />},
    {path:'/vinil', element: <Vinil />},
    {path:'/servicio', element: <Servicios />},
    {path:'/sobreNosotros', element: <SobreNosotros />},
    {path:'/contactos', element: <Contactos />},
    {path:'/otros', element: <Otros />}


  ])

   return routes
}

function App() {
  return (
  <>
  
  
  <BrowserRouter>
    <Approutes />
  </BrowserRouter>

  <Slider />
  
  </>
  );
}

export default App;
