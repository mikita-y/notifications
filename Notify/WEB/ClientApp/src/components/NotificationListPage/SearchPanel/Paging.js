import React, { Component } from 'react';
import Select from 'react-select';

export default class Paging extends Component {

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
        this.props.updatePageSize(element.value);
    }

    render() {
        var options = [
            { value: 10, label: 10 },
            { value: 15, label: 15 },
            { value: 25, label: 25 }
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