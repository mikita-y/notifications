import React from 'react';
import { Link, Redirect } from "react-router-dom";
import './AppHeader.css'

import { connect } from 'react-redux'
import Authentication from '../Authentication/Authentication';


const AppHeader = ({ login }) => {

        return (
            <div className="header-container">
                <div className="title">
                    <Link to={`/${login ? "notificationlist" : ""}`}>
                        Notification Service 
                    </Link> 
                </div>
                <div className="buttons">
                    <Link to="/">
                            About
                    </Link>
                    <Link to="/contacts">
                            Contacts
                    </Link>
                    <Authentication  />
                </div>
            </div>
        )
};


const mapStateToProps = state => ({
    login: state.authentication.user,
})

export default connect(mapStateToProps)(AppHeader)