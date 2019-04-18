import {
    REQUEST_ERROR, REQUEST_LOADING, REQUEST_SECCESSFUL,
    requestError, requestLoading, requestSeccessful
} from './request'


export const SET_NOTIFICATION = "SET_NOTIFICATION"

export const setNotification = (notification) => {
    return {
        type: SET_NOTIFICATION,
        item: notification
    }
}


//// thunk action
export const getNotification = (id) => {
    return (dispatch) => {
        dispatch(requestLoading(true));

        fetch(`api/notificationcrud/${id}`, {
            headers: {
                'Authorization': localStorage.getItem("accessToken")
            }
        })
            .then((response) => {

                dispatch(requestLoading(false));
                return response.json();
            })
            .then((result) => {
                dispatch(setNotification(result));
            })
            .catch(() => dispatch(requestError(true)));
    }
}

export const deleteNotification = (id) => {
    return (dispatch) => {
        dispatch(requestLoading(true));

        fetch(`api/notificationcrud/${id}`, {
            method: 'delete',
            headers: {
                'Authorization': localStorage.getItem("accessToken")
            }
        })
            .then((response) => {
                console.log(response);
                dispatch(requestLoading(false));
            })
            .then(() => {
                const item = {
                    id: 'delete',
                    title: 'deleted'
                }
                dispatch(setNotification(item));
            })
            .catch(() => { console.log('error in notification'); dispatch(requestError(true)) });
    }
}


//reducer


const initialNotification = {
    error: false,
    load: false,
    /// заменить на notification: null   ????
    notification: {
        id: null,
        title: null,
        body: null,
        icon: null,
        image: null,
        notificationActions: null
    }
}


export const activeNotification = (state = initialNotification, action) => {
    switch (action.type) {
        case SET_NOTIFICATION:
            return Object.assign({}, state, { notification: action.item })
        case REQUEST_ERROR:
            return Object.assign({}, state, { error: action.error })
        case REQUEST_LOADING:
            return Object.assign({}, state, { load: action.load })
        default:
            return state
    }
}
