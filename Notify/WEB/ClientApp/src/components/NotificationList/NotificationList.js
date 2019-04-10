import React, { Component } from 'react';

import NotificationService from '../../services/NotificationService';


 export default class NotificationList extends Component {

    notificationService = new NotificationService();

     state = {
        PageNumber: null,
        AllPages: null,
        Notifications: null
     };

     constructor(props) {
         super(props);
    }


     UpdateList = (sort) => {
         return this.notificationService
             .getNotificationList(sort)
             .then((obj) => {
                 this.setState({
                     PageNumber: obj.pageNumber,
                     AllPages: obj.allPages,
                     Notifications: obj.notifications
                 });
             });
     }
     render() {

         const { sort } = this.props;
         this.UpdateList(sort);

         if (!this.state.Notifications) {
             return null
         }
         else {
             return (
                 <div>
                     {this.state.Notifications.map(item => (
                         <div key={item.id}>
                             <button
                                 onClick={() => this.props.onToggleNotification(item.id)}>
                                 {item.title}
                             </button>
                         </div>))}
                 </div>
             )
         }
     }

 }