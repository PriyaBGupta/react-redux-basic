import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    }
}
export const storeResult = (result) => {
    return dispatch => {
        // here you can use promise and get the data and once the data is thre then use dispatch to update the store
        setTimeout(()=>{
            dispatch(saveResult(result));
        },2000);
    }
}
export const deleteResult = (resId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resId
    }
}