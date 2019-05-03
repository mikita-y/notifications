
export const AUTHENTICATION_DELETE_USER = 'DELETE_USER'
export const AUTHENTICATION_SET_USER = 'SET_USER'
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR'
export const AUTHENTICATION_LOADING = 'AUTHENTIFICATION_LOADING'



export const authenticationError = (payload) => {
    return {
        type: AUTHENTICATION_ERROR,
        payload
    }
}

export const authenticationLoading = () => {
    return {
        type: AUTHENTICATION_LOADING
    }
}


export const authenticationSetUser = (payload) => {
    return {
        type: AUTHENTICATION_SET_USER,
        payload
    }
}

export const authenticationDeleteUser = () => {
    return {
        type: AUTHENTICATION_DELETE_USER
    }
}


export const loginRequest = (user) => {
    return (dispatch) => {
        dispatch(authenticationLoading());
        const body = {
            userName: user.userName,
            password: user.password
        }          
        
        fetch(`api/authentication/login`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
            .then((response) => {
                console.log('response: ', response)
                dispatch(authenticationLoading());
                console.log(body)
                if (body[0]) {
                    let errors = [];
                    let i = 0;
                    body.forEach(function (err) {
                        errors[i++] = err.description

                    });
                    dispatch(authenticationError(errors))
                }
                return response.json();
            })
            .then((body) => {
                if (body[0]) {
                    let errors = [];
                    let i = 0;
                    body.forEach(function (err) {
                        errors[i++] = {
                            id: i,
                            description: err.description
                        }

                    });
                    dispatch(authenticationError(errors))
                }
                else {
                    const token = "Bearer " + body.access_token;
                    localStorage.setItem("accessToken", token);
                    localStorage.setItem("userId", body.userId);
                    localStorage.setItem("userName", user.userName);
                    dispatch(authenticationSetUser({
                        token: token,
                        userId: body.userId,
                        userName: user.userName
                    }));
                }
            })
            .catch(() => {
                
            });
    }
}


export const registryRequest = (user) => {
    return (dispatch) => {
        dispatch(authenticationLoading());

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
                dispatch(authenticationLoading());
                return response.json();
            })
            .then((body) => {
                if (body[0]) {
                    let errors = [];
                    let i = 0;
                    body.forEach(function (err) {
                        errors[i++] = {
                            id: i,
                            description: err.description
                        }
                    });
                    dispatch(authenticationError(errors))
                }
                else {
                    const token = "Bearer " + body.access_token;
                    localStorage.setItem("accessToken", token);
                    localStorage.setItem("userId", body.userId);
                    localStorage.setItem("userName", user.userName);
                    dispatch(authenticationSetUser({
                        token: token,
                        userId: body.userId,
                        userName: user.userName
                    }));
                }
            })
            .catch(() => { dispatch(authenticationError()) });
    }
}



const initialToken = {
    user: null,
    error: false,
    errorMessage: null,
    loading: false,
}


export const authentication = (state = initialToken, action) => {
    switch (action.type) {
        case AUTHENTICATION_SET_USER:
            return { ...state, user: action.payload, error: false, errorMessage: null }
        case AUTHENTICATION_DELETE_USER:
            return {...state, user: null}
        case AUTHENTICATION_ERROR:
            return { ...state, error: true, errorMessage: action.payload}
        case AUTHENTICATION_LOADING:
            return { ...state, loading: !state.loading }
        default:
            return state;
    }
}