import React, { Component } from 'react'
import { connect } from 'react-redux'
import './NotificationListPage.css'

import SearchPanel from './SearchPanel/SearchPanel'
import NotificationList from './NotificationList/NotificationList'
import Notification from '../../Notification/Notification'
import { getNotificationList } from '../../../actions/notificationList'


class NotificationListPage extends Component {

    componentDidMount() {
        this.props.getNotificationList();
    }
    

    render() {
        return (
            <div className="list-page-container">
                <SearchPanel />
                <NotificationList />
                <Notification
                    notification={this.props.notification}
                    error={this.props.error}
                />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getNotificationList: () => dispatch(getNotificationList())
    }
}

const mapStateToProps = state => ({
    notification: state.notification.activeNotification.notification,
    error: state.notification.activeNotification.error
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationListPage)

