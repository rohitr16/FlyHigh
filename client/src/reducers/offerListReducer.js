import ActionTypes from '../actions/ActionTypes';

const initialState =  {
    offersList: []
}

export function offerListReducer(state = initialState, action = {}) {
    const payload = action.payload;
    switch (action.type) {
        case ActionTypes.GET_OFFERS_LIST:
            return {...state,  offersList: payload};
        default:
            return state;
    }
};
