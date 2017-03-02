export const todos = (state = {}, action) => {

    switch (action.type) {

        case 'ADD_TODO':

            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]

            break;

        case 'SELECT_TODO':
                return [

                ]
            break;
        default:
            state
    }

    return state;
}

