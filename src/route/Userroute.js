import React from "react";
import Header from "../user/component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../user/container/Home/Home";
import Footer from "../user/component/Footer/Footer"
import Shop from "../user/container/Shop/Shop";
// import Shopbanner from "../user/component/Shopbanner/Shopbanner";

function Userroute() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/shop" element={<Shop />}/>
            </Routes>
            <Footer/>
        </>
    );
}


export default Userroute;
