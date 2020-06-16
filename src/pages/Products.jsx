import React,{useState, useEffect} from 'react';
import {getProducts} from "../api/products";
import Item from "../components/Item/Item";

const Products = () => {
    const [data, setData] = useState([]);


    useEffect(()=>{
        getProducts().then( res =>  setData(res.data));

    },[]);


    return (
        <>
            <ul>
            {data.map((item, index) => (
                <Item
                    key={index}
                    name={item.name}
                    price={item.price}
                />
            ))}
            </ul>
        </>
    )
};

export default Products;