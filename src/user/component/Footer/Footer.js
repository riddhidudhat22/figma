import React from "react";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer">
      
          <div className="footer-container row">
            {/* Left Section */}
            <div className="footer-left col-lg-3 col-md-4 col-sm-6">
              <h2 className="footer-title">Funiro.</h2>
              <p className="footer-address">
                400 University Drive Suite 200 Coral Gables, <br />
                FL 33134 USA
              </p>
            </div>

            {/* Middle Section - Links */}
            
              <div className="footer-column col-lg-3 col-md-4 col-sm-6">
                <h3>Links</h3>
                <ul>
                  <li>Home</li>
                  <li>Shop</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
              
    
            <div className="footer-column col-lg-3 col-md-4 col-sm-6">
                <h3>Help</h3>
                <ul>
                  <li>Payment Options</li>
                  <li>Returns</li>
                  <li>Privacy Policies</li>
                </ul>
              </div>
            {/* Right Section - Newsletter */}
            <div className="footer-newsletter col-lg-3 col-md-4 col-sm-6">
              <h3>Newsletter</h3>
              <div className="footer-subscribe">
                <input type="email" placeholder="Enter Your Email Address" />    <button >SUBSCRIBE</button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <p>2023 funiro. All rights reserved</p>
          </div>
        
        
      </footer>
    </>
  )
}
export default Footer;