import React, { Component } from 'react';
import { connect } from 'react-redux'
import './NotificationList.css'

import { getNotification, setNotification } from '../../../../actions/notification/activeNotification'
import { deleteNotification } from '../../../../actions/notification/deletedNotification'
import { getNotificationList } from '../../../../actions/notificationList'
import { clearNotificationList } from '../../../../actions/notificationList'

import { withRouter } from 'react-router-dom';


class NotificationList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.updateNotifcationList();
    }

    

    deleteNotification = (id) => {
        this.props.deleteNotification(id);
    }

    createNotification = () => {

        this.props.setNotification(null);

        const path = `/create`;
        this.props.history.push(path);
    }


    render() {
        if (this.props.loading) {
            return <h4> Loading... </h4>
        }
        else if (this.props.error) {
            return (
                <div>
                    <h4> ERROR </h4>
                    <p> {this.props.error} </p>
                </div>
             )
        }
        else if (this.props.notificationList.notifications){
            return (
                <div className="notification-list-container">
                    { 
                        this.props.notificationList.notifications.map(item => (
                        <div key={item.id} className="list-case">
                            
                            <span>{item.title} </span>
                            <div className="list-buttons">
                                <button className="list-button"
                                    onClick={() => this.props.toggleNotification(item.id)}>
                                    Show
                                 </button>

                                <button className="list-button"
                                    onClick={() => this.deleteNotification(item.id)}>
                                    Delete
                                 </button>

                            </div>
                        </div>)) }
                    <div className="list-case">
                        <span>New notification </span>
                        <div className="list-buttons">
                            <button className="list-button"
                                onClick={() => this.createNotification()}>
                                Create
                             </button>
                        </div>
                    </div>
                </div>
            )
        }
        return null;
    }
}

const mapStateToProps = state => ({
    notificationList: state.notificationList.list,
    name: state.authentication.user ? state.authentication.user.userName : null,
    id: state.notification.activeNotification.notification ? state.notification.activeNotification.notification.id : null,
    loading: state.notificationList.loading,
    error: state.notificationList.errorMessage
})

const mapDispatchToProps = (dispatch) => {
    return {
        setNotification: () => dispatch(setNotification()),
        toggleNotification: (id) => dispatch(getNotification(id)),
        deleteNotification: (id) => dispatch(deleteNotification(id)),
        updateNotifcationList: () => dispatch(getNotificationList()),
        clear: () => dispatch(clearNotificationList())
    }
}



export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(NotificationList))
