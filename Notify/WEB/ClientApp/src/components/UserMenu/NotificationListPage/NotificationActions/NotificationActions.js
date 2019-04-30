import React from 'react';
import './NotificationAction.css'
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';


function NotificationActions({ notification, history }) {

    function toUpdate() {
        const path = `/update`;
        history.push(path);
    }

    if (notification)
        return (
            <div className="notification-actions">
                <Button color="primary" className="px-4"
                    onClick={() => toUpdate()}>
                    Update
                </Button>
            </div>
        )
    else
        return null;
}

export default withRouter(NotificationActions)