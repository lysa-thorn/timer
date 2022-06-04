
import { Link } from "react-router-dom";
const Home = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                                <Link to={'/category'}>
                                    <div className="card-body text-center">
                                        <h4>CATEGORIES</h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <Link to={'/product'}>
                                    <div className="card-body text-center">
                                        <h4>PRODUCTS</h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home