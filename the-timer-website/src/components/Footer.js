import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import '../sass/footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="bg-dark text-white text-center text-lg-start" >
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-lg-7 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase">The Timer Shop</h5>
                                <p>
                                    we pride ourselves on being the No. 1 for Brands in the designer watch world. Stocking over 150 top brands, from luxury Versace to hip HUGO, plus brands designed by us such as Depth Charge (available exclusively at WatchShop, we might add),
                                    we are here to help you find your ideal watch, whoever you are buying for.
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            
                                <h5 className="text-uppercase mb-0">Sitemap</h5>
                                <ul className="list-unstyled mb-0">
                                   
                                    <li>
                                        <Link to="/" className="nav-link text-white">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/feedback" className="nav-link text-white">Feedback</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" className="nav-link text-white">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="nav-link text-white">About Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-center">
                                <h5 className="text-uppercase mb-0">Socail Link</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white"><i className="fa-brands fa-instagram-square" /></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white"><i className="fa-brands fa-facebook" /></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white"><i className="fa-brands fa-youtube" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-center p-3">
                        © 2020 Copyright:
                        <a className="text-white license" href="/"> The Timer Shop</a>
                    </div>
                </footer>
            </>
        );
    }
}