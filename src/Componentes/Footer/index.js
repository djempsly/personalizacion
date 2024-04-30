import React from "react";
import instagramlogo from '../../assets/imagen/instagramlogo.jpeg';
import whatsApp from '../../assets/imagen/whatsApp.jpg'
import logo from '../../assets/imagen/logo.png'
import './footer.css'

function Footer(){
    return(
        <>
        <div className="footer-container">
            <div className="div-logo-footer">
                <li>
                    <a href="/">
                        <img className="logo-footer-lhams" src={logo}  />
                    </a>
                </li>

            </div>


            <div className="div-link">
        
                <nav className="nav-footer">
                    <ul className="link-left">
                        <li> <a href='/'> Inicio </a> </li>
                        <li> <a href='/sublimable'> Productos Sublimables </a> </li>
                        <li> <a href= '/vinil'> Productos con Vinil</a> </li>
                        <li> <a href='/servicio'> Servicios</a> </li>
                        <li> <a href='/sobreNosotros'> Sobre Nosotros </a> </li>
                        <li> <a href='/contactos'> Contactos </a> </li>
                        <li> <a href='/otros'> Otros</a> </li>
                    </ul>
                
                    <ul className="">
                        <li> <a href='/cuenta'>Cuenta</a> </li>
                        <li> <a href="/pedido">Pedido</a> </li>
                        <li> <a href="/pedidos"></a> </li>
                    
                    </ul>
                </nav>
            </div>



            <div className="redes">
                <span className="span-letra">Siguenos en</span>
                <div>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/lhamsdj/" rel="noreferrer noopener">
                        <img className="img-instagram" src={instagramlogo} alt="" /> 
                        </a>
                    </li>
                </div>
                <div>
                    <li>
                        <a target="_blank"  rel="noreferrer noopener">
                        <img className="img-instagram" src={whatsApp} alt="" />  
                        </a>
                    </li>
                </div>
            
            </div>
        </div>

       

      

        </>
    )
}

export { Footer}


