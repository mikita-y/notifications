import React, { Component } from 'react';
import Select from 'react-select';



export default class Sorting extends Component {

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
        this.props.updateSorting(element.value);
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