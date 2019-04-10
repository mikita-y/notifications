import React, { Component } from 'react';
import Select from 'react-select';



export default class Sorting extends Component {

    constructor(props) {
        super(props);
        this.state = { sorting: 0 };
    }

    render() {
        const { updateSorting } = this.props;

        const updateState = (element) => {
            this.setState({ value: element.value });
            updateSorting(element.value);
        }

        var options = [
            { value: 0, label: 'A-Z' },
            { value: 1, label: 'Z-A' },
            { value: 2, label: 'Newer' },
            { value: 3, label: 'Older' }
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