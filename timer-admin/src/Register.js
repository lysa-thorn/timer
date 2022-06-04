import client from "./Axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register =()=>{

    const [name,setUsername] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigator = useNavigate()
    async function register(e){
        e.preventDefault();
        try {
            const response = await client.post('register',{
                name,email,password
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
                <div className="container p-5">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={register}>
                                        <div className="py-2">
                                            <label htmlFor="username">Username</label>
                                            <input type='text' onChange={e => setUsername(e.target.value)} placeholder="Username" id="username" className="form-control" />
                                        </div>
                                        <div className="py-2">
                                            <label htmlFor="email">Email</label>
                                            <input type='email' onChange={e => setEmail(e.target.value)} placeholder="Email" id="email" className="form-control" />
                                        </div>
                                        <div className="py-2">
                                            <label htmlFor="password">Password</label>
                                            <input type='password' onChange={e =>setPassword(e.target.value)} id="password" placeholder="Password" className="form-control" />
                                        </div>
                                        <div className="py-2">
                                            <button type="submit" className="btn btn-primary">Register</button>
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

export default Register