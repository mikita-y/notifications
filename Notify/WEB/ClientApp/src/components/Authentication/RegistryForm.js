import React, { useState } from 'react';
import { connect } from 'react-redux'

import { registryRequest } from '../../actions/authentication'

function RegistryForm({ authenticate }) {
    const [form, setValues] = useState({
        email: "",
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
                    Email:
                <input
                        value={form.email}
                        name="email"
                        onChange={updateField}
                    />
                </label>
                <br />
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
        </div>

    );
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (user) => dispatch(registryRequest(user))
    }
}

export default connect(null, mapDispatchToProps)(RegistryForm)
