import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { deliteCart } from '../redux/action/index'

const Cart = () => {
 // const state = useSelector((state) => state.addItem);
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(deliteCart(item))
  }

  const cartItems = (cartItem) => {
    return (
      <section className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button onClick={() =>  handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={cartItem.img} alt={cartItem.title} height="200px" width="180px"/>
            </div>
            <div className="col-md-4">
              <h3>{cartItem.tittle}</h3>
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

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !==0 && state.map(cartItems)}
    </div>
  )
}

export default Cart