import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, redirect } from "react-router-dom";

import './NotificationList.css'

import { getNotification, deleteNotification } from '../../../../actions/activeNotification'
import { getNotificationList } from '../../../../actions/notificationList'

import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';



class NotificationList extends Component {

     constructor(props) {
         super(props);
         this.routeChange = this.routeChange.bind(this);
     }

     deleteNotification = (id) => {
         this.props.deleteNotification(id);
         this.props.updateNotifcationList();
     }

     createNotification = () => {
         //this.props.createNotification();
     }

    routeChange(id) {
        this.props.toggleNotification(id);
        console.log(id);
        let path = `/update`;
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
                                 <div className="buttons">
                                 <button
                                     onClick={() => this.props.toggleNotification(item.id)}>
                                     Show
                                 </button>

                                 <Button color="primary" className="px-4"
                                     onClick={() => this.routeChange(item.id)}>
                                     Update
                                </Button>

                                 
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
    name: state.authentication.user ? state.authentication.user.userName : null,
})

const mapDispatchToProps = (dispatch) => {
    return {
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