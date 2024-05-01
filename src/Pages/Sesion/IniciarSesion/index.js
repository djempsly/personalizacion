import React from "react";
import { Field, Formik,Form } from "formik";
import { Link } from "react-router-dom";

import './entra.css'

const Entra = ()=>{
    return (
        <>
         <Formik 
                initialValues={{
                    name: ''
                }}
                onSubmit={value=>{
                    console.log(value);
                }}
                >
                <Form>
                    <div className="form-group">
                        <label htmlFor="name" >Usuario</label>
                        <Field name="name" className="form-control" />
                    </div>
                    
                    <Link className="button button-secondary" to="/genres">Cancel</Link> 
                </Form>   
            </Formik>
      
        </>
    )

}

export {Entra}