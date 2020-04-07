import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
// import reducer from './store/reducer';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import {Provider} from 'react-redux';
const rootReducer = combineReducers({
    ctr:counterReducer,
    res:resultReducer
});
//we create logger function which acts like middleware
const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching actions', action);
            const result = next(action);
            console.log('[Middleware] next state',store.getState())
            return result;
        }
    }
}
//for addidtion of redux extension dev tools and if not present then native compose from redux will be used
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducer);
//the below store is created using two splitted reduce file
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
