
import { GitCompare, Heart, Share2 } from "lucide-react";
import React from "react";
import { FaFilter, FaHeadset, FaShieldAlt, FaShippingFast, FaThLarge, FaTrophy } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Shippingdetail() {
    return (
        <>
            <section className="features-section">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-sm feature-item">
                            <img src="/img/trophy 1.png" className="feature-icon" alt="High Quality" />
                            <div>
                                <h3 className="servi-data">High Quality</h3>
                                <p className="Desc">crafted from top materials</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-sm feature-item">
                            <img src="/img/Group.png" className="feature-icon" alt="Warranty Protection" />
                            <div>
                                <h3 className="servi-data">Warranty Protection</h3>
                                <p className="Desc">Over 2 years</p>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-4 col-sm-6 col-sm feature-item">
                            <img src="/img/customer-support.png" className="feature-icon" alt="Free Shipping" />
                            <div>
                                <h3 className="servi-data">Free Shipping</h3>
                                <p className="Desc">Order over $150</p>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-4 col-sm-6 col-sm feature-item">
                            <img src="/img/shipping.png" className="feature-icon" alt="24/7 Support" />
                            <div>
                                <h3 className="servi-data">24 / 7 Support</h3>
                                <p className="Desc">Dedicated support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shippingdetail;