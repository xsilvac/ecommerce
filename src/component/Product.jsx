import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { addCart } from '../redux/action';
import { useParams, NavLink } from 'react-router-dom';
import Loading from './Loading';

const Product = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  }

  const getProduct = async () => {
    setLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setLoading(false);
    setProduct(await response.json());
}
  const ShowProduct = () => {
    return(
      <>
      <div className="d-flex justify-content-center col-md-5 my-5">
        <img src={product.image} alt={product.title} className="my-3"
        height="380px" width="350px"/>
      </div>
      <div className="col-md-6 p-4">
        <h5 className="text-uppercase text-black-50">{product.category}</h5>
        <h2 className="display-5">{product.title}</h2>
        <p className="lead fw-bolder">
          Rating {product.rating && product.rating.rate}
          <i className="fa fa-star"></i>
        </p>
        <h5 className="display-6 fw-bold my-4">$ {product.price}</h5>
        <p className="lead">{product.description}</p>
        <button className="btn btn-outline-dark me-2" onClick={() => addProduct(product)}>Añadir al carrito</button>
        <NavLink to='/Cart'className="btn btn-dark">Ir al carrito</NavLink>
      </div>
      </>
    )
  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <><section className="container-fluid my-3 px-5">
      <div className="row">
        {loading ? < Loading/> : < ShowProduct/>}
      </div>
    </section>
</>
  )
}

export default Product