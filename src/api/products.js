import axios from 'axios';
import API_GET_PRODUCTS from '../config/prod.json';
export const getProducts = async function() {
    return await axios.get(API_GET_PRODUCTS.API_GET_PRODUCTS);
};

