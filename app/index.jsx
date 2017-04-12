import React from 'react';
import ReactDOM from 'react-dom';

const { Component } = React;

class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Hello react！billwang</h1>
        </div>)
    }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Index />, app);