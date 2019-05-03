import React from 'react';
import './Notification.css'



export default function Notification( {notification = null, error = null } ){


    function icon() {
        return notification.icon ? <img className="notification-icon" src={notification.icon} /> : null;
    }

    function image() {
        return notification.image ? <img className="notification-image" src={notification.image} /> : null;
    }

    if (error) {
        return <h1>Error</h1>
    }
    else
        if (!notification) {
            return null
        }
        else {
            return (
                <div className="notification-container">
                    <div className="notification-title">
                        {icon()}
                        <h4 className="notification-titles">{notification.title} </h4>
                    </div>
                    <div className="notification-body">
                        <p className="notification-bodies">{notification.body} </p>
                        {image()}
                    </div>
                </div>

            )
        }
}