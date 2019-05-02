import axios from 'axios'


export const GET_RANDOM_NOTIFICATION_SUCCESS = "GET_RANDOM_NOTIFICATION_SUCCESS"
export const GET_RANDOM_NOTIFICATION_ERROR = "GET_RANDOM_NOTIFICATION_ERROR"
export const GET_RANDOM_NOTIFICATION_LOADING = "GET_RANDOM_NOTIFICATION_LOADING"



export const getRandomNotificationSuccess = (payload) => {
    return {
        type: GET_RANDOM_NOTIFICATION_SUCCESS,
        payload
    }
}

export const getRandomNotificationError = (payload) => {
    return {
        type: GET_RANDOM_NOTIFICATION_ERROR,
        payload
    }
}

export const getRandomNotificationLoading = () => {
    return {
        type: GET_RANDOM_NOTIFICATION_LOADING
    }
}


export const getRandomNotification = () => {
    return (dispatch) => {
        setTimeout(() => {
            fetch(`api/notificationcrud/getrandomnotification`)
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    dispatch(getRandomNotificationSuccess(result));
                })
                .catch(() => dispatch(getRandomNotificationError("err")));
        }, 10000);

        
    }
}


const initialRandomNotification = {
    notification: null,
    error: false,
    errorMesage: null,
    loading: false
}


export const randomNotification = (state = initialRandomNotification, action) => {
    switch (action.type) {
        case GET_RANDOM_NOTIFICATION_SUCCESS:
            return { ...state, notification: action.payload }
        case GET_RANDOM_NOTIFICATION_ERROR:
            return { ...state, error: true, errorMessage: action.payload }
        case GET_RANDOM_NOTIFICATION_LOADING:
            return { ...state, loading: !state.loading }
        default:
            return state
    }
}
