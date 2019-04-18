import React, { Component } from 'react';
import { connect } from 'react-redux'

import { registryRequest } from '../../actions/authentication'


class Registry extends Component {


    state = {
        email: "",
        userName: "",
        password: "",
    };

    changeEmail = (email) => {
        this.setState({ email: email.target.value });
    }

    changeName = (name) => {
        this.setState({ userName: name.target.value });
    }

    changePassword = (pass) => {
        this.setState({ password: pass.target.value });
    }

    getToken = () => {
        this.props.registry(this.state);
    }

    render() {
        return (
            <div>
                <h6> REGISTRY</h6>
                <input type="text"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.changeEmail}
                />
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
                    Registry
                </button>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        registry: (user) => dispatch(registryRequest(user))
    }
}

export default connect(null, mapDispatchToProps)(Registry)
