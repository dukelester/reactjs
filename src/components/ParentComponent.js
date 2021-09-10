import React, { Component } from 'react';
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            parentName: 'Parent',
        };
        this.greetParent = this.greetParent.bind(this); //bind the function
    }

greetParent(childName){
        // alert("Hello " + this.state.parentName);  using the template literals
        alert(`Hello ${this.state.parentName} from ${childName}`)
}

    render(){
        return (
            <div>
                <ChildComponent parentHandler={this.greetParent}/>

            </div>

        )

    }
};

export default ParentComponent;