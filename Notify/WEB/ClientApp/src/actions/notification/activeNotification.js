import { combineReducers } from 'redux';

import { updatedNotification } from './updatedNotification';
import { deletedNotification } from './deletedNotification';



const GET_NOTIFICATION_SUCCESS = "GET_NOTIFICATION_SUCCESS"
const SET_NOTIFICATION = "SET_NOTIFICATION"
const GET_NOTIFICATION_ERROR = "GET_NOTIFICATION_ERROR"
const GET_NOTIFICATION_LOADING = "GET_NOTIFICATION_LOADING"
const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION"
const SET_UPDATING_FLAG = "CLEAR_NOTIFICATION"
const SET_CREATING_FLAG = "SET_CREATING_FLAG"



export const getNotificationSuccess = (payload) => {
    return {
        type: GET_NOTIFICATION_SUCCESS,
        payload
    }
}

export const setNotification = (payload) => {
    return {
        type: SET_NOTIFICATION,
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

export const setUpdatingFlag = () => {
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
                dispatch(getNotificationSuccess(result));
            })
            .catch(() => dispatch(getNotificationError("err")));
    }
}


const initialActiveNotification = {
    notification: null,
    error: false,
    errorMesage: null,
    loading: false
}


export const activeNotification = (state = initialActiveNotification, action) => {
    switch (action.type) {
        case GET_NOTIFICATION_SUCCESS:
            return { ...state, notification: action.payload }
        case SET_NOTIFICATION:
            return { ...state, notification: action.payload }
        case GET_NOTIFICATION_ERROR:
            return { ...state, error: true, errorMessage: action.payload }
        case GET_NOTIFICATION_LOADING:
            return { ...state, loading: !state.loading }
        case CLEAR_NOTIFICATION:
            return { initialActiveNotification } 
        default:
            return state
    }
}



//final reducer 

export const notification = combineReducers({
    activeNotification,
    deletedNotification,
    updatedNotification
})
