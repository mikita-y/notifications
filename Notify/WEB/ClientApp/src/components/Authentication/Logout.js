import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import { connect } from 'react-redux'
import { authenticationDeleteUser } from '../../actions/authentication'


function Logout({ logout }){
    return (
        <div>
            <Link to="/">

            <button
                onClick={() => { localStorage.clear(), logout() }}>
                Logout
            </button>
                </Link>

        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(authenticationDeleteUser())
    }
}

export default connect(null, mapDispatchToProps)(Logout)