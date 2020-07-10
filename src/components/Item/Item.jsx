import React from 'react';
import NoImage from '../../static/noimage.png';
import basketImg from '../../static/bug.svg';
import styled  from 'styled-components';
const Item = ({name, price, id,addToCart}) => {

    return (
        <ItemComponent className="product-item">
            <div className="product-item__wrapper">
                <div className="product-item__image">
                    <img
                        src={NoImage}
                        alt="Product item"
                    />
                </div>
                <div  className="product-item__content">
                    <h3 className="product-item__title">
                        {name}
                    </h3>
                    <div className="product-item__bottom-content">
                        <div className="product-item__price">
                            $ {price}
                        </div>
                        <a
                            href="#"
                            className="add-to-cart"
                            onClick={ (e)=> addToCart(e,id)}

                        >
                            <img
                                src={basketImg}
                                alt="Icon"
                                />
                        </a>
                    </div>
                </div>
            </div>
        </ItemComponent>
    )
};
const ItemComponent = styled.li`
    .product-item__wrapper{
        box-shadow: 0px 6px 35px rgba(155, 166, 178, 0.25);
        margin: 0 10px 40px 10px;
        border-radius: 15px;
        overflow: hidden;
        .product-item__image{
            img{
                max-width: 100%;
            }
        }
        .product-item__content{
            padding: 15px;
            .product-item__bottom-content{
                margin-top: 15px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .add-to-cart img  {
                    width: 25px;
                    height: 25px;
                }
            }
            .product-item__title{
                font-size: 20px;
                line-height: 24px;
            }
        }
    }
`;


export default Item;