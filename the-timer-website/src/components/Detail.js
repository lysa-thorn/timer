import React, { Component,useEffect,useState } from 'react';
import '../sass/detail.scss';
import {Outlet,Link,useParams } from "react-router-dom";
import client from '../config/axios';

const Detail =()=>{

    const {id} = useParams();
    const product = {id:null,name:"",price:"",category_id:null,description:"",image:""}
    const [currentProduct,setCurrentProduct] = useState(product)
    const [categories,setCategories] = useState([])

    async function getProductById(){
        try {
            const response = await client.get(`product/${id}`)
            setCurrentProduct(response.data.product)
        } catch (error) {
            console.warn(error)
        }
    }

    async function fetchCat(){
        try {
            const response = await client.get('categories')
            setCategories(response.data.categories)
        } catch (error) {
            console.warn(error)
        }
    }

    useEffect(() => {fetchCat()},[])
    useEffect(() => {if (id)getProductById(id);}, [id]);

    return (
        <>
            <section className='detail-product'>
                <div className="container">
                    <div className="row dd-flex justify-content-center">
                        <div className="col-md-8">
                            <div className="card px-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="d-flex flex-row align-items-center"> 
                                            <i className='fa fa-apple fs-1'></i> 
                                            {
                                                categories.map((cat) =>(
                                                   <>
                                                    <span className="fw-bold ms-1 fs-5">{cat.id == currentProduct.id?cat.name:''}</span>
                                                   </>
                                                ))
                                            }
                                            {/* <span className="fw-bold ms-1 fs-5">Watch</span>  */}
                                        </div>
                                        <h1 className="fs-1 ms-1 mt-3">{currentProduct.name}</h1>

                                        <div className="ms-1"> 
                                            <span>{currentProduct.description}</span> 
                                        </div>
                                        <div className="mt-5 radio-buttons"> 
                                            <label className="radio"> 
                                                <input type="radio" name="code" value="grey" checked /> 
                                                <span></span> 
                                            </label> 
                                            <label className="radio"> 
                                                <input type="radio" name="code" value="pink"/> 
                                                <span></span> 
                                            </label> 
                                            <label className="radio"> 
                                                <input type="radio" name="code" value="black"/> 
                                                <span></span> 
                                            </label> 
                                        </div>
                                        <div className='action mt-5'>
                                            <button className="btn btn-info"> 
                                                <span>Add to Cart</span> 
                                                <i className="ms-2 fa fa-long-arrow-right"></i> 
                                            </button> 
                                            <button className="btn btn-primary mx-3"> 
                                                <span>Order Now</span> 
                                                <i className="ms-2 fa fa-long-arrow-right"></i> 
                                            </button> 
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="product-image"> 
                                            <img src={currentProduct.image} width="200" height="400" /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Detail