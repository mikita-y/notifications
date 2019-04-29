import React, { Component } from 'react';
import { connect } from 'react-redux'



class NotificationUpdatePage extends Component {

    state = {
        id: this.props.notification.id,
        title: this.props.notification.title,
        body: this.props.notification.body,
        icon: this.props.notification.icon,
        image: this.props.notification.image
    }

    constructor(props) {
        super(props);
        //this.setState({ ...props.notification});
    }


    updateField = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

     save = () => {
        console.log(this.props.notification)
     }

    render() {
        return (
            <div>
                <h1> Update </h1>
                <form>
                    <label>
                        Title:
                        <input
                            value={this.state.title ? this.state.title : ""}
                            name="title"
                            onChange={this.updateField}
                        />
                    </label>
                    <br />
                    <label>
                        Body:
                        <input
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
                <button
                    onClick={this.save}>
                    Save
                </button>
            </div>
        );
    }
          
}


const mapStateToProps = state => ({
    notification: state.notification.activeNotification.notification
})

export default connect(mapStateToProps)(NotificationUpdatePage)
