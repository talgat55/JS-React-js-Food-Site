import React,{ useEffect} from 'react';
import {connect} from "react-redux";
import styled  from 'styled-components';
import Item from "../components/Item/Item";
import {addToCartAction, requestGetProducts} from "../redux/actions";
const Products = ({addToCartAction,requestGetProducts,products}) => {



    useEffect(()=>{
        requestGetProducts();
    },[requestGetProducts]);

    /*
    *  Add to cart
    */
    const addToCart = (e,id) =>{
        e.preventDefault();
        addToCartAction(id);

    };

    return (
        <ProductComponent>
            <div className="container">
                <ul>
                    { products && products.map((item, index) => (
                        <Item
                            key={index}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            addToCart={addToCart}
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
const mapStateToProps = state =>{
    return {
        products: state.products
    }
};
const mapDispatchToProps = {
    addToCartAction,
    requestGetProducts
};
export default connect(
    mapStateToProps
    ,
    mapDispatchToProps
)(Products);