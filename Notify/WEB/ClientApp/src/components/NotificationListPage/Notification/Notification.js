import React, { Component } from 'react';
import { connect } from 'react-redux'

import { deleteNotification } from '../../../actions/activeNotification'
import { getNotificationList } from '../../../actions/notificationList'


class Notification extends Component {


    componentDidUpdate() {
        console.log(this.props.sort)
        this.props.refreshNotiifcationList(this.props.sort)
    }

    render() {
        if (this.props.error) {
            return <h1>Error</h1>
        }
        else     
            if (!this.props.notification.id) {
            return null
        }
        else {
            return (
                <div>
                    <table border="1">
                        <tbody>
                            <tr>
                                <td>
                                    {this.props.notification.title}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {this.props.notification.body}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {this.props.notification.icon}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {this.props.notification.image}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button
                                        onClick={() => this.props.deleteNotification(this.props.notification.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}



const mapStateToProps = state => ({
    notification: state.activeNotification.notification,
    error: state.activeNotification.error
})

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNotification: (id) => dispatch(deleteNotification(id)),
        refreshNotiifcationList: () => (sort) => dispatch(getNotificationList(sort))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)