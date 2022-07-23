import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../img/newStyle.png'

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-light shadow-sm">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand">
                        <img src={logo} alt="logo" width="100%" height="40"/>
                    </NavLink >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/Products' className="nav-link active" aria-current="page">Productos</NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink to='/About' className="nav-link">Nosotros</NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink to='/Contact' className="nav-link">Contactanos</NavLink >
                            </li>
                        </ul>
                        <div className="d-flexbjh">
                            <NavLink to='/' className="btn btn-outline-secondary">
                            <i className='fa fa-sign-in me-1'></i>Iniciar</NavLink >
                            <NavLink to='/' className="btn btn-outline-secondary ms-2">
                            <i className='fa fa-user-plus me-1'></i>Registrate</NavLink >
                            <NavLink to='/' className="btn btn-outline-secondary ms-2">
                            <i className='fa fa-shopping-cart me-1'></i>Cart(0)</NavLink >
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar