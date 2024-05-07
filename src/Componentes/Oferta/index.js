import React from "react";
import { FiX } from "react-icons/fi";
import madre from '../../assets/madre.jpeg'
import './Oferta.css'

function Oferta (props){
  const cerrar = ()=>{
    props.setOpenModal(false)
  } 
    return (
      <>
            <div className="component-container">
                <img src={madre} alt="" className="imagen-oferta" />
              
              <div className="cierra-oferta">
                <FiX onClick={cerrar} className="cierra" />
              </div>
            </div>
    
        </>
    )
}

export {Oferta}

