import React, { Component } from 'react'
import { connect } from 'react-redux'


import SearchPanel from './SearchPanel/SearchPanel'
import NotificationList from './NotificationList/NotificationList'
import Notification from './Notification/Notification'
import { getNotificationList } from '../../actions/notificationList'


class NotificationListPage extends Component {

    state = {
        userId: localStorage.getItem("userId"),
        sorting: 0,
        filterBy: null,
        page: 1,
        pageSize: 10,
        searchText: null
    }

    componentDidMount() {
        this.props.sortingNotificationList(this.state);
    }

    componentDidUpdate() {
        this.props.sortingNotificationList(this.state);
    }

    updateSorting = (newsorting) => {

        let newsort = this.state;
        newsort.sorting = newsorting;
        this.setState({ newsort });
    }

    updateFilterby = (newfilterby) => {

        let newsort = this.state;
        newsort.filterBy = newfilterby;
        this.setState({ newsort });
    }

    updatePageSize = (newpageSize) => {

        let newsort = this.state;
        newsort.pageSize = newpageSize;
        this.setState({ newsort });
    }

    updateSearchText = (newsearchText) => {

        let newsort = this.state;
        newsort.searchText = newsearchText;
        this.setState({ newsort });
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
                <NotificationList />
                <Notification
                    sort={this.state}
                />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        sortingNotificationList: (sort) => dispatch(getNotificationList(sort))
    }
}

export default connect(null, mapDispatchToProps)(NotificationListPage)

