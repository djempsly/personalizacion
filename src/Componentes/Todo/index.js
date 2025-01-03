import React from "react";
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
 import polomorado from '../../assets/imgProduct/polomorado.jpeg'
 import polomora from '../../assets/imgProduct/Polomora.jpeg'
 import bolsa from '../../assets/imgProduct/bolsa.jpg'
 import polocher1 from '../../assets/imgProduct/polocher1.jpg'
 import plato from '../../assets/imgProduct/plato.jpg'
 import termo2 from '../../assets/imgProduct/termo2.jpg'

import './todo.css'


const ImgProduct = [
    {"img": Canada, text:'Taza'},
    {"img": MExico, text:'Taza'},
    {"img": PoloFerreteria, text:'Polocher'},
    {"img": DomRep, text:'Taza'},
    {"img": imagen1, text:'Taza'},
    {"img": taza1, text:'Taza'},
    {"img": taza2, text:'Taza'},
    {"img": taza3, text:'Taza'},
    {"img": taza5, text:'Taza'},
    {"img": taza6, text:'Taza'},
    {"img": taza7, text:'Taza'},
    {"img": taza_dorada1, text:'Taza'},
    {"img": taza_gris1, text:'Taza'},
    {"img": Termo1, text:'Termo'},
    {"img": vaso1, text:'Vaso'},
    {"img": vaso_rosado, text:'Vaso'},
    {"img": portaretrato, text:'Portaretrato'},
    {"img": rompeza_corazon, text:'Rompecabeza'},
    {"img": Dios, text:'Portaretrato'},
    {"img": polomora, text:'Polocher'},
    {"img": polomorado, text:'Polocher'},
    {"img": polocher1, text:'Polocher'},
    {"img": bolsa, text:'bolsa'},
    {"img":plato, text:'plato'},
    {"img": termo2, text:'termo'}
   
]  



