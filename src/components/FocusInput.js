import React, { Component} from 'react';
import Input from "./Input";

class FocusInput extends Component {
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
    }
    clickHandler = () =>{
        this.componentRef.current.focusInput()
    }
    render(){
        console.log("************FocusInput component ********************")
        return (
            <div>
                <Input ref={this.componentRef}/>

                <button className='btn btn-primary' onClick={this.clickHandler}> Focus Input </button>
            </div>
        )
    }
}

export default FocusInput;