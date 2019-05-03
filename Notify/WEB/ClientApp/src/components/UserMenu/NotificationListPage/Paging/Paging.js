import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Paging.css'

import { setPageNumber, getNotificationList } from '../../../../actions/notificationList'


class Paging extends Component{

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        if (this.props.selectPage > this.props.lastPage) {
            this.props.setPageNumber(this.props.lastPage)
        }
        this.props.updateNotificationList();   
    }

    less() {
        if (this.props.selectPage == 1)
            return (
                <button disabled className="paging-blocked-button">
                    {"<<"}
                </button>
            )
        else
            return (<button className="paging-button"
                onClick={() => this.props.setPageNumber(this.props.selectPage - 1)}>
                {"<<"}
            </button>
            )
    }

    more() {
        if (this.props.selectPage == this.props.lastPage)
            return (
                <button disabled className="paging-blocked-button">
                    {">>"}
                </button>
            )
        else
            return (<button className="paging-button"
                onClick={() => this.props.setPageNumber(this.props.selectPage + 1)}>
                {">>"}
                </button>
            )
    }

    render() {
        return (
            <div className="paging-container">
                <button className="paging-button"
                    onClick={() => this.props.setPageNumber(1)}>
                    1
                </button>
                {this.less()}

                <p className="page-number">{this.props.selectPage}</p>

                {this.more()}
                <button className="paging-button"
                    onClick={() => this.props.setPageNumber(this.props.lastPage)}>
                    {this.props.lastPage}
                </button>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    lastPage: state.notificationList.list.allPages ? state.notificationList.list.allPages : 1,
    selectPage: state.notificationList.page
})

const mapDispatchToProps = (dispatch) => {
    return {
        setPageNumber: (number) => dispatch(setPageNumber(number)),
        updateNotificationList: () => dispatch(getNotificationList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Paging)