import React, { Component } from 'react';
import Select from 'react-select';

export default class FilterBy extends Component {

    constructor(props) {
        super(props);
        this.state = { filterBy: null };
    }
    updateState(element) {
        this.setState({ value: element.value });
    }
    render() {

        const { updateFilterby } = this.props;

        const updateState = (element) => {
            this.setState({ value: element.value });
            updateFilterby(element.value);
        }

        var options = [
            { value: null, label: 'No' },
            { value: 0, label: 'Title' },
            { value: 1, label: 'Body' },
            { value: 2, label: 'Image' },
            { value: 3, label: 'Action' }
        ];
        return (
            <Select
                name="form-field-name"
                value={this.state.value}
                options={options}
                onChange={updateState.bind(this)}
            />
        );
    }

}