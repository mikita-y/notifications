import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Notification.css'
import { deleteNotification } from '../../actions/activeNotification'
import { getNotificationList } from '../../actions/notificationList'


export default function Notification( {notification = null, error = null } ){

    if (error) {
        return <h1>Error</h1>
    }
    else
        if (!notification) {
            return null
        }
        else {
            return (
                <div className="notification-container">
                    <img className="notification-icon" src={notification.icon} />
                    <h4 className="notification-title">{notification.title} </h4>
                    <p className="notification-body"> {notification.body} </p>
                    <img className="notification-image" src={notification.image} />
                </div>

            )
        }
}



/*const mapStateToProps = state => ({
    notification: state.notification.activeNotification.notification,
    error: state.notification.activeNotification.error
})

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNotification: (id) => dispatch(deleteNotification(id)),
        updateNotifcationList: () => dispatch(getNotificationList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)*/