import React, { Component } from 'react';

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
                onClick={this.incrementHandler}
                >Clicked {count} times</button>
            </div>
        )
    }
}
export default MouseCounter;