import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux'

import { sortNotifications } from '../../../../actions/notificationList'
import { getNotificationList } from '../../../../actions/notificationList'


class Sorting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option: {
                value: 0,
                label: 'A-Z'
            }
        };
    }

    updateState = (element) => {
        this.setState({ option: element });
        this.props.sort(element.value);
        this.props.updateNotificationList();
    }

    render() {
        var options = [
            { value: 0, label: 'A-Z' },
            { value: 1, label: 'Z-A' },
            { value: 2, label: 'Newer' },
            { value: 3, label: 'Older' }
        ];
        return (
            <Select
                name="form-field-name"
                value={this.state.option}
                options={options}
                onChange={this.updateState.bind(this)}
            />
        );
    }

}


const mapStateToProps = state => ({
    sorting: state.notificationList.sorting
})

const mapDispatchToProps = (dispatch) => {
    return {
        sort: (sorting) => dispatch(sortNotifications(sorting)),
        updateNotificationList: () => dispatch(getNotificationList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sorting)