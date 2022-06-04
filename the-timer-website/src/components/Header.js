import React from 'react';
import {Outlet,Link } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">The Timer Shop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav m-auto">
                            <li className="navbar-item px-3">
                                <Link to="/" className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="navbar-item px-3">
                                <Link to="/about" className="nav-link">About Us</Link>
                            </li>
                            <li className="navbar-item px-3">
                                <Link to="/list" className="nav-link">Producst</Link>
                            </li>
                            <li className="navbar-item px-3">
                                <Link to="/contact" className="nav-link">Contact Us</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav m-right">
                            <li className="navbar-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
            </>
        );
    }
}