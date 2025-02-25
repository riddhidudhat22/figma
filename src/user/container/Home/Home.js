import { GitCompare, Heart, Share2 } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from "../../component/Button/Button";

function Home() {
    return (
        <div>
            <div className="hero-container">
                <img src="/img/scandinavian-interior-mockup-wall-decal-background 1.png" alt="" className="hero-image" />
                <div className="hero-content">
                    <h5>New Arrival</h5>
                    <h1>Discover Our New Collection</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                    <button className="hero-button">BUY NOW</button>
                </div>
            </div>

            <section>
                <div className="browse-range">
                    <h2 className="title">Browse The Range</h2>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="category-grid row">

                        <div className="category-item  col-md-6 col-lg-auto">
                            <img src="/img/image 100.png" alt="" className="category-image" />
                            <p className="category-name">Dining</p>
                        </div>


                        <div className="category-item col-md-6 col-lg-auto">
                            <img src="/img/image 101.png" alt="" className="category-image" />
                            <p className="category-name">Living</p>
                        </div>


                        <div className="category-item  col-md-6 col-lg-auto">
                            <img src="/img/image 106.png" alt="" className="category-image" />
                            <p className="category-name">Bedroom</p>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="products-section">
                    <h2 className="section-title">Our Products</h2>
                    <div className="row product-list">

                        <div className="prductinfo col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="product-card">
                                <div className="product-image">
                                    <img src="/img/image 1.png" alt="" />
                                    <span className="discount-badge">
                                        <p>-30%</p>

                                    </span>

                                    <div className="overlay">
                                        <button className="cart-btn">Add to cart</button>
                                        <div className="overlay-links">
                                            <span><Share2 /> Share</span>
                                            <span><Heart /> Like</span>
                                            <span><GitCompare /> Compare</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3>Sytherine</h3>
                                    <p>Stylish cafe chair</p>
                                    <p className="price">
                                        Rp 2.500.000 <span className="old-price">Rp 3.500.000</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="prductinfo col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="product-card">
                                <div className="product-image">
                                    <img src="/img/image 1.png" alt="" />


                                    <div className="overlay">
                                        <button className="cart-btn">Add to cart</button>
                                        <div className="overlay-links">
                                            <span><Share2 /> Share</span>
                                            <span><Heart /> Like</span>
                                            <span><GitCompare /> Compare</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3>Leviosa</h3>
                                    <p>Stylish cafe chair</p>
                                    <p className="price">
                                        Rp 2.500.000
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="prductinfo col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="product-card">
                                <div className="product-image">
                                    <img src="/img/image 1.png" alt="" />
                                    <span className="discount-badge"><p>-30%</p></span>


                                    <div className="overlay">
                                        <button className="cart-btn">Add to cart</button>
                                        <div className="overlay-links">
                                            <span><Share2 /> Share</span>
                                            <span><Heart /> Like</span>
                                            <span><GitCompare /> Compare</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3>Lolito</h3>
                                    <p>Stylish cafe chair</p>
                                    <p className="price">
                                        Rp 2.500.000 <span className="old-price">Rp 3.500.000</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="prductinfo col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="product-card">
                                <div className="product-image">
                                    <img src="/img/image 1.png" alt="" />
                                    <span className="new-badge"><p>New</p></span>


                                    <div className="overlay">
                                        <button className="cart-btn">Add to cart</button>
                                        <div className="overlay-links">
                                            <span><Share2 /> Share</span>
                                            <span><Heart /> Like</span>
                                            <span><GitCompare /> Compare</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3>Respira</h3>
                                    <p>Stylish cafe chair</p>
                                    <p className="price">
                                        Rp 2.500.000
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="prductinfo col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="product-card">
                                <div className="product-image">
                                    <img src="/img/image 1.png" alt="" />


                                    <div className="overlay">
                                        <button className="cart-btn">Add to cart</button>
                                        <div className="overlay-links">
                                            <span><Share2 /> Share</span>
                                            <span><Heart /> Like</span>
                                            <span><GitCompare /> Compare</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3>Grifo</h3>
                                    <p>SNight lamp</p>
                                    <p className="price">
                                        Rp 2.500.000
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="prductinfo col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="product-card">
                                <div className="product-image">
                                    <img src="/img/image 1.png" alt="" />
                                    <span className="new-badge"><p>New</p></span>


                                    <div className="overlay">
                                        <button className="cart-btn">Add to cart</button>
                                        <div className="overlay-links">
                                            <span><Share2 /> Share</span>
                                            <span><Heart /> Like</span>
                                            <span><GitCompare /> Compare</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3>Muggo</h3>
                                    <p>Stylish cafe chair</p>
                                    <p className="price">
                                        Rp 2.500.000
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="prductinfo col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="product-card">
                                <div className="product-image">
                                    <img src="/img/image 1.png" alt="" />
                                    <span className="discount-badge"><p>-30%</p></span>


                                    <div className="overlay">
                                        <button className="cart-btn">Add to cart</button>
                                        <div className="overlay-links">
                                            <span><Share2 /> Share</span>
                                            <span><Heart /> Like</span>
                                            <span><GitCompare /> Compare</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3>Pingky</h3>
                                    <p>Stylish cafe chair</p>
                                    <p className="price">
                                        Rp 7.000.000  <span className="old-price">Rp 3.500.000</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="prductinfo col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="product-card">
                                <div className="product-image">
                                    <img src="/img/image 1.png" alt="" />
                                    <span className="new-badge"><p>New</p></span>

                                    <div className="overlay">
                                        <button className="cart-btn">Add to cart</button>
                                        <div className="overlay-links">
                                            <span><Share2 /> Share</span>
                                            <span><Heart /> Like</span>
                                            <span><GitCompare /> Compare</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3>Potty</h3>
                                    <p>Stylish cafe chair</p>
                                    <p className="price">
                                        Rp 2.500.000
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <Button/>
                </div>
            </section>

            <section>
                <div className="section-new">
                    <div className="container">
                        <div className="row dataroom align-items-center">

                            <div className="col-lg-4 col-md-6">
                                <div className="title-data">
                                    <h3>50+ Beautiful rooms inspiration</h3>
                                    <p>
                                        Our designer already made a lot of beautiful prototypes of
                                        rooms that inspire you.
                                    </p>
                                    <button className="explore-btn">Explore More</button>
                                </div>
                            </div>


                            <div className="innerimg col-lg-4 col-md-6">
                                <div className="image-container">
                                    <img src="/img/image 101.png" alt="" className="image" />
                                    <div className="text-overlay">
                                        <p className="bed-room">01 — Bed Room</p>
                                        <h5>Inner Peace</h5>
                                    </div>

                                </div>
                            </div>


                            <div className="sliderimg  col-lg-4 col-md-6">
                    
                                    <Swiper
                                        navigation={true} 
                                        pagination={{ clickable: true }}
                                        mousewheel={true}
                                        keyboard={true}
                                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <img src="/img/image 101.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/img/image 106.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/img/image 100.png" alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Home;