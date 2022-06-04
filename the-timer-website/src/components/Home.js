import React, { Component,useState,useEffect } from 'react';
import '../sass/home.scss';
import {Outlet,Link} from "react-router-dom";
import client from '../config/axios';

const Home = () =>{ 
    const [products, setProduct] = useState([]);
    async function fetchProduct() {
        try {
            const response = await client.get('/products')
            // console.warn(response.data.products);
            setProduct(response.data.products)
        } catch (error) {
            console.warn(error)
        }
    }
    useEffect(() => { fetchProduct() }, [])
    return (
        <>
            <section className='slide-show'>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://www.ewatchwholesale.com/public/uploads/slider/slider-20201508-New%20Project%20(2)%20(1).jpg" className="d-block w-100 img-fluid" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='text-dark'>First slide label</h5>
                            <p className='text-dark'>Excellentwatches Women's Glitter Novelty Christmas Holiday Watch (White Gingerbread Man)</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://www.ewatchwholesale.com/public/uploads/slider/slider-20201508-New%20Project.jpg" className="d-block w-100 img-fluid" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='text-dark'>Second slide label</h5>
                            <p className='text-dark'>Ewatchwholsale-Christmas Leather Strap Watch With Rhinestone And Gold Tone</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://www.ewatchwholesale.com/public/uploads/slider/slider-20203108-slider%202.jpeg" className="d-block w-100 img-fluid" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='text-dark'>Third slide label</h5>
                            <p className='text-dark'>Geneva 30mm Square Dial With Big Size Cuff Style Band</p>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section className="content">
                <div className="wrapper">
                    <div className="container my-5">
                        <div className="row">
                            {
                                products.map((product) =>(
                                    <div className="col-md-3 my-3" key={product.id}>
                                        <div className="card text-center">
                                            <div className="image"> 
                                                <img src={product.image} width="200" height="200"/> 
                                            </div>
                                            <div className="about-product text-center">
                                                <h5>{product.name}</h5>
                                                <h6>${product.price}</h6> 
                                                <Link to={`list/detail/`+product.id} className="btn btn-cart">Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Outlet/>
        </>
    );
}

export default Home