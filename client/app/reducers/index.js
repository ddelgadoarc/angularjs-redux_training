import { combineReducers } from 'redux';
import { counter } from './counter';
import { todos } from './todos';

function items(state = {}, action) {
    return state
}

const rootReducer = combineReducers({
    items,
    counter,
    todos
})

export default rootReducer