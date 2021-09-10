import React, { Component, PureComponent} from 'react';
import RegularComponent from "./RegularComponent";
import PureComp from "./PureComponent";

class ParentComp extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            name:'Duke Lester'

        }
    }
    componentDidMount(){
        setInterval(() =>{
            this.setState({name:'Duke Lester'})
        }, 2000)
    }
    render(){
        console.log("************Parent component ********************")
        return (
            <div>

                The Parent Component in React

                <RegularComponent name={this.state.name}></RegularComponent>
            <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp;