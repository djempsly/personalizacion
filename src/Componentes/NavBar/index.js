
import {NavLink } from "react-router-dom";
 import './navbar.css'

const NavBar = ()=>{

    return(
        <nav className="nav">
            <ul className="nav-izquierdo">
                <li>
                    <NavLink to='/'> Inicio

                    </NavLink>
                </li>

                <select>
                    <option selected='selected'> Productos</option>         
                        <option>
                            <NavLink to='/sublimable'> Productos Sublimables

                            </NavLink>
                        </option>
                        <option>
                            <NavLink to= '/vinil'> Productos con Vinil

                            </NavLink>
                        </option>
                    
                </select>

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
            <input className="buscador" placeholder="Busca tu articulos aqui" />

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
        </nav>
    )
}

export {NavBar}