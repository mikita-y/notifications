import React from 'react';
import { connect } from 'react-redux'


function AuthenticationError({ error }) {

    if(!error)
        return null;
    else
        return <p> {error} </p>
}


const mapStateToProps = state => ({
    error: state.authentication.errorMessage,
})

export default connect(mapStateToProps)(AuthenticationError)
