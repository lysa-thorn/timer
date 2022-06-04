import React, { Component,useEffect,useState } from 'react';
import '../sass/product.scss';
import {Outlet,Link } from "react-router-dom";
import client from '../config/axios';


const List =()=>{

    const [lists,setList] = useState([])
    async function fetchList(){
        try {
            const response = await client.get('products')
            setList(response.data.products)
        } catch (error) {
            console.warn(error)
        }

    }
    useEffect(() => { fetchList() }, [])
    return (
        <>
            <section className='list-product'>
                <div className="container my-5">
                    <div className='row'>
                        <div className="col-md-12">
                            <div className="wrapper">
                                <div className="container my-5">
                                    <div className="row">
                                        {
                                        lists.map((list) =>
                                            <div className="col-md-3 my-3" key={list.id}>
                                                <div className="card text-center">
                                                    <div className="image"> 
                                                        <img src={list.image} width="200" height="200"/> 
                                                    </div>
                                                    <div className="about-product text-center">
                                                        <h5>{list.name}</h5>
                                                        <h6>{list.price}</h6> 
                                                        {/* <button className="btn btn-cart">Cart</button> */}
                                                        <Link to={`detail/`+list.id} className="btn btn-cart">Cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default List