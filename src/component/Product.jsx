import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Loading from './Loading';

const Product = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)

  const getProduct = async () => {
    setLoading(true)
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setLoading(false)
    setProduct(await response.json());
}
  const ShowProduct = () => {
    return(
      <>
      <div className="col-md-5 my-5">
        <img src={product.image} alt={product.title}
        height="400px" width="400px"/>
      </div>
      <div className="col-md-7">
        <h5 className="text-uppercase text-black-50">{product.category}</h5>
        <h2 className="display-5">{product.title}</h2>
        <p className="lead fw-bolder">
          Rating {product.rating && product.rating.rate}
          <i className="fa fa-star"></i>
        </p>
        <h5 className="display-6 fw-bold my-4">$ {product.price}</h5>
        <p className="lead">{product.description}</p>
        <button className="btn btn-outline-dark me-2">Añadir al carrito</button>
        <NavLink to='/'className="btn btn-dark">Ir al carrito</NavLink>
      </div>
      </>
    )
  }

  useEffect(() => {
    getProduct()
    console.log(product)
  }, [])

  return (
    <><section className="container py-4">
      <div className="row">
        {loading ? < Loading/> : < ShowProduct/>}
      </div>
    </section>
</>
  )
}

export default Product