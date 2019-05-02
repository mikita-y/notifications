import React from 'react';
import { connect } from 'react-redux'


function AuthenticationError({ error, loading }) {
    if (loading)
        return <h3 className="authentication"> Loading... </h3>
    if (error)
        return (
            <div>
                {error.map(item => (
                    <h4 key={item.id} >
                        {item.description}
                    </h4>))}
            </div>
            ) 
    else
        return null; 
}


const mapStateToProps = state => ({
    error: state.authentication.errorMessage,
    loading: state.authentication.loading
})

export default connect(mapStateToProps)(AuthenticationError)
