import * as actionTypes from '../action/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    results:[]
}
const reducer = (state = initialState,action) =>{
    console.log('state',state); 
    switch (action.type){
        case actionTypes.STORE_RESULT:
            return updateObject(state,{results : state.results.concat([{value:action.result,id:new Date()}])})
        case actionTypes.DELETE_RESULT:
            const updatedResults = state.results.filter(result=>result.id!==action.resultElId);
            return updateObject(state, {results:updatedResults})
    }
    return state;
}
export default reducer;