import React, { Component } from 'react';

import Login from '../Authentication/Login';
import Registry from '../Authentication/Registry';
import SelectorLogReg from '../Authentication/SelectorLogReg';

export default class LogReg extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        logreg: 0
    }

    selectLogReg = (number) => {
        this.setState({ logreg: number })
    }

    render() {
        if (this.state.logreg == 0) {
            return (
                <div>
                    <SelectorLogReg
                        selectLogReg={this.selectLogReg}
                    />
                    <Login />
                </div>
            );
        }
        else {
            return (
                <div>
                    <SelectorLogReg
                        selectLogReg={this.selectLogReg}
                    />
                    <Registry />
                </div>
            );
        }
    }
}