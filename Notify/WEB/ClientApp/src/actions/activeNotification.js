import { combineReducers } from 'redux';

import { getNotificationList } from './notificationList'

export const GET_NOTIFICATION_SUCCESS = "GET_NOTIFICATION_SUCCESS"
export const GET_NOTIFICATION_ERROR = "GET_NOTIFICATION_ERROR"
export const GET_NOTIFICATION_LOADING = "GET_NOTIFICATION_LOADING"
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION"
//export const DELETE_NOTIFICATION_SUCCESS = "DELETE_NOTIFICATION_SUCCESS"
export const DELETE_NOTIFICATION_ERROR = "DELETE_NOTIFICATION_ERROR"
export const DELETE_NOTIFICATION_LOADING = "DELETE_NOTIFICATION_LOADING"


/////random




export const getNotificationSuccess = (payload) => {
    return {
        type: GET_NOTIFICATION_SUCCESS,
        payload
    }
}

export const getNotificationError = (payload) => {
    return {
        type: GET_NOTIFICATION_ERROR,
        payload
    }
}

export const getNotificationLoading = () => {
    return {
        type: GET_NOTIFICATION_LOADING
    }
}

export const clearNotification = () => {
    return {
        type: CLEAR_NOTIFICATION
    }
}


//// thunk action
export const getNotification = (id) => {
    return (dispatch) => {
        dispatch(getNotificationLoading());

        fetch(`api/notificationcrud/${id}`, {
            headers: {
                'Authorization': localStorage.getItem("accessToken")
            }
        })
            .then((response) => {

                dispatch(getNotificationLoading());
                return response.json();
            })
            .then((result) => {
                //console.log( "noti ", result);
                dispatch(getNotificationSuccess(result));
            })
            .catch(() => dispatch(getNotificationError("err")));
    }
}


const initialActiveNotification = {
    notification: null,
    error: false,
    errorMesage: null,
    loading: false,
    update: false,
    create: false
}


export const activeNotification = (state = initialActiveNotification, action) => {
    switch (action.type) {
        case GET_NOTIFICATION_SUCCESS:
            return { ...state,  notification: action.payload }
        case GET_NOTIFICATION_ERROR:
            return { ...state, error: true, errorMessage: action.payload }
        case GET_NOTIFICATION_LOADING:
            return { ...state, loading: !state.loading }
        case CLEAR_NOTIFICATION:
            return {...state, notification: null} 
        default:
            return state
    }
}

//////////////////////////////////////////////////////////////////////////////////////delete/////////////////////



export const deleteNotificationError = (payload) => {
    return {
        type: DELETE_NOTIFICATION_ERROR,
        payload
    }
}

export const deleteNotificationLoading = () => {
    return {
        type: DELETE_NOTIFICATION_LOADING
    }
}

export const deleteNotification = (id) => {
    return (dispatch) => {
        dispatch(deleteNotificationLoading());

        fetch(`api/notificationcrud/${id}`, {
            method: 'delete',
            headers: {
                'Authorization': localStorage.getItem("accessToken")
            }
        })
            .then((response) => {
                //console.log(response);
                dispatch(deleteNotificationLoading());
            })
            .then(() => {
                dispatch(getNotificationSuccess(null));
                dispatch(getNotificationList());
            })
            .catch(() => { console.log('error in notification'); dispatch(deleteNotificationError("mess")) });
    }
}

const initialDeletedNotification = {
    error: false,
    errorMesage: null,
    loading: false
}

export const deletedNotification = (state = initialDeletedNotification, action) => {
    switch (action.type) {
        case DELETE_NOTIFICATION_ERROR:
            return { ...state, error: true, errorMessage: action.payload }
        case DELETE_NOTIFICATION_LOADING:
            return { ...state, loading: !state.loading }
        default:
            return state
    }
}




//final reducer 

export const notification = combineReducers({
    activeNotification,
    deletedNotification
})
