
import { NavLink } from "react-router-dom";
 import './navbar.css'
 import { SlArrowRight } from "react-icons/sl";

const NavBar = ()=>{

    return(
        <nav className="nav">
            <ul className="nav-ul">
                <li>
                    <NavLink to='/'> Inicio

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sublimable'> Productos Sublimables

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/vinil'> Productos con Vinil

                    </NavLink>
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
            <input className="buscador" placeholder="Busca tu articulos aqui" />
            <ul className="navbar-acceso">
                <li>
                    <NavLink to='/cuenta'> Cuenta
                        <SlArrowRight>
                        <li>
                    <NavLink to='/dashboard'> Dashboard 

                    </NavLink>
                </li>
                        </SlArrowRight>
                        
                     

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