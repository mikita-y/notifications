import React from 'react';
import './NotificationAction.css'
import { withRouter } from 'react-router-dom';


function NotificationActions({ notification, history }) {

    function toUpdate() {
        const path = `/update`;
        history.push(path);
    }

    if (notification)
        return (
            <div className="notification-actions">
                <button className="notification-action"
                    onClick={() => toUpdate()}>
                    Update
                </button>
            </div>
        )
    else
        return null;
}

export default withRouter(NotificationActions)