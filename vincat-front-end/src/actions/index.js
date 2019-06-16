// ACTION CREATORS : Return actions


// Enviar datos de Loggin al store
export const storeLoginAccountInfo = (loginAccountInfo) =>{
    return {
        type: 'STORED_LOGIN_ACCOUNT_INFO',
        payload: {
            key: loginAccountInfo.key,
            accountInfo: loginAccountInfo.accountInfo,
            id: loginAccountInfo.id
        }
    };
};
export const storeProductInfo = (productInfo) =>{
    return {
        type: 'STORED_PRODUCT_INFO',
        payload: {
            id: productInfo.id
        }
    };
};
export const logOut = () =>{
    return {
        type: 'CLOSED_SESSION_ACCOUNT',
        payload: null
    };
};