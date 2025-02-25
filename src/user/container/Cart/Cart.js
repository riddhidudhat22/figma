import React from "react";
import Shippingdetail from "../../component/Shippingdetail/Shippingdetail";


const Cart = () => {
    return (
        <>
            <section>
                <div className="cart-container">

                    <div className="cart-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="product-infocart">
                                        <img src="/img/Asgaard sofa 3.png" alt="Sofa" className="product-imgcart" />
                                        <span>Asgaard sofa</span>
                                    </td>
                                    <td>Rs. 250,000.00</td>
                                    <td>
                                        <div className="quantity-selectorcart">
                                            <button>-</button>
                                            <input type="text" value="1" readOnly />
                                            <button>+</button>
                                        </div>
                                    </td>
                                    <td>Rs. 250,000.00</td>
                                    <td>
                                        <img src="/img/Vector (4).png" alt="Delete" className="delete-icon" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className="cart-totals">
                        <h2>Cart Totals</h2>
                        <div className="totals">
                            <p><span>Subtotal</span> Rs. 250,000.00</p>
                            <p><span>Total</span> <strong>Rs. 250,000.00</strong></p>
                        </div>
                        <button className="checkout-btn">Check Out</button>
                    </div>
                </div>
            </section>

            <section><br /><br />
                <Shippingdetail />
            </section>
        </>
    );
};

export default Cart;
