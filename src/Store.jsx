import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { dashboardReducer } from './redux/reducer/DashboardReducerapi';
import { composeWithDevTools } from 'redux-devtools-extension';
const reducer = combineReducers({
    pricingrules: dashboardReducer
});

const initialState = {};
const middleWare = [thunk];
const Store = createStore(reducer, initialState,  composeWithDevTools(
    applyMiddleware(...middleWare)
    // other store enhancers if any
  ));

export default Store;