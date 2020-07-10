import React from 'react';
import Header from '../components/Header/Header';
import Products from "./Products";
import Cart from "../components/Cart/Cart";
const Index = () => {

    return (
        <>
            <Header/>
            <Products/>
            <Cart/>
        </>
    )
};

export default Index;