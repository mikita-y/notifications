import React, { Component } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import NotificationList from '../NotificationList/NotificationList';
import Notification from '../Notification/Notification';


export default class App extends Component {



    onToggleSelect = (id) => {
        console.log('onToggleSelect', id);
    }


    render() {
        return (
            <div>
                <AppHeader />
                <SearchPanel />
                <NotificationList
                    onToggleSelect={this.onToggleSelect}
                />

            </div>
       )
    }
}
