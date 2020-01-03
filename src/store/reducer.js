import * as actionTypes from './action'
const initialState = {
    counter:0,
    results:[]
}
const reducer = (state = initialState,action) =>{
    console.log('state',state); 
    switch (action.type){
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter : state.counter + 1
            }
        case actionTypes.DECREMENT:
            return{
                ...state,
                counter : state.counter - 1
            }
        case actionTypes.ADD:
            return{
                ...state,
                counter : state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return{
                ...state,
                counter : state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results : state.results.concat([{value:state.counter,id:new Date()}])
            }      
        case actionTypes.DELETE_RESULT:
            const updatedResults = state.results.filter(result=>result.id!==action.resultElId);
            console.log('updatedResults',updatedResults);
            return{
                ...state,
                results:updatedResults
            }
    }
    return state;
}
export default reducer;