import React from 'react';
import { Link } from "react-router-dom";
import './AppHeader.css'

import { connect } from 'react-redux'
import Authentication from '../Authentication/Authentication';


const AppHeader = ({ login }) => {
        return (
            <div className="header-container">
                <h1 className="title">
                    <Link to={`/${login ? login.userName : ""}`}>
                     Notification Service 
                </Link>
                </h1>
                <div className="buttons">
                    <Link to="/">
                        <button >
                            About
                        </button>
                    </Link>
                    <Link to="/contacts">
                        <button>
                            Contacts
                        </button>
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