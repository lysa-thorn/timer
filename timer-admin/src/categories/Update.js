
import React, { Component, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import client from '../Axios';
// import productService from '../Service';

const Update = () => {

    const {id} = useParams();
    const [formData, setFormData] = useState({ name: ""})  

    async function getCategoryById(){
        try {
            const response = await client.get(`category/${id}`)
            setFormData(response.data.category)
        } catch (error) {
            console.warn(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            const response = client.put(`category/${id}`,formData)
            console.warn(response)
        } catch (error) {
            console.warn(error)
        }
    }

    useEffect(() => {if (id)getCategoryById(id);}, [id]);


    return (
        <>
           <div className="container-fluid">
               <div className="container my-5">
                    <div className="row">
                        <div className="col-12 my-3">
                            <Link to={'/product'} className="btn btn-dark">Back</Link>
                        </div>
                    </div>
                   <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                       <div className="my-2">
                                            <label htmlFor="name">Name</label>
                                            <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} name="name" type="text" id="name" className="form-control" />
                                        </div>

                                        <div className="my-3">
                                            <button type="submit" className="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
           </div>
        </>
    )
}

export default Update
