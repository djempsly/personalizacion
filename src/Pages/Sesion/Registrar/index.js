import React from "react";
// import { Form } from "react-router-dom";
import { Field, Formik,Form } from "formik";
import './index.css'

import { Link } from "react-router-dom";


const Registrar = ()=>{
    return (
        <>
        {/* <div className="div-form-container">
        <Form className="form">

        </Form>
        </div> */}


<h3>Create Genre</h3>
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
                        <label htmlFor="name" >Name</label>
                        <Field name="name" className="form-control" />
                    </div>
                    
                    <Link className="button button-secondary" to="/genres">Cancel</Link> 
                </Form>   
            </Formik>
        </>
    )

}

export {Registrar}