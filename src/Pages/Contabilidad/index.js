import React from "react";
import contable from '../../assets/contable.png'
import whatsApp from '../../assets/imagen/whatsApp.jpg'
import './contabilidad.css'


const Contabilidad = ()=>{
    return(
        <>
        <div className="contable"> 
            <img src={contable}  alt="Contable" width={600}/>
            <span>
            ¿Necesita ayuda con sus finanzas?
            </span>
            <h2>Ofrezco servicios contables completos para ayudarlo <br/>
                a administrar su negocio de manera eficiente y efectiva.</h2>

                <span>Puedo ayudarlo con una variedad de tareas, que incluyen:</span> 
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

        <div className="div-numero">
                        <li>
                            <a target="_blank"  rel="noreferrer noopener">
                            <img className="img-instagram-whatsApp" src={whatsApp} alt="" />  
                            </a>
                        </li>
                        <span className="numero"> 809-254-5239 </span>
                    </div>
        
        </>
    )
}

export { Contabilidad}




