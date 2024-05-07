import React from "react";
import LazyLoad from 'react-lazyload'
import Canada from '../../assets/imgSlider/Canada.jpg'
import DomRep from '../../assets/imgSlider/DomRep.jpg'
import imagen1 from '../../assets/imgSlider/imagen1.jpg'
import MExico from '../../assets/imgSlider/MExico.jpg'
import PoloFerreteria from '../../assets/imgSlider/PoloFerreteria.jpg'
import portaretrato from '../../assets/imgProduct/portaretrato.jpg'
import rompeza_corazon from '../../assets/imgProduct/rompeza_corazon.jpg'
import taza_dorada1 from '../../assets/imgProduct/taza_dorada1.jpg'
import taza_gris1 from '../../assets/imgProduct/taza_gris1.jpg'
import taza1 from '../../assets/imgProduct/taza1.jpg'
import taza2 from '../../assets/imgProduct/taza2.jpg'
import taza3 from '../../assets/imgProduct/taza3.jpg'
import taza5 from '../../assets/imgProduct/taza5.jpg'
import taza6 from '../../assets/imgProduct/taza6.jpg'
import  taza7 from '../../assets/imgProduct/taza7.jpg'
 import Termo1 from '../../assets/imgProduct/Termo1.jpg'
 import vaso_rosado from '../../assets/imgProduct/vaso_rosado.jpg'
 import vaso1 from '../../assets/imgProduct/vaso1.jpg'
 import Dios from '../../assets/imgProduct/Dios.jpeg'

import './todo.css'


const ImagenSlider = [
    
    {"img": Canada},
    {"img": MExico},
    {"img": PoloFerreteria},
    {"img": DomRep},
    {"img": imagen1},
    {"img": taza1},
    {"img": taza2},
    {"img": taza3},
    {"img": taza5},
    {"img": taza6},
    {"img": taza7},
    {"img": taza_dorada1},
    {"img": taza_gris1},
    {"img": Termo1},
    {"img": vaso1},
    {"img": vaso_rosado},
    {"img": portaretrato},
    {"img": rompeza_corazon},
    {"img": Dios}
   

]  

function Todo(){
    return(
        <>
        <div className="div-img-container"> 
            <div className="img-container"> 
            <div className="cuadro-productos">
                    <figure>
                        <LazyLoad debounce={50} offset={50} once>
                        <img src={ImagenSlider[18].img} alt="" text="Canada" className="img" loading="lazy" />
                        </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>

                <div className="cuadro-productos">
                    <figure>
                        <LazyLoad debounce={50} offset={50} once>
                        <img src={ImagenSlider[0].img} alt="" text="Canada" className="img" loading="lazy" />
                        </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once>        
                        <img src= {ImagenSlider[1].img} alt="" text="Canada" className="img" loading="lazy" />
                    </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once>
                        <img src= {ImagenSlider[2].img} alt="" text="Canada" className="img"  loading="lazy"/>
                    </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                        <img src= {ImagenSlider[3].img} alt="" text="Canada" className="img" loading="lazy" />
                    </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                        <img src= {ImagenSlider[4].img} alt="" text="Canada" className="img" loading="lazy" />                           
                           </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                        <img src= {ImagenSlider[5].img} alt="" text="Canada" className="img" loading="lazy"/>                          
                    </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                        <img src= {ImagenSlider[6].img} alt="" text="Canada" className="img" loading="lazy" />                         
                    </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                        <img src= {ImagenSlider[7].img} alt="" text="Canada" className="img" loading="lazy" />                        
                    </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                        <img src= {ImagenSlider[8].img} alt="" text="Canada" className="img" loading="lazy" />                          
                    </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                           
                        <img src= {ImagenSlider[9].img} alt="" text="Canada" className="img" loading="lazy"/>
                    </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                           
                        <img src= {ImagenSlider[10].img} alt="" text="Canada" className="img" loading="lazy" />
                           </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                        <img src= {ImagenSlider[11].img} alt="" text="Canada" className="img" loading="lazy" />
                           
                           </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                        <img src= {ImagenSlider[12].img} alt="" text="Canada" className="img" loading="lazy" />
                           
                           </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                        <img src= {ImagenSlider[13].img} alt="" text="Canada" className="img" loading="lazy" />
                           
                           </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                        <img src= {ImagenSlider[14].img} alt="" text="Canada" className="img" loading="lazy" />
                           
                    </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                        <img src= {ImagenSlider[14].img} alt="" text="Canada" className="img" loading="lazy" />
                           
                    </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                           
                        <img src= {ImagenSlider[15].img} alt="" text="Canada" className="img" loading="lazy" />
                           </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                        <img src= {ImagenSlider[16].img} alt="" text="Canada" className="img" loading="lazy" />
                           
                           </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>
                <div className="cuadro-productos">
                    <figure>
                    <LazyLoad debounce={50} offset={50} once> 
                        <img src= {ImagenSlider[17].img} alt="" text="Canada" className="img" loading="lazy" />
                           
                           </LazyLoad>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                </div>

            </div>
        </div>
        
        </>
    )
}

export { Todo}





























