import { combineReducers } from 'redux';

import { authentication } from './authentication'
import { notificationList } from './notificationList'
import { notification } from './notification/activeNotification'
import { randomNotification } from './randomNotification'



const reducer = combineReducers({
    authentication,
    notificationList,
    notification,
    randomNotification
})

export default reducer




