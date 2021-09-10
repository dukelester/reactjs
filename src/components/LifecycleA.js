import React, { Component } from 'react';
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'duke lester'

        }
        console.log('LifecycleA constructor');

    }
    static getDerivedStateFromProps(props, state) {
        console.log(' LifecycleA getDerivedStateFromProps');
        return null

    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount');
    }
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate shouldComponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }
    changeState = () =>{
        this.setState({
            name:'Lester Softyweares Inc'
        }
            )
    }
    render(){
        console.log('LifecycleA render')

        return (
            <div>
                <h1>LifecycleA</h1>
                <button className='btn btn-danger' onClick={this.changeState}>Change state</button>
        <LifecycleB/>
            </div>
        )

    }

}

export default LifecycleA;