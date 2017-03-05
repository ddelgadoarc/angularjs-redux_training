/*
- Sample stucture of Reducer Composition.
- Tips: Every function only addresses a single concern. */

import actionConstants from '../actionConstants';

const user = (state, action) => {

    switch (action.type) {

        case actionConstants.GET_USER_REQUEST:
            break;
        case actionConstants.GET_USER_SUCCESS:
                return action.data;
            break;
        default:
            return state;
    }

};


export const users = (state = {}, action) => {

    switch (action.type) {

        case actionConstants.GET_USER_REQUEST:
            console.log("Reducer: Get Users");
            break;

        case actionConstants.GET_USER_SUCCESS:
            return [
                ...state, {...user(state, action)}
            ];
            break;
        default:
            state
    }

    return state;
}