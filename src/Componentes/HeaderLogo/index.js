import React from "react";
import logoimagen from '../../assets/imagen/logoimagen.svg'
import logoletra from '../../assets/imagen/logoletra.png'
import { Link } from "react-router-dom";


import './HeaderLogo.css'

const Logo = ()=>{
    return(
        <div className="container-logo">
            <div className="image-logo">
                <img className="img-logo" src={logoletra}  alt="" />
                <img className="img-logo" src={logoimagen}  alt="" />
            </div>

            <div className="registro-sesion">
                <div className="div-registrar">
                    <div className="div-boton-registrar">
                    <button className="boton-registrar">
                        <Link className="button button-secondary" to="/registrar">Registrar</Link> 
                    </button>

                    </div>
                </div>
             

                <div className="div-entrar">
                    
                    <button className="boton-entra">
                        <Link to="/entra"> Entrar</Link>
                    </button>
                </div>
                

       
            </div>
        </div>
    )
}

export {Logo}



















