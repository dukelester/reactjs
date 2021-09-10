import React, { Component } from 'react';
import Greet from "./Greet";

class Message extends Component {
    constructor() {
        super()
        this.state = {Message: "welcome Vistor"}
    }


    changeMessage() {
        this.setState({
            Message: "Thank you for subscribing"
        });

    }

    render() {
        return (
            <div>
                <h2>{this.state.Message} </h2>
                <button type="submit" onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message