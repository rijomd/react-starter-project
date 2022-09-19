import { authconstants } from '../_Constants';
import { userconstants } from '../_Constants';
import { authService } from '../_Services/authService';

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
    return async (dispatch) =>

        new Promise((resolve, reject) => {
            dispatch({ type: authconstants.LOGIN_REQUEST });
            authService.login(user).then((res) => {
                const { token, user } = res.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                dispatch({
                    type: authconstants.LOGIN_SUCCESS,
                    user: user,
                    token: token
                });
                return resolve(user);
            }, (err) => {
                dispatch({
                    type: authconstants.LOGIN_FAILURE,
                    payload: { err }
                });
                return reject(err);
            })
        });
}

export const signUp = (user) => {
    return async (dispatch) =>

        new Promise((resolve, reject) => {
            dispatch({ type: userconstants.SIGHNUP_REQUEST });
            authService.signUp(user).then((res) => {
                const { user } = res.data;
                dispatch({
                    type: userconstants.SIGHNUP_SUCCESS,
                    payload: user
                });
                return resolve(user);
            }, (err) => {
                dispatch({
                    type: userconstants.SIGHNUP_FAILURE,
                    payload: err
                });
                return reject(err);
            })
        });
}
