import React from 'react';
import './UserMenu.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import  NotificationUpdatePage  from './NotificationUpdatePage/NotificationUpdatePage'


import NotificationListPage from './NotificationListPage/NotificationListPage';


const UserMenu = ({ login }) => {

    if(login)
    return (
            <div className="menu-container">
                <NotificationListPage />
            </div>
    )
}

const mapStateToProps = state => ({
    login: state.authentication.user,
})

const mapDispatchToProps = dispatch => {
    return {
        //authenticate: (user) => dispatch(authenticationSetUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
