import React, { Component } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import NotificationList from '../NotificationList/NotificationList';



class App extends Component {
    render() {
        return (
            <div>
                <AppHeader />
                <SearchPanel />
                <NotificationList />
            </div>
       )
    }
}

export default App;