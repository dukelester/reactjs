import React, { Component } from 'react';
import ComponentF from "./ComponentF";

class ComponentE extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0

        }

    }
    render() {
        return(

            <div>
                Hello Component E<b/>
                <div>
                    <ComponentF/>
                </div>

            </div>

        )
    }
}
export default ComponentE;
