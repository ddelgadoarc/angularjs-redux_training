import { combineReducers } from 'redux';
import { counter } from './counter';
import { todos } from './todos';
import { users } from './users';

function items(state = {}, action) {
    return state
}

const rootReducer = combineReducers({
    items,
    counter,
    todos,
    users
})

export default rootReducer