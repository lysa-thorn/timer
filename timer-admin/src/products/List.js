import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../Axios";
import ProductService from '../Service';

const List = () => {

    const [products, setProduct] = useState([]);
    async function fetchProCat() {
        try {
            const response = await ProductService.getAll()
            // console.warn(response.data)
            setProduct(response.data.products)
        } catch (error) {
            console.warn(error)
        }
    }

    function handleRemove(id) {
        // console.log(id);
        try {
            const response = client.delete(`product/${id}`)
            // console.warn(response)
        } catch (error) {
            console.warn(error)
        }
    }

    useEffect(() => { fetchProCat() }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 my-3">
                            <Link to={'create-product/'} className="btn btn-info">Create</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Description</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                        {
                                            products.map(( product ) => {
                                                return(
                                                    <tr key={product.id}>
                                                    <td>{product.id}</td>
                                                    <td><img src={product.image} height={'50px'} width={'50px'} /></td>
                                                    <td>{product.name}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.description}</td>
                                                    <td>
                                                        <Link to={'update-product/'+product.id} className="btn btn-info">Edit</Link>
                                                        <button type="button" className="btn btn-danger" onClick={() => handleRemove(product.id)}>Remove</button>
                                                    </td>
                                                </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List