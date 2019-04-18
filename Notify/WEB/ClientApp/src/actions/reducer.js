import { combineReducers } from 'redux';

import { authentication } from './authentication'
import { notificationList } from './notificationList'
import { activeNotification } from './activeNotification'


const reducer = combineReducers({
    authentication,
    notificationList,
    activeNotification
})


export default reducer




