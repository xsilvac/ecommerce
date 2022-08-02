import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { deliteCart } from '../redux/action/index'
import {Link} from 'react-router-dom';

const Cart = () => {
 // const state = useSelector((state) => state.addItem);
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(deliteCart(item))
  }

  const cartItems = (cartItem) => {
    return (
      <section className="my-3 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-2">
          <button onClick={() =>  handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={cartItem.image} alt={cartItem.title} height="140px" width="110px"/>
            </div>
            <div className="col-md-5">
              <h4>{cartItem.title}</h4>
              <p className="lead fw-bold">${cartItem.price}</p>
            </div>
          </div>
        </div>
      </section>
    )

  }

  const emptyCart = () => {
    return(
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container">
          <div className="row">
            <h3>El carrito esta vacio</h3>
          </div>
        </div>
      </div>
    )
  }

  const button = () => {
    return (
      <div className="containet">
        <div className="row">
          <Link to='/checkout' className="btn btn-outline-primary mb-5 w-25 mx-auto">Pagar ahora</Link>
        </div>
      </div>
    )
  }
  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !==0 && state.map(cartItems)}
      {state.length !==0 && button()}
    </div>
  )
}

export default Cart