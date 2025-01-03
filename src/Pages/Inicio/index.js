import React from "react";
import { Todo } from "../../Componentes/Todo";
import { Layout } from "../../Componentes/Layout";
import { Sliders } from "../../Componentes/Slider";


const Inicio = () =>{

  

    return(
        <>
        <Sliders />
        <Layout>
            <Todo precio={25} />
      
        </Layout>


        </>
    )
}

export { Inicio}





