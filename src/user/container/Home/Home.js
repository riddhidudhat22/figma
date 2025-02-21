import { GitCompare, Heart, Share2 } from "lucide-react";
import React from "react";


function Home() {
    return (
        <div>
            <div className="hero-container">
                <img src="/img/scandinavian-interior-mockup-wall-decal-background 1.png" alt="Scandinavian Interior" className="hero-image" />
                <div className="hero-content">
                    <h5>New Arrival</h5>
                    <h1>Discover Our New Collection</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                    <button className="hero-button">BUY NOW</button>
                </div>
            </div>


            <div className="browse-range">
                <h2 className="title">Browse The Range</h2>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="category-grid">
                    {/* Dining Category */}
                    <div className="category-item">
                        <img src="/images/dining.jpg" alt="Dining" className="category-image" />
                        <p className="category-name">Dining</p>
                    </div>

                    {/* Living Category */}
                    <div className="category-item">
                        <img src="/images/living.jpg" alt="Living" className="category-image" />
                        <p className="category-name">Living</p>
                    </div>

                    {/* Bedroom Category */}
                    <div className="category-item">
                        <img src="/images/bedroom.jpg" alt="Bedroom" className="category-image" />
                        <p className="category-name">Bedroom</p>
                    </div>
                </div>
            </div>

            <section>
                <div className="container products-section">
                    <h2 className="section-title">Our Products</h2>
                    <div className="row">
                        {/* Product 1 */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="product-card">
                                <div className="product-image">
                                    <img src="/img/image1.png" alt="Sytherine" />
                                    <span className="discount-badge"><p>-30%</p></span>
                                    <div className="overlay">
                                        <button className="cart-btn">Add to cart</button>
                                        <div className="overlay-links">
                                            <span><Share2 size={16} /> Share</span>
                                            <span><Heart size={16} /> Like</span>
                                            <span><GitCompare size={16} /> Compare</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3>Sytherine</h3>
                                    <p>Stylish cafe chair</p>
                                    <p className="price">Rp 2.500.000 <span className="old-price">Rp 3.500.000</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="product-card">
                                <div className="product-image">
                                    <img src="/img/Images1.png" alt="Sytherine" />
                                    <span className="discount-badge"><p>-30%</p></span>
                                    <div className="overlay">
                                        <button className="cart-btn">Add to cart</button>
                                        <div className="overlay-links">
                                            <span><Share2 size={16} /> Share</span>
                                            <span><Heart size={16} /> Like</span>
                                            <span><GitCompare size={16} /> Compare</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3>Sytherine</h3>
                                    <p>Stylish cafe chair</p>
                                    <p className="price">Rp 2.500.000 <span className="old-price">Rp 3.500.000</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="product-card">
                                <div className="product-image">
                                    <img src="/img/Images2.png" alt="Sytherine" />
                                    <span className="discount-badge"><p>-30%</p></span>
                                    <div className="overlay">
                                        <button className="cart-btn">Add to cart</button>
                                        <div className="overlay-links">
                                            <span><Share2 size={16} /> Share</span>
                                            <span><Heart size={16} /> Like</span>
                                            <span><GitCompare size={16} /> Compare</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3>Sytherine</h3>
                                    <p>Stylish cafe chair</p>
                                    <p className="price">Rp 2.500.000 <span className="old-price">Rp 3.500.000</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="product-card">
                                <div className="product-image">
                                    <img src="/img/Images3.png" alt="Sytherine" />
                                    <span className="discount-badge"><p>-30%</p></span>
                                    <div className="overlay">
                                        <button className="cart-btn">Add to cart</button>
                                        <div className="overlay-links">
                                            <span><Share2 size={16} /> Share</span>
                                            <span><Heart size={16} /> Like</span>
                                            <span><GitCompare size={16} /> Compare</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3>Sytherine</h3>
                                    <p>Stylish cafe chair</p>
                                    <p className="price">Rp 2.500.000 <span className="old-price">Rp 3.500.000</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Show More Button */}
                    <button className="show-more-btn">Show More</button>
                </div>
            </section>


            <div className="section-new">
                <div className="row dataroom">
                    {/* Left Section */}
                    <div className="col-lg-3">
                        <div className="title">
                            <h3>50+ Beautiful rooms inspiration</h3>
                            <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                            <button className="explore-btn">Explore More</button>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="col-lg-3">
                        <div className="image-container">
                            <img src="/img/Rectangle 24.png" alt="Inner Peace" className="image" />
                            <div className="text-overlay">
                                <p className="bed-room">01 — Bed Room</p>
                                <p>Inner Peace</p>
                            </div>
                            <button className="arrow-btn">➜</button>
                        </div>
                    </div>

                    {/* Swiper Slider */}
                    <div className="col-lg-4">
                        <Swiper
                            navigation={true}
                            pagination={{ clickable: true }}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="/img/Rectangle 25.png" alt="Room 1" className="imageroom" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/img/Rectangle 25.png" alt="Room 2" className="imageroom" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;