import React, { Component } from 'react';

import Sorting from './Sorting';
import FilterBy from './FilterBy';
import Paging from './Paging';
import SearchText from './SearchText';



 export default class SearchPanel extends Component {

     constructor(props) {
         super(props);
     }

     render() {
        return (
            <div>

                <table border="1">
                    <tbody>
                    <tr>
                        <td> Sorting </td>
                        <td> FilterBy</td>
                        <td> SearchText</td>
                        <td> Paging</td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                            <td> <Sorting
                                updateSorting={this.props.updateSorting}
                            /> </td>
                            <td> <FilterBy
                                updateFilterby={this.props.updateFilterby}
                            /> </td>
                            <td> <SearchText
                                updateSearchText={this.props.updateSearchText}
                            /> </td>
                            <td> <Paging
                                updatePageSize={this.props.updatePageSize}
                            /> </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
     }
 }