function Todo({precio}){

    return(
        <>
        
        <div className="div-img-container"> 
            <div className="div-product"> 

            <div className="portaretrato img-container">
                <div className="cuadro-productos">
                    <figure>
            
                        <img src={ImgProduct[18].img} alt="" text="Canada" className="img" loading="lazy" />

                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            precio $ {precio}
                        </span>
                        <span className="descripcion">
                            Es una taza, con bandera de Canada
                        </span>
                    </div>
                    <button className="carritos">Add To Cart

                    </button>
                </div>


                 <div className="cuadro-productos">
                    <figure>
                        <img src= {ImgProduct[17].img} alt="" text="Canada" className="img" loading="lazy" />
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            Precio ${precio=60}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>

                <div className="cuadro-productos">
                    <figure>
                        <img src= {ImgProduct[23].img} alt="" text="Canada" className="img" loading="lazy" />   
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>

                <div className="cuadro-productos">
                    <figure>
                        <img src= {ImgProduct[22].img} alt="" text="Canada" className="img" loading="lazy" />   
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>
                
            </div>

            <div className="taza img-container ">
                <div className="cuadro-productos">
                    <figure>
                        <img src={ImgProduct[0].img} alt="" text="Canada" className="img" loading="lazy" />
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>

                <div className="cuadro-productos">
                    <figure>        
                        <img src= {ImgProduct[1].img} alt="" text="Canada" className="img" loading="lazy" prefetch={true} />
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>

                <div className="cuadro-productos">
                    <figure> 
                        <img src= {ImgProduct[12].img} alt="" text="Canada" className="img" loading="lazy" prefetch={true} />
  
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>

                <div className="cuadro-productos">
                    <figure>
                        <img src= {ImgProduct[3].img} alt="" text="Canada" className="img" loading="lazy" prefetch={true} />

                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>

                <div className="cuadro-productos">
                    <figure>
                        <img src= {ImgProduct[4].img} alt="" text="Canada" className="img" loading="lazy" prefetch={true} />                           

                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>

                <div className="cuadro-productos">
                    <figure> 
                        <img src= {ImgProduct[5].img} alt="" text="Canada" className="img" loading="lazy" prefetch={true}/>                          
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>

                <div className="cuadro-productos">
                    <figure> 
                        <img src= {ImgProduct[6].img} alt="" text="Canada" className="img" loading="lazy" prefetch={true} />                         

                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>

                <div className="cuadro-productos">
                    <figure>
                        <img src= {ImgProduct[7].img} alt="" text="Canada" className="img" loading="lazy" prefetch={true} />                        
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>

                <div className="cuadro-productos">
                    <figure> 
                        <img src= {ImgProduct[8].img} alt="" text="Canada" className="img" loading="lazy"  prefetch={true}/>                          
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>

                <div className="cuadro-productos">
                    <figure>    
                        <img src= {ImgProduct[9].img} alt="" text="Canada" className="img" loading="lazy" prefetch={true}/>
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>

                <div className="cuadro-productos">
                    <figure>
                           
                        <img src= {ImgProduct[10].img} alt="" text="Canada" className="img" loading="lazy" prefetch={true} />
     
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>

                <div className="cuadro-productos">
                    <figure>
 
                        <img src= {ImgProduct[11].img} alt="" text="Canada" className="img" loading="lazy" prefetch={true} />
     
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>
            </div>
              
                        

            <div className="termo img-container">
                <div className="cuadro-productos">
                    <figure>
                        <img src= {ImgProduct[14].img} alt="" text="Canada" className="img-termo" loading="lazy" prefetch={true} />
                
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>

                <div className="cuadro-productos">
                    <figure>       
                        <img src= {ImgProduct[15].img} alt="" text="Canada" className="img-termo" loading="lazy" prefetch={true} />
                          
                    </figure>
                    <div className="detalles-productos">
                        <span className="precio">
                            {/* Precio ${precio} */}
                        </span>
                        <span className="descripcion">
                            {/* Es una taza, con bandera de Canada */}
                        </span>
                    </div>
                    <button className="carritos">Add To Cart</button>
                </div>

                <div className="cuadro-productos">
                        <figure>
                            <img src= {ImgProduct[13].img} alt="" text="Canada" className="img-termo" loading="lazy" prefetch={true} />
                        </figure>
                        <div className="detalles-productos">
                                <span className="precio">
                                    {/* Precio ${precio} */}
                                </span>
                                <span className="descripcion">
                                    {/* Es una taza, con bandera de Canada */}
                                </span>
                        </div>
                     <button className="carritos">Add To Cart</button>
                 </div>

                 <div className="cuadro-productos">
                            <figure>
                                <img src= {ImgProduct[24].img} alt="" text="Canada" className="img-termo" loading="lazy" prefetch={true} />
                            </figure>
                            <div className="detalles-productos">
                                <span className="precio">
                                    {/* Precio ${precio} */}
                                </span>
                                <span className="descripcion">
                                    {/* Es una taza, con bandera de Canada */}
                                </span>
                            </div>
                        <button className="carritos">Add To Cart</button>
                 </div>
       
            </div>

                <div className="polocher img-container">
                    
                    <div className="cuadro-productos">
                            <figure>
                                <img src= {ImgProduct[2].img} alt="" text="Canada" className="img"  loading="lazy" prefetch={true} />
                            </figure>
                            <div className="detalles-productos">
                                <span className="precio">
                                    Precio ${precio}
                                </span>
                                <span className="descripcion">
                                    Es una taza, con bandera de Canada
                                </span>
                            </div>
                            <button className="carritos">Add To Cart</button>
                    </div>

                    <div className="cuadro-productos">
                            <figure>
                                <img src= {ImgProduct[19].img} alt="" text="Canada" 
                                id="polomorado"
                                className="img"  loading="lazy"/>

                            </figure>
                            <div className="detalles-productos">
                                <span className="precio">
                                    {/* Precio ${precio} */}
                                </span>
                                <span className="descripcion">
                                    {/* Es una taza, con bandera de Canada */}
                                </span>
                            </div>
                            <button className="carritos">Add To Cart</button>
                    </div>

                    <div className="cuadro-productos">
                            <figure>
                                <img src= {ImgProduct[20].img} alt="" text="Canada" className="img" 
                                id="polomora"
                                loading="lazy"/>

                            </figure>
                            <div className="detalles-productos">
                                <span className="precio">
                                    {/* Precio ${precio} */}
                                </span>
                                <span className="descripcion">
                                    {/* Es una taza, con bandera de Canada */}
                                </span>
                            </div>
                            <button className="carritos">Add To Cart</button>
                    </div>

                    <div className="cuadro-productos">
                            <figure>
                                <img src= {ImgProduct[21].img} alt="" text="Canada" className="img" 
                                id="polomora"
                                loading="lazy"/>

                            </figure>
                            <div className="detalles-productos">
                                <span className="precio">
                                    {/* Precio ${precio} */}
                                </span>
                                <span className="descripcion">
                                    {/* Es una taza, con bandera de Canada */}
                                </span>
                            </div>
                            <button className="carritos">Add To Cart</button>
                    </div>


                </div>
    
            </div>
        </div>
        
        </>
    )
}


export { Todo}





























