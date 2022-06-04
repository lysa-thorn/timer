
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import client from '../Axios';

const Create = () => {

    const [categories,setCategories] = useState([])
    async function fetchCat(){
        try {
            const response = await client.get('categories')
            setCategories(response.data.categories)
        } catch (error) {
            console.warn(error)
        }
    }

    useEffect(() => {fetchCat()},[])

    const [category_id, setCatId] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [image, setFile] = useState();
    
    function handleChange(e){
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    async function create(e){
        e.preventDefault();
        try {
            const response = await client.post('product',{
                name,price,description,category_id,image
            })
            console.warn(response)
        } catch (error) {
            console.warn(error)
        }
    }
    

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
                                    <form onSubmit={create}>
                                        <div className="my-2">
                                            <label htmlFor="name">Name</label>
                                            <input onChange={e => setName(e.target.value)} type="text" id="name" className="form-control" placeholder="name" />
                                        </div>
                                        <div className="my-2">
                                            <label htmlFor="price">Price</label>
                                            <input onChange={e => setPrice(e.target.value)} type="text" id="price" className="form-control" placeholder="name" />
                                        </div>
                                        <div className="my-2">
                                            <label htmlFor="description">Description</label>
                                            <textarea onChange={e => setDescription(e.target.value)} className="form-control" rows="3"></textarea>
                                        </div>
                                        <div className="my-2">
                                            <select className="form-control" onChange={e => setCatId(e.target.value)}>
                                                {
                                                    categories.map((cat) =>(
                                                        <option key={cat.id} value={cat.id} >{cat.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="my-2">
                                            <input type="file" onChange={handleChange} />
                                            <img src={image} width='100px' />
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

export default Create