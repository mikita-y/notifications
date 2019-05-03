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
        if (this.props.isUpdate)
            this.props.updateNotificationList();
    };

    render() {
        if (this.props.inputActive)
            return (
                <input type="text"
                    placeholder="search"
                    value={this.state.searchText ? this.state.searchText : ''}
                    onChange={this.onSearchChange}
                />
            );
        return (
            <input type="text"
                disabled
                placeholder="search"
                value={this.state.searchText ? this.state.searchText : ''}
                onChange={this.onSearchChange}
            />
        );

    }
}

const mapStateToProps = state => ({
    inputActive: state.notificationList.filtering == 2 || state.notificationList.filtering == 3 ? false : true,
    isUpdate: state.notificationList.filtering != 'No' ? true : false
})

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchText: (text) => dispatch(setSearchText(text)),
        updateNotificationList: () => dispatch(getNotificationList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchText)