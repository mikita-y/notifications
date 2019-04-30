import React, { Component } from 'react';
import { connect } from 'react-redux'
import './NotificationList.css'

import { getNotification, setNotification } from '../../../../actions/notification/activeNotification'
import { deleteNotification } from '../../../../actions/notification/deletedNotification'
import { getNotificationList } from '../../../../actions/notificationList'

import { withRouter } from 'react-router-dom';



class NotificationList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        //this.props.updateNotifcationList();
    }



    deleteNotification = (id) => {
        this.props.deleteNotification(id);
    }

    createNotification = () => {
        /*const notification = {
            userId: this.props.UserId
        }*/

        this.props.setNotification(null);

        const path = `/update`;
        this.props.history.push(path);
    }


    render() {
        if (!this.props.notificationList) {
            return null
        }
         if (!this.props.notificationList.notifications) {
             return null
         }
         else {
             return (
                 <div className="list-container">
                     {this.props.notificationList.notifications.map(item => (
                         <div key={item.id} className="list-case">
                             
                                 <span>{item.title} </span>
                             <div className="list-buttons">
                                 <button
                                     onClick={() => this.props.toggleNotification(item.id)}>
                                     Show
                                 </button>
                                 
                                 <button
                                     onClick={() => this.deleteNotification(item.id)}>
                                     Delete
                                 </button>
                             
                             </div>
                         </div>))}
                     <div className="list-case">
                         <span>New notification </span>
                         <div className="buttons">
                             <button
                                 onClick={() => this.createNotification()}>
                                 Create
                             </button>
                         </div>
                     </div>)
                 </div>
             )
         }
     }
 }

const mapStateToProps = state => ({
    notificationList: state.notificationList.list,
    name: state.authentication.user ? state.authentication.user.userName : null,
    id: state.notification.activeNotification.notification ? state.notification.activeNotification.notification.id : null
})

const mapDispatchToProps = (dispatch) => {
    return {
        setNotification: () => dispatch(setNotification()),
        toggleNotification: (id) => dispatch(getNotification(id)),
        deleteNotification: (id) => dispatch(deleteNotification(id)),
        updateNotifcationList: () => dispatch(getNotificationList())
    }
}



export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(NotificationList))




/*
  <Link to={`/update`}>
                                     <button
                                         onClick={() => this.props.toggleNotification(item.id)}>
                                         Update

                                    </button>
                                 </Link>*/