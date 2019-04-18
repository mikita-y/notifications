import React, { Component } from 'react';

import Sorting from '../SearchPanel/Sorting';
import FilterBy from '../SearchPanel/FilterBy';
import Paging from '../SearchPanel/Paging';
import SearchText from '../SearchPanel/SearchText';



 export default class SearchPanel extends Component {

     constructor(props) {
         super(props);
     }

     render() {
        const { updateSorting, updateFilterby, updatePageSize, updateSearchText } = this.props;

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
                                updateSorting={updateSorting}
                            /> </td>
                            <td> <FilterBy
                                updateFilterby={updateFilterby}
                            /> </td>
                            <td> <SearchText
                                updateSearchText={updateSearchText}
                            /> </td>
                            <td> <Paging
                                updatePageSize={updatePageSize}
                            /> </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
     }
 }