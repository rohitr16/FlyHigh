import ActionTypes from '../actions/ActionTypes';

const initialState = {
    airportList : [],
    airportCodeToCityMap: {}
}

export function airportListReducer(state = initialState, action = {}) {
    const payload = action.payload;
    switch (action.type) {
        case ActionTypes.GET_AIRPOTS_LIST:
            return {...state,  airportList:payload};
        case ActionTypes.SET_CITY_CODE_MAP:
            return {...state,  airportCodeToCityMap:payload};
        default:
            return state;
    }
};
