import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedIn: false

        }
    }
    render(){
        let message;
        if (this.state.isLoggededIn){
            message = <h2>Welcome Duke lester</h2>
        }
        else{
            message=<h2>Welcome Guest</h2>
        }

        // if (this.isLoggededIn) {
        //     return (
        //         <div><h3>Welcome Duke Lester</h3></div>
        //     )
        // } else {
        //     return <h3>Welcome guest</h3>
        // }
        return (
            <h2> {message}</h2>
        )


    }

}

export default  UserGreeting;