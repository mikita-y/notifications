import React from 'react';
import { connect } from 'react-redux'

import { deleteToken } from '../../actions/authentication'


const Logout = ({ logout }) => {
    return (
        <div>
            <button
                onClick={() => { localStorage.clear(), logout() }}>
                Logout
            </button>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(deleteToken())
    }
}

export default connect(null, mapDispatchToProps)(Logout)