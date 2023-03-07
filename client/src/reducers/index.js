import { combineReducers } from 'redux';
import {offerListReducer} from './offerListReducer';
import { airportListReducer } from './airportListReducer';
import {loaderReducer} from './loaderReducer';

export default combineReducers({
    offers: offerListReducer,
    airports: airportListReducer,
    loader: loaderReducer
});