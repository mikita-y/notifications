import React from 'react';
import { connect } from 'react-redux'


function AuthenticationError({ error }) {

    if(!error)
        return null;
    else
        return <h4> {error} </h4>
}


const mapStateToProps = state => ({
    error: state.authentication.errorMessage,
})

export default connect(mapStateToProps)(AuthenticationError)
