import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers.js';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [thunk];
const store = createStore(
   reducer,
     composeWithDevTools(applyMiddleware(...middleware))
);

export default store;


// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { getProductReducer, getProductDetailsReducer,cartReducer } from './reducers.js';
// const reducer = combineReducers({
//     getProducts: getProductReducer,
//     getProductDetails: getProductDetailsReducer,
//     cart:cartReducer
// })

// const middleware = [thunk];

// const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;