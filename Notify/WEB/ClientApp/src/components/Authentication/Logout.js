import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import "./Authentication.css"
import { authenticationDeleteUser } from '../../actions/authentication'
import { clearNotification } from '../../actions/notification/activeNotification'



function Logout({ logout, clear , history}) {

    function routeChange() {

        let path = `/`;
        history.push(path);
    }

    return (
            <Button className="logout-button"
                onClick={() => { localStorage.clear(), logout(), clear(), routeChange() }}>
                Logout
            </Button>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(authenticationDeleteUser()),
        clear: () => dispatch(clearNotification())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Logout))