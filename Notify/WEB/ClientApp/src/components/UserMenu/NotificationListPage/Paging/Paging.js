import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Paging.css'

import { setPageNumber } from '../../../../actions/notificationList'


function Paging({ lastPage, selectPage, setPageNumber }) {

    if (selectPage > lastPage && lastPage)
        setPageNumber(lastPage)

    function less() {
        if (selectPage == 1)
            return (
                <button disabled>
                    {"<<"}
                </button>
            )
        else
            return (<button
                onClick={() => setPageNumber(selectPage - 1)}>
                {"<<"}
            </button>
            )
    }

    function more() {
        if (selectPage == lastPage)
            return (
                <button disabled>
                    {">>"}
                </button>
            )
        else
            return (<button
                onClick={() => setPageNumber(selectPage + 1)}>
                {">>"}
                </button>
            )
    }


    return (
        <div className="paging-container">
            <button
                onClick={() => setPageNumber(1)}>
                1
            </button>
            {less()}
    
            <p>{selectPage}</p>

            {more()}
            <button
                onClick={() => setPageNumber(lastPage)}>
                {lastPage}
            </button>
        </div>

    )

}



const mapStateToProps = state => ({
    lastPage: state.notificationList.list.allPages,
    selectPage: state.notificationList.page
})

const mapDispatchToProps = (dispatch) => {
    return {
        setPageNumber: (number) => dispatch(setPageNumber(number)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Paging)