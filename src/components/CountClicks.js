import React, { Component } from 'react';
import UpdatedComponent from "./WithCounter";

class MouseCounter extends Component {
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
                <button type="submit"
                        className="btn btn-primary font-weight-bold mt-3"
                onClick={this.incrementHandler}>
                    {this.props.name}
                    Clicked {count} times</button>
            </div>
        )
    }
}
export default UpdatedComponent(MouseCounter);