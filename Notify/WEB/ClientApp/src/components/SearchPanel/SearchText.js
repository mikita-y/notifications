import React, { Component } from 'react';


export default class Paging extends Component {

    state = {
        searchText: null
    };

    onSearchChange = (e) => {
        let searchText = e.target.value;
        if (searchText == '')
            searchText = null;
        this.setState({ searchText });
        this.props.updateSearchText(searchText);
    };

    render() {
        return (
            <input type="text"
                placeholder="search"
                value={this.state.searchText}
                onChange={this.onSearchChange}
            />
        );
    }
}