import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../Axios";
import categoryService from '../Service';

const List = () => {

    const [categories, setCategories] = useState([]);
    async function fetchProCat() {
        try {
            const response = await categoryService.getAllCat()
            setCategories(response.data.categories)
        } catch (error) {
            console.warn(error)
        }
    }

    function handleRemove(id) {
        try {
            const response = client.delete(`category/${id}`)
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
                            <Link to={'create-category/'} className="btn btn-info">Create</Link>
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
                                                <th>Name</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                        {
                                            categories.map(( category ) => {
                                                return(
                                                    <tr key={category.id}>
                                                    <td>{category.id}</td>
                                                    <td>{category.name}</td>
                                                    <td>
                                                        <Link to={'update-category/'+category.id} className="btn btn-info">Edit</Link>
                                                        <button type="button" className="btn btn-danger" onClick={() => handleRemove(category.id)}>Remove</button>
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