import React from "react";
import Canada from '../../assets/imgSlider/Canada.jpg'
import DomRep from '../../assets/imgSlider/DomRep.jpg'
import imagen1 from '../../assets/imgSlider/imagen1.jpg'
import MExico from '../../assets/imgSlider/MExico.jpg'
import PoloFerreteria from '../../assets/imgSlider/PoloFerreteria.jpg'

import './todo.css'




const ImagenSlider = [
    
    {"img": Canada},
    {"img": MExico},
    {"img": PoloFerreteria},
    {"img": DomRep},
    {"img": imagen1},


]

    
    

function Todo({precio}){

    return(
        <>
        <div className="div-img-container"> 
            <div className="img-container"> 
                <div className="cuadro-productos">
                    <figure>
                        <img src={ImagenSlider[0].img} alt="" text="Canada" className="img" />
                    </figure>
                    <div>
                        <span className="precio">
                            Precio
                        </span>
                        <span className="descripcion">
                            Es una taza, con bandera de Canada
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                        <img src= {ImagenSlider[1].img} alt="" text="Canada" className="img" />
                    </figure>
                    <div>
                        <span className="precio">
                            Precio
                        </span>
                        <span className="descripcion">
                            Es una taza, con bandera de Canada
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                        <img src= {ImagenSlider[2].img} alt="" text="Canada" className="img" />
                    </figure>
                    <div>
                        <span className="precio">
                            Precio ${precio}
                        </span>
                        <span className="descripcion">
                            Es una taza, con bandera de Canada
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                        <img src= {ImagenSlider[3].img} alt="" text="Canada" className="img" />
                    </figure>
                    <div>
                        <span className="precio">
                            Precio
                        </span>
                        <span className="descripcion">
                            Es una taza, con bandera de Canada
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                        <img src= {ImagenSlider[4].img} alt="" text="Canada" className="img"  />
                    </figure>
                    <div>
                        <span className="precio">
                            Precio
                        </span>
                        <span className="descripcion">
                            Es una taza, con bandera de Canada
                        </span>
                    </div>
                </div>
             
          
            </div>

        </div>
         
        </>

    )
}

export { Todo}





























