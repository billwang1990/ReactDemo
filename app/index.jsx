import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
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