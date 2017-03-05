export function addTodoAction(user) {

    return {
        type: 'ADD_TODO',
        user
    }
}

export function addUserAction(user) {
    return {
        type: 'ADD_USER',
        user: user
    }
}


export function getAllUsers() {

    console.log("Here");

    return function(dispatch) {
        type: 'GET_ALL_USERS'
    }
}