import React, { Component } from 'react';
import Select from 'react-select';

export default class Paging extends Component {

    constructor(props) {
        super(props);
        this.state = { paging: 10 };
    }
    updateState(element) {
        this.setState({ value: element.value });
    }
    render() {
        const { updatePageSize } = this.props;

        const updateState = (element) => {
            this.setState({ value: element.value });
            updatePageSize(element.value);
        }

        var options = [
            { value: 10, label: 10 },
            { value: 15, label: 15 },
            { value: 25, label: 25 }
        ];
        return (
            <Select
                name="form-field-name"
                value={this.state.value}
                options={options}
                onChange={updateState}
            />
        );
    }
}