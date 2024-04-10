import React from 'react';
import {useRoutes, BrowserRouter} from 'react-router-dom'
import './App.css';
import { Home } from './Home';

const Approutes = () =>{
  let routes = useRoutes([
    {path:'/', element: <Home />}
  ])

   return routes
}

function App() {
  return (
  <>
  hola
  
  <BrowserRouter>
    <Approutes />
  </BrowserRouter>
  
  </>
  );
}

export default App;
