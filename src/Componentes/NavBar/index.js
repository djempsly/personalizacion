import React from "react";
import {NavLink } from "react-router-dom";
 import './navbar.css'

const NavBar = ({search, setSearch})=>{

    return(
        <nav className="nav">
            <ul className="nav-izquierdo">
                <li>
                    <NavLink to='/'> Inicio

                    </NavLink>
                </li>

                <li> <a href="#">Productos</a>
                    <ul> 
                        <li>

                            <NavLink to='/sublimable'> Productos Sublimables

                            </NavLink>
                        </li>
                        <li>
                            <NavLink to= '/vinil'> Productos con Vinil

                            </NavLink>
                      
                        </li>
                    </ul>

                </li>
                       
                    
                    
            

                <li>
                    <NavLink to='/servicio'> Servicios

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sobreNosotros'> Sobre Nosotros 

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contactos'> Contactos

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/otros'> Otros

                    </NavLink>
                </li>
              
            </ul>

            {/* 👇 Aqui es el cuadro de busqueda */}
            <input className="buscador" placeholder="Busca tu articulos aqui"
            value={search}
            onChange={(event)=>{
                setSearch(event.target.value)
            }
            }
            // setSearch = {setSearch}
            />

            <ul className="navbar-derecho">
                <li>
                    <NavLink to='/cuenta'> Cuenta
                      
                    </NavLink>
                  
                </li>
            
                <li>
                    <NavLink to='pedido'>Pedido

                    </NavLink>
                </li>
                <li>
                    <NavLink to='pedidos'> Pedidos

                    </NavLink>
                </li>
                <span>🛒0</span>
            </ul>

            <div class="menu-mobile inactive">
      
            </div>
        </nav>
    )
}

export {NavBar}