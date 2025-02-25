import React from "react";
import Backimg from "../../component/Backimg/Backimg";
import { NavLink } from "react-router-dom";
import Shippingdetail from "../../component/Shippingdetail/Shippingdetail";



function Contact() {
    return (
        <>
       <div className="shop-banner">
                <Backimg />
                <div className="banner-content">
                    <div className="bannerimg">
                        <img src="/img/Meubel House_Logos-05.png" />
                    </div>
                    <h1>Contact</h1>
                    <nav>
                        <NavLink to="/" className="breadcrumb-link">Home</NavLink>
                        <span> &gt; </span>
                        <span className="current-page">Contact</span>
                    </nav>
                </div>
            </div>

            <div className="contact-container ">
                <h2>Get In Touch With Us</h2>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                <div className="contact-content row">
                    <div className="contact-info col-lg-auto col-md-12">
                        <div className="info-item">
                            <div className="icon">
                                <img src="/img/Vector (8).png" />
                            </div>
                            <div className="dettailinfo">
                                <h4>Address</h4>
                                <p>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon">
                                <img src="/img/Vector (5).png" />
                            </div>
                            <div className="dettailinfo">
                                <h4>Phone</h4>
                                <p>Mobile: (+68) 546-6789</p>
                                <p>Hotline: (+68) 456-6789</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon">
                                <img src="/img/bi_clock-fill.png" />
                            </div>
                            <div className="dettailinfo">
                                <h4>Working Time</h4>
                                <p>Monday-Friday: 5:00 - 22:00</p>
                                <p>Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form col-lg-auto col-md-12">
                        <form>
                            <div className="form-group">
                                <label>Your name</label>
                                <input type="text" placeholder="Abc" />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" placeholder="Abc@gmail.com" />
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="This is an optional" />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="Hi! I'd like to ask about"></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Shippingdetail/>
        </>
    )
}

export default Contact