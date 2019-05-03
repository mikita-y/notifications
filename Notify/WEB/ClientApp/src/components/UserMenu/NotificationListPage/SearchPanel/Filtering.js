import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux'

import { filterNotifications } from '../../../../actions/notificationList'
import { getNotificationList } from '../../../../actions/notificationList'

class Filtering extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option: {
                value: "",
                label: 'No'
            }
        };
    }

    updateFilter = (element) => {
        this.setState({ option: element });
        this.props.filter(element.value);
        this.props.updateNotificationList();
    }

    render() {
        var options = [
            { value: 'No', label: 'No' },
            { value: 0, label: 'Title' },
            { value: 1, label: 'Body' },
            { value: 2, label: 'Image' },
            { value: 3, label: 'Icon' }
        ];
        return (
            <Select 
                name="form-field-name"
                value={this.state.option }
                options={options}
                onChange={this.updateFilter.bind(this)}
            />
        );
    }
}



const mapStateToProps = state => ({
    filtering: state.notificationList.filtering
})

const mapDispatchToProps = (dispatch) => {
    return {
        filter: (filtering) => dispatch(filterNotifications(filtering)),
        updateNotificationList: () => dispatch(getNotificationList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtering)