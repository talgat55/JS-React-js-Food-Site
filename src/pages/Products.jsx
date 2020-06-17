import React,{useState, useEffect} from 'react';
import {getProducts} from "../api/products";
import Item from "../components/Item/Item";
import styled  from 'styled-components';
const Products = () => {
    const [data, setData] = useState([]);


    useEffect(()=>{
        getProducts().then( res =>  setData(res.data));

    },[]);


    return (
        <ProductComponent>
            <div className="container">
                <ul>
                    {data.map((item, index) => (
                        <Item
                            key={index}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </ul>
            </div>
        </ProductComponent>
    )
};
const ProductComponent = styled.section`
    margin-top: 50px;
    .container{
        width: 1140px;
        margin: 0 auto;
    }
    ul{
        margin: 0;
        padding: 0;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        li{
            list-style: none;
            width: 33.333%;
            padding: 0 10px 10px 10px;
        }
    }
       
    
`;
export default Products;