import React from "react";
import Header from "../user/component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../user/container/Home/Home";

function Userroute() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}/>
            </Routes>
        </>
    );
}


export default Userroute;
