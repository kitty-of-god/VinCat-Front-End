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
    if (action.type === 'CLOSED_PRODUCT'){
        return action.payload;
    }
    return  productInfo;
};
const storedUserInfoReducer =(userInfo=null, action)=> {
    if (action.type === 'STORED_USER_INFO'){
        return action.payload;
    }
    if (action.type === 'CLOSED_USER'){
        return action.payload;
    }
    return  userInfo;
};
const productShoppingCartReducer =(listOfProducts = [], action)=>{
    if (action.type === 'ADD_PRODUCT_TO_CART'){
        return [...listOfProducts, action.payload];
    } else if (action.type === 'REMOVE_PRODUCT_FROM_CART'){
        return listOfProducts.filter(product => product.id !== action.payload.id);
    }
    return listOfProducts;
};

const fileUploadedToSendReducer =(file=null, action)=>{
    if(action.type === 'UPLOAD_FILE_TO_SEND'){
        return action.payload;
    }
    return file;
};


//hacemos uso de la funcion combine Reducers
export default combineReducers({
    loginAccountInfo: storedLoginAccountInfoReducer,
    productsShoppingCart: productShoppingCartReducer,
    productInfo: storedProductInfoReducer,
    fileToSend: fileUploadedToSendReducer,
    userInfo: storedUserInfoReducer
});