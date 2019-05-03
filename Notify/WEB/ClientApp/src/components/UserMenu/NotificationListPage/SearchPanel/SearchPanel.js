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
                 <table border="0" >
                     
                    <tbody>
                        <tr>
                             <td> <h3>Sorting</h3> </td>
                             <td> <h3>FilterBy</h3></td>
                             <td> <h3>SearchText</h3></td>
                             <td> <h3>Paging</h3></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr >
                            <td width="18%"> <Sorting /> </td>
                            <td width="18%"> <Filtering /> </td>
                            <td> <SearchText /> </td>
                             <td width="18%"> <Paging /> </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
     }
 }