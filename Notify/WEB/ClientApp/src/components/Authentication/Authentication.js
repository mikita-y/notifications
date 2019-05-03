import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

import './Authentication.css'
import Logout from './Logout';

function Authentication({ login }) {
    if (!login)
        return (
            <div className="authentication-container">
                <Link to="/login">
                            Login
                </Link>
                    <Link to="/registry">
                            Registry
                    </Link>
                   
                </div>
        );
    else
        return (
            <div className="authentication-container">
                <Logout />
                <Redirect to="/notificationlist" />
            </div>
        );
}


const mapStateToProps = state => ({
    login: state.authentication.user,
})

export default connect(mapStateToProps)(Authentication)