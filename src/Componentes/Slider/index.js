import React from "react";
import img1 from '../../assets/imgSlider/img1.png'
import img2 from '../../assets/imgSlider/img2.png'
import img3 from '../../assets/imgSlider/img3.png'
import img4 from '../../assets/imgSlider/img4.png'
import './slider.css'



const ImagenSlider = [
{"img": img1},
{"img": img2},
{"img": img3},
{"img": img4},
]



const Slider = () =>{
    return(
        <>
        <div className="slider-container"> 
            <div className="slider"> 
              <ul> 
                <li>
                <img src= {ImagenSlider[0].img} alt="" />
                </li>
                <li>
                  <img src= {ImagenSlider[1].img} alt="" />
                </li>
                <li>
                  <img src= {ImagenSlider[2].img} alt="" />
                </li>
                <li>
                  <img src= {ImagenSlider[3].img} alt="" />
                </li>
              </ul>
            </div>

            
            

        </div>





        














        </>
    )
}

export { Slider}















