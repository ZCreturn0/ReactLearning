import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    // 挂载
    componentDidMount(){
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return (
            <div>
                <h2>Hello World</h2>
                <div>It is {this.state.date.toLocaleTimeString()}.</div>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock /> ,
    document.getElementById('root')
);