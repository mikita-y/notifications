import React, { useState } from 'react';
import { connect } from 'react-redux'

import { loginRequest } from '../../actions/authentication'

import  AuthenticationError  from './AuthenticationError'

function LoginForm({ authenticate}) {
    const [form, setValues] = useState({
        userName: "",
        password: ""
    });

    const updateField = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const getToken = () => {
        authenticate(form);
    }

    return (
        <div>
            <form>
                <label>
                    Username:
                <input
                        value={form.userName}
                        name="userName"
                        onChange={updateField}
                    />
                </label>
                <br />
                <label>
                    Password:
                <input
                        value={form.password}
                        name="password"
                        type="password"
                        onChange={updateField}
                    />
                </label>
                <br />
            </form>
            <button
                onClick={getToken}>
                Submit
            </button>

            <AuthenticationError />
        </div>

    );
}



const mapDispatchToProps = dispatch => {
    return {
        authenticate: (user) => dispatch(loginRequest(user))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)
