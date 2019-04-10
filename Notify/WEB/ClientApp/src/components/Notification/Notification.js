import React, { Component } from 'react';

import NotificationService from '../../services/NotificationService';


export default class Notification extends Component {

    notificationService = new NotificationService();

    state = {
        Id: null,
        Title: null,
        Body: null,
        Icon: null,
        Image: null,
        NotificationActions: null
    };

    constructor(props) {
        super(props);
    }

    updateNotification = (id) => {

        this.notificationService
            .getNotification(id)
            .then((obj) => {
                this.setState({
                    Id: obj.id,
                    Title: obj.title,
                    Body: obj.body,
                    Icon: obj.icon,
                    Image: obj.image,
                    NotificationActions: obj.notifications
                });
            });
    }
    render() {

        const { id } = this.props;
        if(id!=null)
            this.updateNotification(id);

        if (!id) {
            return null
        }
        else {
            return (
                <div>
                    <table border="1">
                        <tbody>
                            <tr>
                                <td>
                                    {this.state.Title}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {this.state.Body}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {this.state.Icon}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {this.state.Image}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }

}