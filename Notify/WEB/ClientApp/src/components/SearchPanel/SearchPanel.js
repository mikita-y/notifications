import React, { Component } from 'react';
import Select from 'react-select';

class Sorting extends Component {

    constructor(props) {
        super(props);
        this.state = { sorting: "AZ" };
    }
    updateState(element) {
        console.log("update", element.value);
        this.setState({ value: element.value });
    }
    render() {
        var options = [
            { value: 'AZ', label: 'A-Z' },
            { value: 'ZA', label: 'Z-A' },
            { value: 'Newer', label: 'Newer' },
            { value: 'Older', label: 'Older' }
        ];
        return (
            <Select
                name="form-field-name"
                value={this.state.value}
                options={options}
                onChange={this.updateState.bind(this)}
            />
        );
    }

}


class FilterBy extends Component {

    constructor(props) {
        super(props);
        this.state = { filterBy: null };
    }
    updateState(element) {
        console.log("update", element.value);
        this.setState({ value: element.value });
    }
    render() {
        var options = [
            { value: 'Title', label: 'Title' },
            { value: 'Body', label: 'Body' },
            { value: 'Image', label: 'Image' },
            { value: 'Action', label: 'Action' }
        ];
        return (
            <Select
                name="form-field-name"
                value={this.state.value}
                options={options}
                onChange={this.updateState.bind(this)}
            />
        );
    }

}




class Paging extends Component {

    constructor(props) {
        super(props);
        this.state = { paging: 10 };
    }
    updateState(element) {
        console.log("update", element.value);
        this.setState({ value: element.value });
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
                value={this.state.value}
                options={options}
                onChange={this.updateState.bind(this)}
            />
        );
    }

}


const SearchText = () => {
    return (
        <div>
            <input placeholder="search" />
        </div>
    )
};



 export default class SearchPanel extends Component {

     state = {
         Sorting: 'AZ',
         FilterBy: null,
         SearchText: null,
         Paging: 10
     };



    render() {
        return (
            <div>

                <table border="1">
                    <tr>
                        <td> Sorting </td>
                        <td> FilterBy</td>
                        <td> SearchText</td>
                        <td> Paging</td>
                    </tr>
                    <tr>
                        <td> <Sorting /> </td>
                        <td> <FilterBy /> </td>
                        <td> <SearchText /> </td>
                        <td> <Paging /> </td>
                    </tr>
                </table>
                <p></p>

                <p><input type="submit" value="Отправить" /></p>
            </div>
        )
    }
}

/*
const SearchPanel = () => {
    return (
        <div>

            <table border="1">
                <tr>
                    <td> Sorting </td>
                    <td> FilterBy</td>
                    <td> SearchText</td>
                    <td> Paging</td>
                </tr>
                <tr>
                    <td> <Sorting /> </td>
                    <td> <FilterBy /> </td>
                    <td> <SearchText /> </td>
                    <td> <Paging /> </td>
                </tr>
            </table>
            <p></p>
            
            <p><input type="submit" value="Отправить" /></p>
        </div>
        )
};*/



//export default SearchPanel;