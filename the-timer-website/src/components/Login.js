import React, { Component, useState } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import client from '../config/axios';

const Login = () =>{
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password,setPassword] = useState();

    async function login(e){
        e.preventDefault();
        try {
            const response = await client.post('login',{
                email,password
            })
            localStorage.setItem('token', JSON.stringify(response.data))
            navigate('/')
            console.warn(response)
        } catch (error) {
            console.warn(error)
        }
    }
    return (
        <>
            <div className="container">
                <div className="row m-5 no-gutters shadow-lg">
                    <div className="col-md-6 d-none d-md-block">
                        <img src="https://www.ewatchwholesale.com/public/uploads/banners/570x255/Second-Banner-20201508-New%20Project%20(4).jpg" className="img-fluid" style={{ height:"300px" }} />
                    </div>
                    <div className="col-md-6 bg-white p-5">
                        <h3 className="pb-3">Login Form</h3>
                        <div className="form-style">
                            <form onSubmit={login}>
                                <div className="form-group pb-3">
                                    <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group pb-3">
                                    <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="pb-2">
                                    <button type="submit" className="btn btn-dark w-100 font-weight-bold mt-2">Login</button>
                                </div>
                            </form>
                            <div className="pt-4 text-center">
                                Create Account: <Link to="/register">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login