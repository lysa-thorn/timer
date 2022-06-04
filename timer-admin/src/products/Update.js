
import React, { Component, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import client from '../Axios';

const Update = () => {

    const {id} = useParams();
    // const [name, setName] = useState();
    const [categories,setCategories] = useState([]);

    const [formData, setFormData] = useState({ name:"",price:"",category_id:null,description:"",image:""})  


    async function fetchCat(){
        try {
            const response = await client.get('categories')
            setCategories(response.data.categories)
        } catch (error) {
            console.warn(error)
        }
    }

    async function getProductById(){
        try {
            const response = await client.get(`product/${id}`)
            setFormData(response.data.product)
            // console.warn(response.data)
        } catch (error) {
            console.warn(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            const response = client.put(`product/${id}`,formData)
            console.warn(response)
        } catch (error) {
            console.warn(error)
        }
    }

    useEffect(() => {if (id)getProductById(id);}, [id]);
    useEffect(() => {fetchCat()},[])



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
                                    <form onSubmit={handleSubmit} >
                                       <div className="my-2">
                                            <label htmlFor="name">Name</label>
                                            <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} name="name" type="text" id="name" className="form-control" />
                                        </div>
                                          <div className="my-2">
                                            <label htmlFor="price">Price</label>
                                            <input value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} name="price"  type="text" id="price" className="form-control"  />
                                        </div>
                                        <div className="my-2">
                                            <label htmlFor="description">Description</label>
                                            <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} name="description" className="form-control" rows="3"></textarea>
                                        </div>
                                        <div className="my-2">
                                            <select className="form-control" onChange={(e) => setFormData({...formData, category_id: e.target.value})} name="category_id">
                                                {
                                                    categories.map((cat) =>(
                                                        <option key={cat.id} value={cat.id} >{cat.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="my-2">
                                            <input type="text" className="form-control" name="image" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} />
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
