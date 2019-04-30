import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux'

import { setPageSize } from '../../../../actions/notificationList'
import { getNotificationList } from '../../../../actions/notificationList'

class Paging extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option: {
                value: 10,
                label: 10
            }
        };
    }

    updatePaging = (element) => {
        this.setState({ option: element });
        this.props.setPageSize(element.value);
        this.props.updateNotificationList();
    }

    render() {
        var options = [
            { value: 10, label: 10 },
            { value: 15, label: 15 },
            { value: 20, label: 20 }
        ];
        return (
            <Select
                name="form-field-name"
                value={this.state.option}
                options={options}
                onChange={this.updatePaging.bind(this)}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPageSize: (value) => dispatch(setPageSize(value)),
        updateNotificationList: () => dispatch(getNotificationList())
    }
}

export default connect(null, mapDispatchToProps)(Paging)