import { GitCompare, Heart, Share2 } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../../component/Button/Button";

const Sofa = () => {
    return (
        <>
            <section>
                <div className="addproduct-container">
                    <nav className="addproducy">
                        <NavLink href="/" className="addproduct-link">Home</NavLink>
                        <span className="addproduct-separator">&gt;</span>
                        <NavLink href="/shop" className="addproduct-link">Shop</NavLink>
                        <span className="addproduct-separator">&gt;</span>
                        <span className="addproduct-current">Asgaard sofa</span>
                    </nav>
                </div>
            </section>
            <section>
                <div className="sofa-wrapper  ">
                    <div className="row product-container">

                        <div className="product-gallery col-lg-2 col-md-12 ">
                            <div className="sofaimg-list">
                                <img src="/img/Asgaard sofa 3.png" alt="" className="sofaimg" />
                                <img src="/img/Mask group.png" alt="" className="sofaimg" />
                                <img src="/img/Asgaard sofa 3.png" alt="" className="sofaimg" />
                                <img src="/img/Mask group.png" alt="" className="sofaimg" />
                            </div>
                        </div>


                        <div className="main-image col-lg-5 col-md-12 ">
                            <img src="/img/Asgaard sofa 3.png" alt="" />
                        </div>


                        <div className="product-info col-lg-5 col-md-12">
                            <h1 className="product-title">Asgaard Sofa</h1>
                            <p className="price">Rs. 250,000.00</p>
                            <div className="rating">
                                <img src="/img/Vector (1).png" alt="" />
                                <img src="/img/Vector (1).png" alt="" />
                                <img src="/img/Vector (1).png" alt=" " />
                                <img src="/img/Vector (1).png" alt="" />
                                <img src="/img/Vector (1).png" alt="" />
                                <b><img src="/img/Line 5.png" alt="" className="lineheight" /></b>
                                <span>5 Customer Review</span>
                            </div>
                            <p className="description1">
                            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted .
                            </p>

                            <div className="size-options">
                                <span>Size:</span><br />
                                <div className="sizeof">
                                    <div className="size-btn1"><a>L</a></div>
                                    <div className="size-btn"> <a>XL</a></div>
                                    <div className="size-btn"><a>XS</a></div>
                                </div>
                            </div>
                            <br />

                            <div className="color-options">
                                <span>Color:</span><br />
                                <div className="sizeofcolor">
                                    <div className="color black"></div>
                                    <div className="color purple"></div>
                                    <div className="color gold"></div>
                                </div>
                            </div>

                            <div className="buttons row">
                                <div className="quantity-selector col-lg-4 col-sm-12  ">
                                    <button>-</button>
                                    <span><b>1</b></span>
                                    <button>+</button>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 ">
                                    <NavLink to="/cart" className="add-to-cart"><span>Add To Cart</span></NavLink >
                                </div>
                                <div className="col-lg-4 col-sm-12  ">
                                    <NavLink className="compare"><span>+ Compare</span></NavLink>
                                </div>
                            </div>
                            <hr className="hr1" />

                            <div className="info-categoty">
                                <p><span>SKU</span> : SS001</p>
                                <p><span>Category</span>: Sofas</p>
                                <p><span>Tags</span>: Sofa, Chair, Home, Shop</p>
                            </div>

                            <div className="social-share">
                                <span>Share:</span>
                                <div className="socialicon"><img src="/img/akar-icons_facebook-fill.png" alt="" />
                                    <img src="/img/Vector (2).png" alt="" />
                                    <img src="/img/Vector (3).png" alt="" /></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <hr></hr>
            <section>
                <div className="container-data">
                    <div className="row">
                        <div className="reviewdess col-lg-12">
                            <span className="active">Description</span>
                            <span>Additional Information</span>
                            <span>Reviews [5]</span>
                        </div>

                        <div className="description col-lg-12">
                            <p>
                                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo
                                speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes
                                the show on the road.
                            </p>
                            <p>
                                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled
                                engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a
                                compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and
                                extended highs for a sound that is both articulate and pronounced.
                            </p>
                        </div>

                        <div className="image-container1 row">
                            <div className="image-box col-lg-6 col-md-6 col-sm-12">
                                <img src="/img/Mask group (1).png" alt="" />
                            </div>
                            <div className="image-box col-lg-6 col-md-6 col-sm-12">
                                <img src="/img/Mask group (1).png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>

                <div className="products-section">
                    <h2>Related Products</h2>
                    <div className="row product-list">
                        <div className="prductinfo col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="product-card">
                                <div className="product-image">
                                    <img src="/img/image 1.png" alt="Sytherine" />
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
                                    <img src="/img/image 1.png" alt="Sytherine" />
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
                                    <img src="/img/image 1.png" alt="Sytherine" />
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
                                    <img src="/img/image 1.png" alt="Sytherine" />
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
                    </div>
                    <Button />
                </div>

            </section>
        </>

    );
};

export default Sofa;
