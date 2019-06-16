// QUIENES ACTUALIZARAN LOS ESTADOS EN STORE DEPENDIENDO DE LAS ACCIONES
import { combineReducers } from 'redux';

const storedLoginAccountInfoReducer =(loginAccountInfo=null, action)=> {
    if (action.type === 'STORED_LOGIN_ACCOUNT_INFO'){
        return action.payload;
    }
    
    if (action.type === 'CLOSED_SESSION_ACCOUNT'){
        return action.payload;
    }
    return  loginAccountInfo;
};
const storedProductInfoReducer =(productInfo=null, action)=> {
    if (action.type === 'STORED_PRODUCT_INFO'){
        return action.payload;
    }

const productShoppingCartReducer =(listOfProducts = [], action)=>{
    if (action.type === 'ADD_PRODUCT_TO_CART'){
        return [...listOfProducts, action.payload.product];
    } else if (action.type === 'REMOVE_PRODUCT_FROM_CART'){
        return listOfProducts.filter(product => product.id !== action.payload.product.id);
    }
    return listOfProducts;
};
    if (action.type === 'CLOSED_PRODUCT'){
        return action.payload;
    }
    return  productInfo;
};

//hacemos uso de la funcion combine Reducers
export default combineReducers({
    loginAccountInfo: storedLoginAccountInfoReducer,
    productsShoppingCart: productShoppingCartReducer
    loginAccountInfo: storedLoginAccountInfoReducer,
    productInfo: storedProductInfoReducer
});