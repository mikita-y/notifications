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

    componentDidMount() {
        this.props.getNotificationList();
        console.log(this.props.all);
    }

    render() {
        return (
            <div className="list-page-container">
                <div className="list-page-container-top">
                    <div className="left-page-container">
                        <SearchPanel />
                        <NotificationList />
                    </div>
                    <div className="right-page-container">
                        <div className="notification-size-container">
                            <Notification
                                notification={this.props.notification}
                                error={this.props.error}
                            />
                            <NotificationActions
                                notification={this.props.notification}
                            />
                        </div>
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

