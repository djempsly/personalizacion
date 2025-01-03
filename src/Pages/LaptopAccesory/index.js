import React from "react";
import dell1 from '../../assets/laptop/dell1.jpeg'
import hp1 from '../../assets/laptop/hp1.jpeg'
import hp15 from '../../assets/laptop/hp15.jpeg'
import hp2 from '../../assets/laptop/hp2.jpeg'
import hp3 from '../../assets/laptop/hp3.jpeg'
import lenovo1 from '../../assets/laptop/lenovo1.jpeg'
import lenovo14 from '../../assets/laptop/lenovo14.jpeg'
import lenovo2 from '../../assets/laptop/lenovo2.jpeg'
import lenovo3 from '../../assets/laptop/lenovo3.jpeg'
import lenovothinkpad from '../../assets/laptop/lenovothinkpad.jpeg'

import './todo.css'

const ImgProduct = [
    {"img": dell1, text:'Dell'},
    {"img": hp1, text:'Laptop HP'},
    {"img": hp2, text:'Laptop HP'},
    {"img": hp3, text:'Laptop HP'},
    {"img": hp15, text:'Laptop HP Grande'},
    {"img": lenovo1, text:'laptop Lenovo'},
    {"img": lenovo2, text:'laptop Lenovo'},
    {"img": lenovo3, text:'Laptop Lenovo'},
    {"img": lenovo14, text:'Laptop Lenovo Grande'},
    {"img": lenovothinkpad, text:'Laptop Lenovo Thinkpad'},
    
]  

const LaptopAccesory = ()=>{
    return(
        <>
        <div className="div-img-container"> 
            <div className="div-product"> 

            <div className="portaretrato img-container">
                <div className="cuadro-productos">
                    <figure> <img src={ImgProduct[0].img} alt=""
                     text="Dell" className="img" loading="lazy" />
                    </figure>
                    <div className="detalles-productos">
                        <span className="descripcion">
                            Es una computadora Dell Latitude 430 grado B, en perfecta condición.
                             Tiene un procesador i3 de 4ta generación,
                            tiene 4GB de memoria RAM, con opción de aumento,
                             es una laptop touch y tiene 500GB de disco duro.
                        </span>
                    </div>
                    <button className="carritos">Add To Cart </button>
                </div>

                <div className="cuadro-productos">
                    <figure> <img src={ImgProduct[2].img} alt=""
                     text="Dell" className="img" loading="lazy" />
                    </figure>
                    <div className="detalles-productos">
                        <span className="descripcion">
                            Es una computadora HP, en perfecta condición.
                            Es todo en uno, puedes usarla como tablet o laptop
                            Tiene un procesador i3 de 4ta generación,
                            tiene 4GB de memoria RAM, con opción de aumento,
                            es una laptop touch y tiene 256GB de Disco Solido.
                        </span>
                    </div>
                    <button className="carritos">Add To Cart </button>
                </div>

                <div className="cuadro-productos">
                    <figure> <img src={ImgProduct[4].img} alt=""
                     text="Dell" className="img" loading="lazy" />
                    </figure>
                    <div className="detalles-productos">
                        <span className="descripcion">
                            Es una computadora Dell Latitude 430 grado B, en perfecta condición.
                             Tiene un procesador i3 de 4ta generación,
                            tiene 4GB de memoria RAM, con opción de aumento,
                             es una laptop touch y tiene 500GB de disco duro.
                        </span>
                    </div>
                    <button className="carritos">Add To Cart </button>
                </div>
                <div className="cuadro-productos">
                    <figure> <img src={ImgProduct[5].img} alt=""
                     text="Dell" className="img" loading="lazy" />
                    </figure>
                    <div className="detalles-productos">
                        <span className="descripcion">
                            Es una computadora Dell Latitude 430 grado B, en perfecta condición.
                             Tiene un procesador i3 de 4ta generación,
                            tiene 4GB de memoria RAM, con opción de aumento,
                             es una laptop touch y tiene 500GB de disco duro.
                        </span>
                    </div>
                    <button className="carritos">Add To Cart </button>
                </div>
                <div className="cuadro-productos">
                    <figure> <img src={ImgProduct[6].img} alt=""
                     text="Dell" className="img" loading="lazy" />
                    </figure>
                    <div className="detalles-productos">
                        <span className="descripcion">
                            Es una computadora Dell Latitude 430 grado B, en perfecta condición.
                             Tiene un procesador i3 de 4ta generación,
                            tiene 4GB de memoria RAM, con opción de aumento,
                             es una laptop touch y tiene 500GB de disco duro.
                        </span>
                    </div>
                    <button className="carritos">Add To Cart </button>
                </div>
                <div className="cuadro-productos">
                    <figure> <img src={ImgProduct[7].img} alt=""
                     text="Dell" className="img" loading="lazy" />
                    </figure>
                    <div className="detalles-productos">
                        <span className="descripcion">
                            Es una computadora Dell Latitude 430 grado B, en perfecta condición.
                             Tiene un procesador i3 de 4ta generación,
                            tiene 4GB de memoria RAM, con opción de aumento,
                             es una laptop touch y tiene 500GB de disco duro.
                        </span>
                    </div>
                    <button className="carritos">Add To Cart </button>
                </div>
                <div className="cuadro-productos">
                    <figure> <img src={ImgProduct[8].img} alt=""
                     text="Dell" className="img" loading="lazy" />
                    </figure>
                    <div className="detalles-productos">
                        <span className="descripcion">
                            Es una computadora Dell Latitude 430 grado B, en perfecta condición.
                             Tiene un procesador i3 de 4ta generación,
                            tiene 4GB de memoria RAM, con opción de aumento,
                             es una laptop touch y tiene 500GB de disco duro.
                        </span>
                    </div>
                    <button className="carritos">Add To Cart </button>
                </div>








                 


                </div>
            </div>
        </div>
        
        </>
    )
}

export { LaptopAccesory }