import React, { Component } from 'react';
import './SearchPanel.css'

import Sorting from './Sorting';
import Filtering from './Filtering';
import Paging from './Paging';
import SearchText from './SearchText';



 export default class SearchPanel extends Component {

     constructor(props) {
         super(props);
     }

     render() {
         return (
             <div className="search-panel-container">
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
                            <td> <Sorting /> </td>
                            <td> <Filtering /> </td>
                            <td> <SearchText /> </td>
                            <td> <Paging /> </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
     }
 }