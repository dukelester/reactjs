import React, { Component } from 'react';
import UserConsumer from './UserContext';

class ComponentF extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0

        }

    }
    render() {
        return(
            // <div>
            //     Hello Component F<b/>
            // </div>
            <UserConsumer>
                {
                    username =>{
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}
export default ComponentF;
