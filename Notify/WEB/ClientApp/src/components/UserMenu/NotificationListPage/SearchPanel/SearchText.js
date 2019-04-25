import React, { Component } from 'react';
import { connect } from 'react-redux'

import { setSearchText } from '../../../../actions/notificationList'
import { getNotificationList } from '../../../../actions/notificationList'

class SearchText extends Component {

    state = {
        searchText: null
    };

    onSearchChange = (e) => {
        let searchText = e.target.value;
        if (searchText == '')
            searchText = null;
        this.setState({ searchText });


        this.props.setSearchText(searchText);
        this.props.updateNotificationList();
    };

    render() {
        return (
            <input type="text"
                placeholder="search"
                value={this.state.searchText ? this.state.searchText : ''}
                onChange={this.onSearchChange}
            />
        );
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        setSearchText: (text) => dispatch(setSearchText(text)),
        updateNotificationList: () => dispatch(getNotificationList())
    }
}

export default connect(null, mapDispatchToProps)(SearchText)