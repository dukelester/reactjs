import React, { Component} from 'react';

class RefsDemo extends Component {
    constructor(props){
        super(props);
        this.InputRef = React.createRef();
        // creating a ref using the function React.CreateRef()
    }
    componentDidMount(){
        this.InputRef.current.focus();
        console.log(this.InputRef);
    }
    clickHandler = () =>{
        // alert(this.InputRef.current.value);
        console.log(this.InputRef.current.value);

    }
    render(){
        console.log("************RefsDemo ********************")
        return (
            <div>
                RefsDemo
                <input type="text" ref={this.InputRef}/>
                {/*using the created ref*/}
                <button onClick={this.clickHandler}>Click here</button>

            </div>
        )
    }
}

export default RefsDemo;