import React, { Component } from 'react';


import SearchPanel from '../SearchPanel/SearchPanel';
import NotificationList from '../NotificationList/NotificationList';
import Notification from '../Notification/Notification';

export default class NotificationListPage extends Component {

    state = {
        sort: {
            sorting: 0,
            filterby: null,
            searchText: null,
            page: 1,
            pageSize: 10
        },
        notificationId : null
    }

    updateSorting = (newsorting) => {

        let newsort = this.state.sort;
        newsort.sorting = newsorting;
        this.setState({
            sort: newsort
        })
    }

    updateFilterby = (newfilterby) => {

        let newsort = this.state.sort;
        newsort.filterby = newfilterby;
        this.setState({
            sort: newsort
        })
    }

    updatePageSize = (newpageSize) => {

        let newsort = this.state.sort;
        newsort.pageSize = newpageSize;
        this.setState({
            sort: newsort
        })
    }

    updateSearchText = (newsearchText) => {

        let newsort = this.state.sort;
        newsort.searchText = newsearchText;
        this.setState({
            sort: newsort
        })
    }


    onToggleNotification = (newnotificationId) => {
        this.setState({
            notificationId: newnotificationId
        })
    }


    render() {
        return (
            <div>
                <SearchPanel
                    updateSorting={this.updateSorting}
                    updateFilterby={this.updateFilterby}
                    updatePageSize={this.updatePageSize}
                    updateSearchText={this.updateSearchText}
                />
                <NotificationList
                    sort={this.state.sort}
                onToggleNotification={this.onToggleNotification}
                />

                <Notification
                    id={this.state.notificationId}
                />

            </div>
        )
    }
}

