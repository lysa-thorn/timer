
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import client from '../Axios';
import categoryService from '../Service';
const Create = () => {

    const [name, setName] = useState();
    var data = {
        name:name
    }
    async function create(e){
        e.preventDefault();
        try {
            const response = categoryService.createCat(data)
            // console.warn(response)
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
                            <Link to={'/category'} className="btn btn-dark">Back</Link>
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