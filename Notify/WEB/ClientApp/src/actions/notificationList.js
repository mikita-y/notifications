import {
    REQUEST_ERROR, REQUEST_LOADING, REQUEST_SECCESSFUL,
    requestError, requestLoading, requestSeccessful
} from './request'


export const SET_NOTIFICATION_LIST = 'SET_NOTIFICATION_LIST'

export const setNotificationList = (list) => {
    return {
        type: SET_NOTIFICATION_LIST,
        item: list
    }
}

//// thunk action
export const getNotificationList = (sort) => {
    return (dispatch) => {
        dispatch(requestLoading(true));
        const body = {
            userId: sort.userId,
            sorting: sort.sorting,
            filterBy: sort.filterBy,
            page: sort.page,
            pageSize: sort.pageSize,
            searchText: sort.searchText
        }

        fetch('api/notificationlist/getnotificationlist', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("accessToken")
            },
            body: JSON.stringify(body)
        })
            .then((response) => {

                dispatch(requestLoading(false));
                return response.json();
            })
            .then((result) => {
                dispatch(setNotificationList(result));
            })
            .catch(() => { console.log('error in list'); dispatch(requestError(true)) });
    }
}


const initialNotificationList = {
    error: false,
    load: false,
    list: {
        pageNumber: null,
        allPages: null,
        notifications: null
    }
}


//reducer
export const notificationList = (state = initialNotificationList, action) => {
    switch (action.type) {
        case SET_NOTIFICATION_LIST:
            return Object.assign({}, state, { list: action.item })
        case REQUEST_ERROR:
            return Object.assign({}, state, { error: action.error })
        case REQUEST_LOADING:
            return Object.assign({}, state, { load: action.load })
        default:
            return state
    }
}
