import { GitCompare, Heart, Share2 } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Shippingdetail from "../../component/Shippingdetail/Shippingdetail";
import Backimg from "../../component/Backimg/Backimg";

function Shop() {
    return (
        <>
           <div className="shop-banner">
            <div className="overlay1"></div>

            {/* Content */}
            <div className="banner-content">
                <h1>Shop</h1>
                <nav>
                    <NavLink to="/" className="breadcrumb-link">Home</NavLink>
                    <span> &gt; </span>
                    <span className="current-page">Shop</span>
                </nav>
            </div>
        </div>
            <section>
                <div className="filter-bar row">
                    <div className="filter-options col-lg-auto col-md-12 col-sm-12">
                        <button className="filter-btn">
                            <img src="/img/system-uicons_filtering.png" className="icon" />Filter
                        </button>
                        <img src="/img/Vector.png" className="grid-icon" />
                        <img src="/img/bi_view-list.png" />
                        <img src="/img/Line 5.png" />
                        <span className="results-text">Showing 1–16 of 32 results</span>
                    </div>

                 
                    <div className="sort-options col-lg-auto col-md-12 col-sm">
                        <label className="label">Show</label>
                        <select className="dropdown">
                            <option value="16">16</option>
                            <option value="32">32</option>
                            <option value="48">48</option>
                        </select>

                        <label className="label">Short by</label>
                        <select className="dropdown">
                            <option value="default">Default</option>
                            <option value="popularity">Popularity</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>
            </section>
            
            
            <section>
                <div className="products-section">
                    <div className="row product-list">
                        <div className="prductinfo col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="product-card">
                                 <Link to="/sofa"><div className="product-image">
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
                                </div></Link>

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
                        <div className="next-page">
                            <div className="pagecount1">1</div>
                            <div className="pagecount">2</div>
                            <div className="pagecount">3</div>
                            <div className="pagecountnext">Next</div>
                        </div>
                    </div>

                </div>
            </section>

          <Shippingdetail />
        </>
    )
}
export default Shop;