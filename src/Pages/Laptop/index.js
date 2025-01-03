import React from "react";
 import laptopservicio from '../../assets/ingServicio/laptopservicio.jpg'

 import './laptop.css'

function Laptop(){
    return (

        <>
        <div className="div-laptop">
            <figure> <img className="img-laptop" src={laptopservicio} alt="Imagen de servicio de laptop"  /> </figure>

        <div className="mantenimiento">
        <h2>Mantenimiento de laptop</h2>
        <p>

            El mantenimiento de una laptop es crucial para asegurar su funcionamiento óptimo y prolongar su vida útil. Este proceso incluye varias tareas esenciales: <br/><br/>

           <strong> Limpieza Física: <br/> </strong> 

            Exterior: Limpieza del teclado, pantalla y carcasa con paños de microfibra y soluciones específicas para dispositivos electrónicos. <br/>
            Interior: Remoción de polvo y suciedad del interior del equipo, especialmente de los ventiladores y disipadores de calor, utilizando aire <br/>comprimido y brochas antiestáticas.<br/><br/>


            <strong>Revisión y Actualización del Software:<br/> </strong> 

            Sistema Operativo: Verificación de actualizaciones y parches del sistema operativo para garantizar seguridad y rendimiento.<br/>
            Controladores (Drivers): Actualización de controladores para hardware como tarjeta gráfica, sonido, y red.<br/>
            Programas: Desinstalación de software innecesario y actualización de aplicaciones instaladas.<br/><br/>

            <span> Optimización del Sistema:<br/> </span>

            <ol>

            <li> Limpieza de Archivos Temporales: Eliminación de archivos temporales y caché para liberar espacio y mejorar la velocidad del sistema.<br/> </li>
                <li> Desfragmentación: (Para discos duros tradicionales) Desfragmentación del disco duro para mejorar la eficiencia del almacenamiento.<br/> </li>
            <li>  Revisión de Programas de Inicio: Gestión de programas que se inician al encender la laptop para reducir el tiempo de arranque.<br/><br/> </li>
            </ol>



           <strong> Seguridad:<br/> </strong> 

            Antivirus: Instalación y actualización de software antivirus, seguido de un análisis completo del sistema para detectar y eliminar malware.<br/>
            Copia de Seguridad: Realización de copias de seguridad de datos importantes en unidades externas o servicios en la nube.
            
            <br/><br/>


            <strong> Revisión de Hardware:<br/> </strong>
           <strong> Batería: </strong>  Comprobación del estado de la batería y calibración si es necesario.<br/>
            Memoria RAM: Verificación del estado de la memoria RAM y posible limpieza de los contactos.<br/>
            Disco Duro/SSD: Evaluación del estado del disco duro o SSD, incluyendo pruebas de salud y rendimiento.<br/><br/>
            Reparaciones Menores:<br/>

            Conectores y Puertos: Inspección y limpieza de puertos USB, HDMI, y otros conectores.<br/>
            Teclado: Reemplazo de teclas defectuosas o limpieza profunda si alguna tecla no responde correctamente.<br/>
            Pantalla: Comprobación de la integridad de la pantalla y resolución de problemas de píxeles muertos o decoloración.<br/>
            <br/><br/>
            Realizar estas tareas de manera regular puede prevenir problemas mayores y garantizar que la laptop funcione de manera eficiente y segura.<br/>
            </p>

            </div>
            </div>
     
        </>
    )
}

export {Laptop}
