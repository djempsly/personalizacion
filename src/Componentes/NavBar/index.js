import React from "react";
import {Link, NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
 import './navbar.css'

const NavBar = ()=>{

    return(
        <nav className="nav">
            <ul className="nav-izquierdo">
                <li>
                    <NavLink to='/'> Inicio </NavLink>
                </li>

                <li> <a href="#">Productos</a>
                    <ul> 
                        <li>  <NavLink to='/sublimable'> Productos Sublimables </NavLink> </li>
                        <li> <NavLink to= '/vinil'> Productos con Vinil   </NavLink>  </li>
                    </ul>
                </li>

                <li> <a> Servicios</a>
                    <ul>
                        <li> <NavLink to='/migratorio'  > Asesoría Migratoria </NavLink> </li>
                        <li> <NavLink to='/contabilidad'  > Servicios Contables </NavLink> </li>
                        <li> <NavLink to= '/laptop'> Mantenimiento de Laptop </NavLink> </li>
                    </ul>
                </li>
                <li>
                    <NavLink to='/sobreNosotros'> Sobre Nosotros </NavLink>
                </li>
                <li>
                    <NavLink to='/contactos'> Contactos </NavLink>
                </li>
                <li>
                    <NavLink to='/otros'> Otros  </NavLink>
                </li>
              
            </ul>

      
            <ul className="navbar-derecho inactive">
                <li>
                    <NavLink to='/cuenta'> Cuenta
                      
                    </NavLink>
                  
                </li>
            
                <li>
                    <NavLink to='pedido'> Pedido

                    </NavLink>
                </li>
                <li>
                    <NavLink to='pedidos'> Pedidos

                    </NavLink>
                </li>
                <span>🛒0</span>
            </ul>

            <div class="menu-mobile inactive">
            <SlMenu className="menu-imagen" />

            <ul className="menu-mobile">
                <li>
                    <NavLink to='/'> Inicio </NavLink>
                </li>

                <li> <a href="#">Productos</a>
                    <ul> 
                        <li>  <NavLink to='/sublimable'> Productos Sublimables </NavLink>
                        </li>
                        <li>
                            <NavLink to= '/vinil'> Productos con Vinil   </NavLink>
                        </li>
                    </ul>
                </li>

                <li>
                    <NavLink to='/servicio'> Servicios </NavLink>
                </li>
                <li>
                    <NavLink to='/sobreNosotros'> Sobre Nosotros </NavLink>
                </li>
                <li>
                    <NavLink to='/contactos'> Contactos </NavLink>
                </li>
                <li>
                    <NavLink to='/otros'> Otros  </NavLink>
                </li>
              
            </ul>


            {/* <div class="menu-mobile inactive">
                        
                            <ul>
                                <li><a href="#">Inicio</a></li>
                                <li > <a href="#">Servicio</a>
                                    <ul>
                                        <li><a href="">Technologia</a></li>
                                        <li><a href="">Inmuebles</a></li>
                                        <li><a href="">Belleza</a></li>
                                        <li><a href="">Estilo</a></li>
                                        <li><a href="">Salud</a></li>
                                        <li><a href="">Deporte</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Unir</a></li>
                                <li><a href="#">Contacto</a></li>
                            </ul>
                    
                        </div> */}

      
            </div>
        </nav>
    )
}

export {NavBar}