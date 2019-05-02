
export const SET_NOTIFICATION_LIST = 'SET_NOTIFICATION_LIST'
export const NOTIFICATION_LIST_ERROR = 'NOTIFICATION_LIST_ERROR'
export const NOTIFICATION_LIST_LOADING = 'NOTIFICATION_LIST_LOADING'

export const SORT_NOTIFICATIONS = 'SORT_NOTIFICATIONS'
export const FILTER_NOTIFICATIONS = 'FILTER_NOTIFICATIONS'
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER'
export const SET_PAGE_SIZE = 'SET_PAGE_SIZE'


export const setNotificationList = (payload) => {
    return {
        type: SET_NOTIFICATION_LIST,
        payload
    }
}

export const notificationListError = (payload) => {
    return {
        type: NOTIFICATION_LIST_ERROR,
        payload
    }
}

export const notificationListLoading = () => {
    return {
        type: NOTIFICATION_LIST_LOADING,
    }
}

export const sortNotifications = (payload) => {
    return {
        type: SORT_NOTIFICATIONS,
        payload
    }
}

export const filterNotifications = (payload) => {
    return {
        type: FILTER_NOTIFICATIONS,
        payload
    }
}

export const setSearchText = (payload) => {
    return {
        type: SET_SEARCH_TEXT,
        payload
    }
}

export const setPageNumber = (payload) => {
    return {
        type: SET_PAGE_NUMBER,
        payload
    }
}

export const setPageSize = (payload) => {
    return {
        type: SET_PAGE_SIZE,
        payload
    }
}


export const getNotificationList = () => {
    return (dispatch, getState) => {
        const prop = getState().notificationList;
        dispatch(notificationListLoading());
        const body = {
            userId: getState().authentication.user.userId,
            sorting: prop.sorting,
            filterBy: prop.filtering,
            page: prop.page,
            pageSize: prop.pageSize,
            searchText: prop.searchText
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

                dispatch(notificationListLoading());
                return response.json();
            })
            .then((result) => {
                dispatch(setNotificationList(result));
            })
            .catch(() => { console.log('error in list'); dispatch(notificationListError("Error")) });
    }
}


const initialNotificationList = {
    error: false,
    errorMessage: null,
    loading: false,
    list: {
        pageNumber: null,
        allPages: null,
        notifications: []
    },
    sorting: 0,
    filtering: null,
    searchText: null,
    page: 1,
    pageSize: 10
}


export const notificationList = (state = initialNotificationList, action) => {
    switch (action.type) {
        case SET_NOTIFICATION_LIST:
            return Object.assign({}, state, { list: action.payload })
        case NOTIFICATION_LIST_LOADING:
            return { ...state, loading: !state.loading }
        case NOTIFICATION_LIST_ERROR:
            return { ...state, error: true, errorMessage: action.payload }
        case SORT_NOTIFICATIONS:
            return { ...state, sorting: action.payload }
        case FILTER_NOTIFICATIONS:
            return { ...state, filtering: action.payload }
        case SET_SEARCH_TEXT:
            return { ...state, searchText: action.payload }
        case SET_PAGE_NUMBER:
            return { ...state, page: action.payload }
        case SET_PAGE_SIZE:
            return { ...state, pageSize: action.payload }
        default:
            return state
    }
}


