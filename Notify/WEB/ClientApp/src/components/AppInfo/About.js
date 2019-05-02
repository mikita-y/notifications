import React from 'react';
import { connect } from 'react-redux'
import './About.css'
import Notification from '../Notification/Notification'
import { getRandomNotification } from '../../actions/randomNotification'




function About({ getRandomNotification, notification }) {

    const initNotification = {
        title: "Notification", 
        body: "Body of that notification"
    }

    getRandomNotification();

    return (
        <div className="two-bar-container">
            <div className="bar-block">
                <div className="about-info">
                    <h3>Notification Service</h3>
                    <p>Information about Notification Service</p>
                </div>
            </div>
            <div className="bar-block">
                
                    <Notification
                        notification={notification ? notification : initNotification}
                    />
                
            </div>

        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        getRandomNotification: () => dispatch(getRandomNotification())
    }
}

const mapStateToProps = state => ({
    notification: state.randomNotification.notification
})

export default connect(mapStateToProps, mapDispatchToProps)(About)