import React, { Component } from 'react';
import { connect } from 'react-redux'
import './NotificationList.css'

import { getNotification, deleteNotification } from '../../../../actions/activeNotification'
import { getNotificationList } from '../../../../actions/notificationList'



class NotificationList extends Component {

     constructor(props) {
         super(props);
     }

     deleteNotification = (id) => {
         this.props.deleteNotification(id);
         this.props.updateNotifcationList();
     }

     createNotification = () => {
         //this.props.createNotification();
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
                                 <div className="buttons">
                                 <button
                                     onClick={() => this.props.toggleNotification(item.id)}>
                                     Show
                                 </button>
                                 <button
                                     /*onClick={() => this.props.updateNotification(item.id)}*/>
                                     Update
                                 </button>
                                 <button
                                     onClick={() => this.deleteNotification(item.id)}>
                                     Delete
                                 </button>
                             
                             </div>
                         </div>))}
                 </div>
             )
         }
     }
 }

const mapStateToProps = state => ({
    notificationList: state.notificationList.list,
})

const mapDispatchToProps = (dispatch) => {
    return {
        toggleNotification: (id) => dispatch(getNotification(id)),
        deleteNotification: (id) => dispatch(deleteNotification(id)),
        updateNotifcationList: () => dispatch(getNotificationList())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(NotificationList)