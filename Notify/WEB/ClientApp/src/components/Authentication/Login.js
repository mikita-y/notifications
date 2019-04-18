import React, { Component } from 'react';
import { connect } from 'react-redux'

import { loginRequest  } from '../../actions/authentication'


class Login extends Component {

    state = {
        userName: "",
        password: "",
    };

    changeName = (name) => {
        this.setState({ userName: name.target.value });
    }

    changePassword = (pass) => {
        this.setState({ password: pass.target.value });
    }

    getToken = () => {
        this.props.login(this.state);
    }

    render() {
        return (
            <div>
                <h6> LOGIN</h6>
                <input type="text"
                    placeholder="userName"
                    value={this.state.userName}
                    onChange={this.changeName}
                />
                <input type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.changePassword}
                />

                <button
                    onClick={this.getToken}>
                    Login
                </button>

            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(loginRequest(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)
