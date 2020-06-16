import React from 'react';
import NoImage from '../../static/noimage.png';

const Item = ({name, price}) => {

    return (
        <li className="product-item">
            <div className="product-item__image">
                <img
                    src={NoImage}
                    alt="Product item"
                />
            </div>
            <h3 className="product-item__title">
                {name}
            </h3>
            <div className="product-item__price">
                {price}
            </div>
        </li>
    )
};

export default Item;