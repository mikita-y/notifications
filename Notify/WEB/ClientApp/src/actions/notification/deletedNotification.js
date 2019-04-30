import { getNotificationList } from '../notificationList'
import { getNotificationSuccess } from './activeNotification'


const DELETE_NOTIFICATION_SUCCESS = "DELETE_NOTIFICATION_SUCCESS"
const DELETE_NOTIFICATION_ERROR = "DELETE_NOTIFICATION_ERROR"
const DELETE_NOTIFICATION_LOADING = "DELETE_NOTIFICATION_LOADING"
const DELETE_NOTIFICATION_CLEAR = "DELETE_NOTIFICATION_CLEAR"


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

export const deleteNotificationSuccess = () => {
    return {
        type: DELETE_NOTIFICATION_SUCCESS
    }
}

export const deleteNotificationClear = () => {
    return {
        type: DELETE_NOTIFICATION_CLEAR
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
                dispatch(deleteNotificationLoading());
                if (!response.ok) {
                    throw new Error
                }
            })
            .then(() => {
                dispatch(getNotificationSuccess(null));
                dispatch(getNotificationList());
            })
            .catch(() => { dispatch(deleteNotificationError("ERROR")) });
    }
}

const initialDeletedNotification = {
    error: false,
    errorMesage: null,
    loading: false,
    success: false
}

export const deletedNotification = (state = initialDeletedNotification, action) => {
    switch (action.type) {
        case DELETE_NOTIFICATION_ERROR:
            return { ...state, error: true, errorMessage: action.payload }
        case DELETE_NOTIFICATION_LOADING:
            return { ...state, loading: !state.loading }
        case DELETE_NOTIFICATION_SUCCESS:
            return { ...state, success: true }
        case DELETE_NOTIFICATION_CLEAR:
            return { initialDeletedNotification }
        default:
            return state
    }
}