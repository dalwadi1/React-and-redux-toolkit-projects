import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

    const [product, setProduct] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('http://127.0.0.1:4000/product')

            setProduct(res.data.data)
        }

        getData()
    }, [])
    return (
        <div>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop </p>
                    </div>
                </div>
            </header>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            product === null ? " " : product.map((e, i) => {
                                return <div className="col mb-5" key={e._id}>
                                    <div className="card h-100">
                                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder">{e.name}</h5>
                                                {e.price}
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                            {/* <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Remove to cart</a></div> */}
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>


        </div >
    )
}

export default Home
