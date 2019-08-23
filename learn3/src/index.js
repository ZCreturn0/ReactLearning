import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            status: !state.status
        }))
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.status ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle></Toggle>,
    document.getElementById('root')
);