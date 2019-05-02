import React, { Component } from 'react'
import { connect } from 'react-redux'
import './NotificationListPage.css'

import SearchPanel from './SearchPanel/SearchPanel'
import NotificationList from './NotificationList/NotificationList'
import NotificationActions from './NotificationActions/NotificationActions'

import Notification from '../../Notification/Notification'
import Paging from './Paging/Paging'

import { getNotificationList } from '../../../actions/notificationList'


class NotificationListPage extends Component {

    render() {
        return (
            <div className="list-page-container">
                <div className="two-bar-container">
                    <div className="list-container">
                        <SearchPanel />
                        <div className="list-block">
                            <NotificationList />
                        </div>
                    </div>
                    <div className="bar-block">
                            <Notification
                                notification={this.props.notification}
                                error={this.props.error}
                            />
                            <NotificationActions
                                notification={this.props.notification}
                            />
                    </div>
                </div>
                <Paging />
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
    error: state.notification.activeNotification.error,
    all: state
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationListPage)

