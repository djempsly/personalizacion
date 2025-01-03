import React from "react";
 import migracion from '../../assets/migracion.png'
 import contable from '../../assets/contable.png'
import './migratorio.css'


const Migratorio = ()=>{

    return(
        <>
        <div className="image-container">
        <img src={migracion} alt="servicio de migracion" className="img1" />
        <img src={contable}  alt="Otra imagen" className="img2" />

        </div>
        
        </>
    )

}

export { Migratorio}











