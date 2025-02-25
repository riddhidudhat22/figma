import React from "react";
import Header from "../user/component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../user/container/Home/Home";
import Footer from "../user/component/Footer/Footer"
import Shop from "../user/container/Shop/Shop";
import Sofa from "../user/container/Sofa/Sofa";
import Comparison from "../user/container/Comparison/Comparison";
import Cart from "../user/container/Cart/Cart";
import Contact from "../user/container/Contact/Contact";
// import Shopbanner from "../user/component/Shopbanner/Shopbanner";

function Userroute() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/shop" element={<Shop />}/>
                <Route exact path="/sofa" element={<Sofa />}/>
                <Route exact path='/comparison' element={<Comparison/>}/>
                <Route exact path='/cart' element={<Cart/>}/>
                  <Route exact path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer/>
        </>
    );
}


export default Userroute;
