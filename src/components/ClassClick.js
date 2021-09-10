import React, { Component } from 'react';

class ClassClick extends Component {
     clickHandler1 (){
        console.log("Hello button clicked by Lester");
    }
    render() {
        function clickHandler (){
            console.log("The class button was clicked by duke lester");
        }
        return (
            <div className='div-1'>
                <br/><br/>
                <button className="btn btn-dark" onClick={clickHandler}> Class Click </button>

                <button className="btn btn-warning" onClick={this.clickHandler1}> Class Click </button>
            </div>
        )
    }
}

export default ClassClick;