import React, { Component } from 'react';
import { connect } from 'react-redux'

import AppHeader from '../AppHeader/AppHeader';
import LogReg from '../Authentication/LogReg';
import AppInfo from '../AppInfo/AppInfo';
import Interface from '../Interface/Interface'
import Logout from '../Authentication/Logout';

import { setToken } from '../../actions/authentication'



class App extends Component {

    componentDidMount() {
        if (localStorage.getItem("accessToken"))
            this.props.setToken(true);
    }

    render() {
        if (!this.props.login)
            return (
                <div>
                    <AppHeader />
                    <LogReg />
                    <AppInfo />
                </div>
            )
        else
            return (
                <div>
                    <AppHeader />
                    <Logout />
                    <Interface />
                </div>
                )
    }
}

const mapStateToProps = state => ({
    login: state.authentication.login,
    //initstate: state
})

const mapDispatchToProps = dispatch => {
    return {
        setToken: (bool) => dispatch(setToken(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)



/*<button
onClick = {() => console.log('show ', this.props.initstate)}>
    SHOWSTORE
</button>*/