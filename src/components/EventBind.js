import React, { Component } from 'react';

class EventBind extends Component {

    constructor(props){ //constructor
        super(props)//inheriting the super function

        this.state = { //defining the state object
            message: "Hello Duke Lester"
        }
        //bind here

        this.myHandler = this.myHandler.bind(this);
    }
    myHandler (){//creating the handler
        console.log(this);
        this.setState(//setting the state using the setState() method
            {message : "Good bye Mr Lester"}
        )//object


    }

    render(){

        return (
            <div> <br/><br/> <div>{this.state.message}</div><br/>
            {/*<button className="btn btn-secondary" onClick={this.myHandler.bind(this)}> Click Here</button>*/}
            {/*    <button className="btn btn-secondary" onClick={() => this.myHandler()}> Click Here</button>*/}
                <button className="btn btn-secondary" onClick={this.myHandler}> Click Here</button>

            </div>
        )

    }
}

export default EventBind;