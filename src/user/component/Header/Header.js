import React from "react";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

function Header() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <span className="logo-icon">⚡</span>
                    <span className="logo-text">Furniro</span>
                </div>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="nav-icons">
                    <FaUser className="icon" />
                    <FaSearch className="icon" />
                    <FaHeart className="icon" />
                    <FaShoppingCart className="icon" />
                </div>
            </nav>
        </>
    )
}
export default Header;