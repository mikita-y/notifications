import React from 'react';
import { Link, Redirect } from "react-router-dom";
import './AppHeader.css'

import { connect } from 'react-redux'
import Authentication from '../Authentication/Authentication';


const AppHeader = ({ login }) => {

        return (
            <div className="header-container">
                <h2 className="title">
                    <Link to={`/${login ? login.userName : ""}`}>
                        Notification Service 
                    </Link> 
                </h2>
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