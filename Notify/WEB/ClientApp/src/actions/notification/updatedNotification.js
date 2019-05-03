import { getNotificationSuccess } from './activeNotification'


const UPDATE_NOTIFICATION_SUCCESS = "UPDATE_NOTIFICATION_SUCCESS"
const UPDATE_NOTIFICATION_ERROR = "UPDATE_NOTIFICATION_ERROR"
const UPDATE_NOTIFICATION_LOADING = "UPDATE_NOTIFICATION_LOADING"
const UPDATE_NOTIFICATION_CLEAR = "UPDATE_NOTIFICATION_CLEAR"


export const updateNotificationSuccess = () => {
    return {
        type: UPDATE_NOTIFICATION_SUCCESS,
    }
}


export const updateNotificationError = (payload) => {
    return {
        type: UPDATE_NOTIFICATION_ERROR,
        payload
    }
}

export const updateNotificationLoading = () => {
    return {
        type: UPDATE_NOTIFICATION_LOADING
    }
}

export const updateNotificationClear = () => {
    return {
        type: UPDATE_NOTIFICATION_CLEAR
    }
}

export const updateNotification = (notification) => {
    return (dispatch, getState) => {
        dispatch(updateNotificationLoading());
        let path;
        let userId = null;
        if (!notification.id) {
            userId = getState().authentication.user.userId;
            path = "create";
        }
        else
            path = "update";


        fetch(`api/notificationcrud/${path}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("accessToken")
            },
            body: JSON.stringify({ notification, userId })
        })
            .then((response) => {
                dispatch(updateNotificationLoading());

                if (!response.ok) {
                    throw new Error
                }
                return response.json();
            })
            .then((result) => {
                dispatch(getNotificationSuccess(result));
                dispatch(updateNotificationSuccess());
            })
            .catch(() => dispatch(updateNotificationError("err")));
    }
}


const initialUpdatedNotification = {
    error: false,
    errorMesage: null,
    loading: false,
    success: false
}

export const updatedNotification = (state = initialUpdatedNotification, action) => {
    switch (action.type) {
        case UPDATE_NOTIFICATION_SUCCESS:
            return { ...state, success: true }
        case UPDATE_NOTIFICATION_ERROR:
            return { ...state, error: true, errorMessage: action.payload }
        case UPDATE_NOTIFICATION_LOADING:
            return { ...state, loading: !state.loading }
        case UPDATE_NOTIFICATION_CLEAR:
            return { initialUpdatedNotification }
        default:
            return state
    }
}

