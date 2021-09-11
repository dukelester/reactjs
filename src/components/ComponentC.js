import React, { Component } from 'react';
import ComponentE from "./ComponentE";

class ComponentC extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0

        }

    }
    render() {
        return(

            <div>
                Hello Component C<b/>
                <div>
                    <ComponentE/>

                </div>

            </div>
        )
    }
}
export default ComponentC;
