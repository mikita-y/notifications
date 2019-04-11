import React, { Component } from 'react';
import Select from 'react-select';

export default class FilterBy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option: {
                value: null,
                label: 'No'
            }
        };
    }

    updateFilter = (element) => {
        this.setState({ option: element });
        this.props.updateFilterby(element.value);
    }

    render() {

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
                value={this.state.option}
                options={options}
                onChange={this.updateFilter.bind(this)}
            />
        );
    }

}