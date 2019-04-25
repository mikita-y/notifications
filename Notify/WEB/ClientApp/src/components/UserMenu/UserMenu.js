import React from 'react';
import './UserMenu.css'


import NotificationListPage from './NotificationListPage/NotificationListPage';
//import NotificationUpdatePage from '../NotificationUpdatePage/NotificationUpdatePage';


const UserMenu = () => {

    return (
        <div className="menu-container">
            <NotificationListPage />
        </div>
    )
}

export default UserMenu;