import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    }
}
export const storeResult = (result) => {
    //there is also one more parameter beside dispatch which is getState to get the state of store but then dont use it too much
    // instead u can pass the state to this function and then use it
    return (dispatch, getState) => {
        // here you can use promise and get the data and once the data is thre then use dispatch to update the store
        setTimeout(()=>{
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
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