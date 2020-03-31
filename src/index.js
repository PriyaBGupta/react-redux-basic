import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux';
// import reducer from './store/reducer';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import {Provider} from 'react-redux';
const rootReducer = combineReducers({
    ctr:counterReducer,
    res:resultReducer
});
//const store = createStore(reducer);
//the below store is created using two splitted reduce file
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
