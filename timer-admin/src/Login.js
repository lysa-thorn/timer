import client from "./Axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login =()=>{
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigator = useNavigate()

    async function login(e){
        e.preventDefault();
        try {
            const response = await client.post('login',{
                email,password
            })
            localStorage.setItem('token',JSON.stringify(response.data))
            navigator('/')
            console.warn(response)
        } catch (error) {
            console.warn(error)
        }
    }


    return(
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={login}>
                                        <div className="py-3">
                                            <label htmlFor="email">Email</label>
                                            <input type='email' onChange={e =>setEmail(e.target.value)} id="email" placeholder="Email" className="form-control" />
                                        </div>
                                        <div className="py-3">
                                            <label htmlFor="password">Password</label>
                                            <input type='password' onChange={e => setPassword(e.target.value)} id="password" placeholder="Password" className="form-control" />
                                        </div>
                                        <div className="py-3">
                                            <button type="submit" className="btn btn-primary">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login