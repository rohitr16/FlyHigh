import axios from 'axios';
import ActionTypes from './ActionTypes'


export const getPriceOffers = ({urlParams, queryParams}, navigate) => async dispatch => {

    const url = `/api/promotions/priceoffers/flights/ond/${urlParams.origin}/${urlParams.destination}`
    try {
        dispatch({type: ActionTypes.SHOW_LOADER});

        const res = await axios.get(url, {params: queryParams});
        
        dispatch({ type: ActionTypes.GET_OFFERS_LIST, payload: res.data });
        dispatch({type: ActionTypes.HIDE_LOADER});
    } catch (error) {
        navigate('/error');
    }    
};

export const getAirports = (navigate) => async dispatch => {

    try {
        dispatch({type: ActionTypes.SHOW_LOADER});

        const res = await axios.get('/api/airports');
        const airportCodeToCityMap = {};

        res.data.forEach(element => {
            airportCodeToCityMap[element.code] = element.city;
        });
        dispatch({ type: ActionTypes.GET_AIRPOTS_LIST, payload: res.data });
        dispatch({ type: ActionTypes.SET_CITY_CODE_MAP, payload: airportCodeToCityMap});
        dispatch({type: ActionTypes.HIDE_LOADER});
    } catch (error) {
        navigate('/error');
    }

};




