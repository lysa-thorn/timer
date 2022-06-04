import { useEffect,useState } from "react";
import client from "./Axios";
const Header = () => {
    const [user, setUser] = useState();
    async function fetchUser() {
        try {
            const response = await client.get('user')
            setUser(response.data.user.name)
        } catch (error) {
            console.warn(error)
        }
    }
    useEffect(() => { fetchUser() }, [])
    return (
        <>
            <div className="container-fluid bg-dark">
               <div className="container p-3">
                   <div className="row">
                       <div className="col-12 text-center">
                           <h4 className="text-white">{user}</h4>
                       </div>
                   </div>
               </div>
            </div>
        </>
    )
}

export default Header