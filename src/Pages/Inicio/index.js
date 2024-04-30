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

        <div class="products_pager form-inline justify-content-center py-3">
                        
        <ul class=" pagination m-0 ">
            <li class="page-item ">
                <a href="/shop/page/2" class="page-link ">Anterior</a>
            </li>
            
                <li class="page-item "> <a href="/registrar" class="page-link ">Registrar</a></li>
            
                <li class="page-item "> <a href="/shop/page/2" class="page-link ">2</a></li>
            
                <li class="page-item active"> <a href="/shop/page/3" class="page-link ">3</a></li>
            
                <li class="page-item "> <a href="/shop/page/4" class="page-link ">4</a></li>
            
                <li class="page-item "> <a href="/shop/page/5" class="page-link ">5</a></li>
            
            <li class="page-item ">
                <a href="/shop/page/4" class="page-link ">Siguiente</a>
            </li>
        </ul>
    
                    </div>
        </>
    )
}

export { Inicio}





