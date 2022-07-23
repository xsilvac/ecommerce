import React, { useState, useEffect } from 'react';
import './Home.css'


const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    if (componentMounted) {
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
      console.log(data, filter)
    }
    return () => {
      componentMounted = false;
    }
  }
  useEffect(() => {
    getProducts()
  }, [])

  const Loading = () => {
  return(
  <>
  <div className="loading"><div className="loadingChild">
<div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
</div></div></>
  )}

  const ShowLoading = () => {
    return (
      <>
      <div id="btnsProducts" >
        <button className="btn btn-outline-dark me-2">Todo</button>
        <button className="btn btn-outline-dark me-2">Moda Hombre</button>
        <button className="btn btn-outline-dark me-2">Moda Mujer</button>
        <button className="btn btn-outline-dark me-2">Accesorios</button>
        <button className="btn btn-outline-dark me-2">Electronicos</button>
      </div>
      
    {filter.map((product) => {
        return (
          <section className="col-6 col-md-3 py-2" key={product.id}>
            <div className="card h-100 text-center p-4">
              <img src={product.image} className="card-img-top" height="200px" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{product.title.slice(0,12)}...</h5>
                  <p className="card-text lead fw-bolder">S/.{product.price}</p>
                  <a href="#" className="btn btn-outline-dark">Comprar</a>
                </div>
            </div>
          </section>
        )
      })
    }
    </>
    )
  }

return (
  <section className="container py-3">
    <div className="row">
      <div className="col-12 mb-2">
        <h1 className="display-6 fw-bolder text-center">Productos</h1>
      </div>
    </div>
    <div className="row justify-content-center">
      {loading ? <Loading /> : <ShowLoading /> }
    </div>
  </section>
)
}

export default Products