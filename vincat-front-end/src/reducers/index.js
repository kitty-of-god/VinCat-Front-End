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

//hacemos uso de la funcion combine Reducers
export default combineReducers({
    loginAccountInfo: storedLoginAccountInfoReducer,
    productInfo: storedProductInfoReducer
});