import React, { Component} from 'react';

class RegularComponent extends Component {
    constructor(props){
        super(props);
        this.setState = {

        }
    }
    render(){
        console.log("************Regular component ********************")
        return (
            <div>

                The Regular Component in React {this.props.name}
            </div>
        )
    }
}

export default RegularComponent;