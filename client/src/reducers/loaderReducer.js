import ActionTypes from '../actions/ActionTypes';

const initialState = {
    loadingCount : 0
}

export function loaderReducer(state = initialState, action = {}) {

    switch (action.type) {
        case ActionTypes.SHOW_LOADER:
            return {...state,  loadingCount: state.loadingCount + 1};
        case ActionTypes.HIDE_LOADER:
            return {...state,  loadingCount: state.loadingCount - 1};
        default:
            return state;
    }
};
