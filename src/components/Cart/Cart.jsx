import React from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";

const Cart = (props) => {

    const {
        items: cartItems,
        total
    } =  props;

    return (
        <CartComponent>
            <h3>Cart</h3>
            <div className="cart__items">
                <div className="cart__heading-items">
                    <div>Name</div>
                    <div>Price</div>
                </div>
                { cartItems && (
                    cartItems.map( (item, index) => (
                        <div key={index} className="cart__item">
                            <div className="cart__title-items">
                                {item.name}
                            </div>
                            <div className="cart__price-items">
                                {
                                    item.price
                                }
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="cart__total-items">
                <div>Total:</div>
                <div>{total}</div>
            </div>
        </CartComponent>
    )
};
const CartComponent = styled.div`
    width:  300px;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    transition: all .3s;
    background: #fff;
    padding: 20px;
    box-shadow: -1px 2px 1px 2px #eee;
  
    h3{
        text-align: center;
    }
    .cart__items{
        margin-top: 40px;
        .cart__heading-items{
            display: flex;
            > div {
                width: 50%;
            }
        }

        .cart__item{
            display: flex;
            > div {
                width: 50%;
            }
        }
    }
    .cart__total-items{
        display: flex;
        > div {
            width: 50%;
        }
    }
    
    
`;
const mapStateToProps = state => {
    return {
        items: state.cartReducer.data,
        total: state.cartReducer.total,
    }
};
export default connect(
    mapStateToProps
    ,
    null
)(Cart);