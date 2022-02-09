import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import shoeReducer from './reducers/shoeReducer';
const rootReducer = combineReducers({
    shoes: shoeReducer
});

export default createStore(rootReducer, applyMiddleware(ReduxThunk))