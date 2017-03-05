import actionConstants from '../actionConstants';
import userApi from '../api/userApi';


export const getUsers = () => {

    return function(dispatch) {

        return userApi.getAllUsers().then(data => {
            dispatch(getUsersSuccess(data));
        }).catch(error => {
            throw(error);
        })

    }
}

export const getUsersSuccess = (data) => {
    return {
        type: actionConstants.GET_USER_SUCCESS,
        data
    }
}
