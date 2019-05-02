import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import './NotificationUpdatePage.css'
import Notification from '../../Notification/Notification'
import { updateNotification, updateNotificationClear, updateNotificationLoading, } from '../../../actions/notification/updatedNotification'




class NotificationUpdatePage extends Component {

    state = {
        ...this.props.notification,
        componentTitle: this.props.notification ? "Update Notification" : "Create Notification"
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.clear();
    }

    componentDidUpdate() {
        if (this.props.success) {
            const path = `/${this.props.name}`;
            this.props.history.push(path);
        }
    }


    componentWillUnmount() {
    }

    updateField = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    save = () => {

        this.props.updateNotification(this.state)
    }

    render() {
        if (this.props.loading)
            return <h1> LOADING </h1>
        if (this.props.error)
            return <h1> ERROR </h1>
        else
        return (
            <div className="update-page-container">
                <h1 className="update-title"> {this.state.componentTitle} </h1>
                <div className="two-bar-container">
                    <div className="bar-block">
                            <Notification
                                notification={this.state}
                            />
                    </div>

                    <div className="update-block">
                        <form>
                            <label>
                                <h3>Title:</h3>
                                <input
                                    value={this.state.title ? this.state.title : ""}
                                    name="title"
                                    onChange={this.updateField}
                                />
                            </label>
                            <br />
                            <label>
                                Body:
                                <textarea className="notification-update"
                                    value={this.state.body ? this.state.body : ""}
                                    name="body"
                                    onChange={this.updateField}
                                />
                            </label>
                            <br />
                            <label>
                                Icon:
                                <input
                                    value={this.state.icon ? this.state.icon : ""}
                                    name="icon"
                                    onChange={this.updateField}
                                />
                            </label>
                            <br />
                            <label>
                                Image:
                                <input
                                    value={this.state.image ? this.state.image : ""}
                                    name="image"
                                    onChange={this.updateField}
                                />
                            </label>
                        </form>
                    </div>
                </div>
                <div className="save-button">
                    <button className="submit-button"
                        onClick={this.save}>
                        Save
                    </button>
                </div>
            </div>

        );
    }
          
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateNotification: (notification) => dispatch(updateNotification(notification)),
        load: () => dispatch(updateNotificationLoading()),
        clear: () => dispatch(updateNotificationClear())
    }
}

const mapStateToProps = state => ({
    notification: state.notification.activeNotification.notification,
    error: state.notification.updatedNotification.error,
    loading: state.notification.updatedNotification.loading,
    name: state.authentication.user ? state.authentication.user.userName : null,
    success: state.notification.updatedNotification.success
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotificationUpdatePage))
