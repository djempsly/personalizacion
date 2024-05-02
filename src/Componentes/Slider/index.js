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
    // const [show, setShow] = useState(true);

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

            
            {/* <div className="slider-derecho"> 
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
            </div> */}


        </div>

{/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src= {ImagenSlider[0].img} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src= {ImagenSlider[1].img} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src= {ImagenSlider[1].img} class="d-block w-100" alt="..." />
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div> */}

        </>
    )
}

export { Slider}















