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
                        <button>
                            Login
                        </button>
                    </Link>
                    <Link to="/registry">
                        <button>
                            Registry
                        </button>
                    </Link>
                   
                </div>
        );
    else
        return (
            <div className="authentication-container">
                <Logout />
                <Redirect to={`/${login.userName}`} />
            </div>
        );
}


const mapStateToProps = state => ({
    login: state.authentication.user,
})

export default connect(mapStateToProps)(Authentication)