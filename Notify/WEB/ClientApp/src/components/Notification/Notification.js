import React, { Component } from 'react';
import { connect } from 'react-redux'

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
                <div>
                    <table border="1">
                        <tbody>
                            <tr>
                                <td>
                                    {notification.title}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {notification.body}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {notification.icon}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                   <img src={notification.image}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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