import React, { Component } from 'react';

import NotificationService from '../../services/NotificationService';


 export default class NotificationList extends Component {

    notificationService = new NotificationService();

    state = {
        PageNumber: null,
        AllPages: null,
        Notifications: null
     };

    constructor() {
        super();
        this.UpdateList();
    }

    UpdateList() {
        this.notificationService
            .getNotificationList()
            .then((obj) => {
                this.setState({
                    PageNumber: obj.pageNumber,
                    AllPages: obj.allPages,
                    Notifications: obj.notifications
                });
            });
    }

     render() {
         if (!this.state.Notifications) {
             return null
         } else {
             return (
                 <div>

                     {this.state.Notifications.map(item => (
                         <div>{item.title}</div>))}
                 </div>
             )
         }
     }
}