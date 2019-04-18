import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getNotification } from '../../../actions/activeNotification'



class NotificationList extends Component {

     constructor(props) {
         super(props);
     }

     toggleActiveNotification = (id) => {
         this.props.toggleNotification(id);
     }

     createNotification = () => {
         //this.props.createNotification();
     }

     render() {
         if (!this.props.notificationList.notifications) {
             return null
         }
         else {
             return (
                 <div>
                     {this.props.notificationList.notifications.map(item => (
                         <div key={item.id}>
                             <button
                                 onClick={() => this.toggleActiveNotification(item.id)}>
                                 {item.title}
                             </button>
                         </div>))}
                     <button
                         onClick={() => this.createNotification()}>
                         Add
                     </button>
                 </div>
             )
         }
     }
 }

const mapStateToProps = state => ({
    notificationList: state.notificationList.list
})

const mapDispatchToProps = (dispatch) => {
    return {
        toggleNotification: (id) => dispatch(getNotification(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList)