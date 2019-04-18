import {
    REQUEST_ERROR, REQUEST_LOADING, 
    requestError, requestLoading
} from './request'


/////constants
export const SET_TOKEN = 'SET_TOKEN'
export const DELETE_TOKEN = 'DELETE_TOKEN'
export const SET_USERID = 'SET_USERID'



/////actions
export const setToken = () => {
    return {
        type: SET_TOKEN,
    }
}

export const deleteToken = () => {
    return {
        type: DELETE_TOKEN
    }
}



//// thunk actions
export const loginRequest = (user) => {
    return (dispatch) => {
        dispatch(requestLoading(true));
        const body = {
            userName: user.userName,
            password: user.password
        }

        fetch('api/authentication/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
            .then((response) => {

                dispatch(requestLoading(false));
                return response.json();
            })
            .then((body) => {
                const token = "Bearer " + body.access_token;
                localStorage.setItem("accessToken", token);
                localStorage.setItem("userId", body.userId);
                localStorage.setItem("userName", user.userName);
                dispatch(setToken());
            })
            .catch(() => dispatch(requestError(true)));
    }
}


export const registryRequest = (user) => {
    return (dispatch) => {
        dispatch(requestLoading(true));
        const body = {
            email: user.email,
            userName: user.userName,
            password: user.password
        }

        fetch('api/authentication/registration', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
            .then((response) => {

                dispatch(requestLoading(false));
                return response.json();
            })
            .then((body) => {
                const token = "Bearer " + body.access_token;
                localStorage.setItem("accessToken", token);
                localStorage.setItem("userId", body.userId);
                localStorage.setItem("userName", user.userName);
                dispatch(setToken());
            })
            .catch(() => dispatch(requestError(true)));
    }
}


////////////reducer


const initialToken = {
    error: false,
    load: false,
    login: false
}


export const authentication = (state = initialToken, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return Object.assign({}, state, { login: true })
        case DELETE_TOKEN:
            return Object.assign({}, state, { login: false })
        case REQUEST_ERROR:
            return Object.assign({}, state, { error: action.error})
        case REQUEST_LOADING:
            return Object.assign({}, state, { load: action.load })
        default:
            return state;
    }
}