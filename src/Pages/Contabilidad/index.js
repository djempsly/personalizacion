import React from "react";
import contable from '../../assets/contable.png'
import './contabilidad.css'


const Contabilidad = ()=>{
    return(
        <>
        <div className="container-contable">
                <figure className="img-figure">
                    <img src={contable}  alt="Contable" className="img-contable"/>
                </figure>

            <div className="contable">    
                <h1> ¿Necesita ayuda con sus finanzas? </h1>
                <h2>Ofrezco servicios contables completos para ayudarlo <br/>
                    a administrar su negocio de manera eficiente y efectiva.</h2>
                <p> 
                    Preparación de estados financieros: Puedo preparar estados financieros <br/> 
                    precisos y actualizados, lo que le ayudará a comprender su situación financiera y <br/>
                    tomar decisiones informadas.
                </p>
                <p>
                Declaraciones de impuestos: Puedo preparar y presentar sus declaraciones <br/>
                de impuestos de manera oportuna y precisa, asegurándome de que <br/>
                cumpla con todas las leyes y regulaciones aplicables.
                </p>
                <p>
                Tenga en cuenta la planificación financiera: Puedo ayudarlo a desarrollar <br/>
                un plan financiero sólido que cumpla con sus objetivos a corto y largo plazo.
                </p>
                <p>
                Asesoría contable: Puedo brindarle asesoramiento contable experto sobre <br/>
                una variedad de temas, como selección de entidades comerciales, cumplimiento <br/>
                fiscal y administración de nóminas.
                </p>
                <p>
                Estoy comprometido a brindarle un servicio al cliente de alta calidad <br/>
                y estoy seguro de que puedo ayudarlo a alcanzar sus metas financieras.
                </p>
                    
            
            </div>

        </div>

        </>
    )
}

export { Contabilidad}




