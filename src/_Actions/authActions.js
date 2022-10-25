import { authconstants } from '../_Constants';
import { userconstants } from '../_Constants';
import axios from '../_Helpers/axios';

export const sampleLogin = (user) => {

    return async (dispatch) =>
        new Promise((resolve) => {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authconstants.LOGIN_SUCCESS,
                user: user,
            });
            return resolve(user);
        });

}

export const login = (user) => {
    return async function saveNewTodoThunk(dispatch, getState) {

        await dispatch({ type: authconstants.LOGIN_REQUEST });

        let response = await axios.post("/login", user);
        if (response.status === 200) {
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            await dispatch({
                type: authconstants.LOGIN_SUCCESS,
                user: user,
                token: token
            });
        }
        else {
            await dispatch({
                type: authconstants.LOGIN_FAILURE,
                payload: "ERRROR"
            });
        }
        return response;
    }

}


export const signUp = (user) => {
    return async function saveNewTodoThunk(dispatch, getState) {

        await dispatch({ type: userconstants.SIGHNUP_REQUEST });

        let response = await axios.post("/signUp", user);
        if (response.status === 200) {
            const { user } = response.data;
            await dispatch({
                type: userconstants.SIGHNUP_SUCCESS,
                payload: user
            });
        }
        else {
            await dispatch({
                type: userconstants.SIGHNUP_FAILURE,
                payload: "ERROR"
            });
        }
        return response;
    }

}

