import React from "react";
import { NavLink } from "react-router-dom";
import './footer.css'

function Footer(){
    return(
        <>
        <div className="footer-container">
        return(
        <nav className="">
            <ul className="">
                <li>
                    <NavLink to='/'> Inicio

                    </NavLink>
                </li>

                <li>
                    <NavLink to='/sublimable'> Productos Sublimables

                     </NavLink>
                </li>
                <li>   
                    <NavLink to= '/vinil'> Productos con Vinil

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
         

            <ul className="">
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
               
            </ul>
        </nav>
    )

        </div>
        </>
    )
}

export { Footer}


