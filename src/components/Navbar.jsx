import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'





const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink style={{color:'#ff6600'}}  className="navbar-brand fw-bold fs-4 px-2" to="/"> Shop.online</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul  className="navbar-nav m-auto my-2 text-center">
                        <li  className="nav-item">
                            <NavLink style={{color:'#ff6600'}} className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={{color:'#ff6600'}} className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={{color:'#ff6600'}} className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={{color:'#ff6600'}} className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink style={{color:'#ff6600',borderColor: '#ff6600' }} to="/login" className="btn   m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink style={{color:'#ff6600',borderColor: '#ff6600' }} to="/register" className="btn   m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        <NavLink style={{color:'#ff6600',borderColor: '#ff6600' }} to="/cart" className="btn   m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar