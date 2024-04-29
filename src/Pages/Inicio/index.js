import React from "react";
import { Todo } from "../../Componentes/Todo";
import { Layout } from "../../Componentes/Layout";


const Inicio = () =>{

    return(
        <>
        <Layout>

         <Todo 
         precio={15}
         />
        </Layout>
        </>
    )
}

export { Inicio}





