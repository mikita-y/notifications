import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css'

import AppHeader from '../AppHeader/AppHeader';
import UserMenu from '../UserMenu/UserMenu'
import NotificationUpdatePage from '../UserMenu/NotificationUpdatePage/NotificationUpdatePage'

import About from '../AppInfo/About';
import Contacts from '../AppInfo/Contacts';
import Login from '../Authentication/LoginForm';
import Registry from '../Authentication/RegistryForm';


import { authenticationSetUser } from '../../actions/authentication'


class App extends Component {

    componentDidMount() {
        /*if (localStorage.getItem("accessToken")) {
            const user = {
                token: localStorage.getItem("accessToken"),
                userId: localStorage.getItem("userId"),
                userName: localStorage.getItem("userName")
            };
            if(!this.props.login)
                this.props.authenticate(user);
        }*/
    }

    render() {
        return (
            <Router>
                <div className="app-container">
                    <AppHeader />
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/registry" component={Registry} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path={`/${this.props.login ? this.props.login.userName : null}`} component={UserMenu} />
                        <Route exact path="/update" component={NotificationUpdatePage} />
                        <Route exact path="/create" component={NotificationUpdatePage} />
                    </Switch>
                </div>
            </Router>
            )
    }
}

const mapStateToProps = state => ({
    login: state.authentication.user,
    initstate: state
})

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (user) => dispatch(authenticationSetUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


//                        <Route exact path={`/${this.props.login ? `${this.props.login.userName}/update` : ""}`} component={NotificationUpdatePage} /> 
