
import React from "react";
import Backimg from "../../component/Backimg/Backimg";
import { NavLink } from "react-router-dom";
import Shippingdetail from "../../component/Shippingdetail/Shippingdetail";

function Comparison() {
    return (
        <>
            <div className="shop-banner">
                <Backimg />
                <div className="banner-content">
                    <div className="bannerimg">
                        <img src="/img/Meubel House_Logos-05.png" />
                    </div>
                    <h1>Product Comparison</h1>
                    <nav>
                        <NavLink to="/" className="breadcrumb-link">Home</NavLink>
                        <span> &gt; </span>
                        <span className="current-page">Comparison</span>
                    </nav>
                </div>
            </div>

            <section>
                <div className="container">
                <div className="product-container1 row">
                    <div className="product-left col-lg-auto col-sm-12">
                        <h3>Go to Product page for more Products</h3>
                        <a href="#" className="view-more1">View More</a>
                    </div>


                    <div className="product-list1 col-lg-auto col-sm-12">
                        <div className="produ-deta">
                            <div className="product-card1">
                                <img src="/img/Asgaard sofa 3.png" alt="Asgaard Sofa" />
                            </div>
                            <div className="pro-desp">
                                <h3>Asgaard Sofa</h3>
                                <p className="price1">Rs. 250,000.00</p>
                                <div className="rating">
                                    4.7 <img src="/img/Vector (1).png" />
                                    <img src="/img/Vector (1).png" />
                                    <img src="/img/Vector (1).png" />
                                    <img src="/img/Vector (1).png" />
                                    <img src="/img/Line 5.png" />
                                    <span className="review">204 Reviews</span>
                                </div>
                            </div>
                        </div>
                        <div className="produ-deta">
                            <div className="product-card1">
                                <img src="/img/Mask group.png" alt="Asgaard Sofa" />
                            </div>
                            <div className="pro-desp">
                                <h3>Outdoor Sofa Set</h3>
                                <p className="price1">Rs. 250,000.00</p>
                                <div className="rating">
                                    4.7 <img src="/img/Vector (1).png" />
                                    <img src="/img/Vector (1).png" />
                                    <img src="/img/Vector (1).png" />
                                    <img src="/img/Vector (1).png" />
                                    <img src="/img/Line 5.png" />
                                    <span className="review">204 Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="product-right col-lg-auto col-sm-12">
                        <h3>Add A Product</h3>
                        <select className="prodrightselect">
                            <option>Choose a Product</option>
                            <option>Asgaard Sofa</option>
                            <option>Outdoor Sofa Set</option>
                        </select>
                    </div>
                </div>
                </div>
            </section>



            <Shippingdetail />
        </>
    )
}

export default Comparison;