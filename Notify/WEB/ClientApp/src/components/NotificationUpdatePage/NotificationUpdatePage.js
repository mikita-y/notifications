import React, { Component } from 'react'
import { connect } from 'react-redux'



///// неготовый компонент
class NotificationUpdatePage extends Component {


    state = {
        id: null,
        title: null,
        body: null,
        icon: null,
        image: null,
        notificationActions: null
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
       /* this.notificationService
            .getNotification(this.props.notificationId)
            .then((obj) => {
                this.setState({
                    id: obj.id,
                    title: obj.title,
                    body: obj.body,
                    icon: obj.icon,
                    image: obj.image,
                    notificationActions: obj.notifications
                });
            });*/
    }

    render() {
        return (
            /*
            <div>
                <h2> UPDATE NOTIFICATION </h2>
                <h3>Title </h3>
                <input type="text"
                    placeholder="title"
                    value={this.state.title}
                    onChange={this.titleChange}
                />

                <h3>Body </h3>
                <input type="text"
                    placeholder="body"
                    value={this.state.body}
                    onChange={this.bodyChange}
                />

                <h3>Icon </h3>
                <input type="text"
                    placeholder="icon"
                    value={this.state.icon}
                    onChange={this.iconChange}
                />

                <h3>Image </h3>
                <input type="text"
                    placeholder="image"
                    value={this.state.image}
                    onChange={this.imageChange}
                />

                <button
                    onClick={this.save}>
                    SAVE
                </button>
            </div>
            */
            null
        );
    }

    save = () => {
        this.notificationService.notificationUpdate(this.state);
    }

    titleChange = (e) => {
        this.setState({ title: e.target.value });
    };

    bodyChange = (e) => {
        this.setState({ body: e.target.value });
    };

    iconChange = (e) => {
        this.setState({ icon: e.target.value });
    };

    imageChange = (e) => {
        this.setState({ image: e.target.value });
    };
}


const mapStateToProps = state => ({
    notificationId: state.notificationId
})

export default connect(mapStateToProps)(NotificationUpdatePage)
