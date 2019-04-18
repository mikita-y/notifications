export const REQUEST_ERROR = 'REQUEST_ERROR'
export const REQUEST_LOADING = 'REQUEST_LOADING'
export const REQUEST_SECCESSFUL = 'REQUEST_SECCESSFUL'

export const requestError = (bool) => {
    return {
        type: REQUEST_ERROR,
        error: bool
    }
}

export const requestLoading = (bool) => {
    return {
        type: REQUEST_LOADING,
        load: bool
    }
}

export const requestSeccessful = (item) => {
    return {
        type: REQUEST_SECCESSFUL,
        item
    }
}