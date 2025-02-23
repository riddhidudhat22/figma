import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

function Header() {
    return (
        
        <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 px-5">
                <NavLink to="/" className="navbar-brand d-flex align-items-center">
                    <img className="logo-icon me-2" src="img/Meubel House_Logos-05.png" alt="Logo" style={{ height: "30px" }} />
                    <span className="fw-bold fs-4 text-dark">Furniro</span>
                </NavLink>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>

              
                <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse">
                    <ul className="navbar-nav mx-auto gap-4">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shop" className="nav-link">Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>


                    <div className="d-lg-none text-center mt-3">
                        <FaUser size={18} className="mx-2 text-dark" />
                        <FaSearch size={18} className="mx-2 text-dark" />
                        <FaHeart size={18} className="mx-2 text-dark" />
                        <FaShoppingCart size={18} className="mx-2 text-dark" />
                    </div>
                </div>

                <div className="d-none d-lg-flex align-items-center gap-4">
                    <FaUser size={18} className="text-dark" />
                    <FaSearch size={18} className="text-dark" />
                    <FaHeart size={18} className="text-dark" />
                    <FaShoppingCart size={18} className="text-dark" />
                </div>
            </nav>
        </div>
    );
}

export default Header;
