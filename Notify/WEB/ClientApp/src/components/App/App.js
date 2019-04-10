import React, { Component } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import NotificationListPage from '../NotificationListPage/NotificationListPage';



export default class App extends Component {

    render() {
        return (
            <div>
                <AppHeader />
                <NotificationListPage />
            </div>
       )
    }
}
