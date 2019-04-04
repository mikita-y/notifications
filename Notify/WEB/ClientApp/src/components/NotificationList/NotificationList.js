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


     onNotiClick = (id) => {
         //onToggleImportant = { () => onTo}
         console.log('NotiClick', id);
     };



render() {

    const { onToggleSelect } = this.props;


         if (!this.state.Notifications) {
             return null
         } else {
             return (
                 <div>

                     {this.state.Notifications.map(item => (
                         <div>
                             <span
                                 onClick={this.onNotiClick(item.id)}>

                                 <label>
                                 {item.title}

                                 </label>
                             </span>

                         </div>))}
                 </div>
             )
         }
     }
}