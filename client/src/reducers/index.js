import { combineReducers } from 'redux';
import {offerListReducer} from './offerListReducer';
import { airportListReducer } from './airportListReducer';

export default combineReducers({
    offers: offerListReducer,
    airports: airportListReducer
});