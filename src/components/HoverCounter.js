import React, { Component } from 'react';
import UpdatedComponent from "./WithCounter";

class HoverCounter extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }
    incrementHandler = () => {
        this.setState(prevState =>{
            return {count: prevState.count + 1}
        })

    }
    render() {
        const { count} = this.state;
        return(

            <div> Hello Higher components
             <h1 onMouseOver={this.incrementHandler}>{this.props.name} Hovered {count} times</h1>
            </div>
        )
    }
}
export default UpdatedComponent(HoverCounter);