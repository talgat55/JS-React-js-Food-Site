import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import LogoImg from '../../static/logo.jpg';
import basketImg from '../../static/bug.svg';
import styled  from 'styled-components';
const Header = (props) => {
    return (
        <HeaderComponent>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Link to="/">
                            <img src={LogoImg} alt="Логотип"/>
                        </Link>
                    </div>
                    <div className="col-lg-4">

                    </div>
                    <div className="col-lg-4   d-flex justify-content-end  align-items-center">
                        <Link  className="basket" to="/basket/">
                            <img className="cart-icon" src={basketImg} alt="Иконка"/>
                            <span className="count">{props.cartCount}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </HeaderComponent>
    )
};
const HeaderComponent = styled.header`

    .basket{
        position: relative;
        .cart-icon{
            width: 30px;
        }
        .count{
            position: absolute;
            top: 0;
            right: -8px;
            background: #289eba;
            color: #fff;
            padding: 2px 5px;
            font-size: 12px;
            line-height: 1;
            border-radius: 50%;
        }
        
    }
`;

const mapStateToProps =  state => {
    return {
        cartCount: state.cartReducer.count
    }
};
export default connect(
    mapStateToProps
    ,
    null
)(Header);
