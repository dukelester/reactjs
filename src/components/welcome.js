import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const {name, heroName } = this.props;
        console.log(this.props)
        return (
            <div>
            {/*<h2>This is the class component {this.props.name}  a.k.a {this.props.heroName}Hurray!!</h2>*/}

                <h2>This is the class component {name}  a.k.a {heroName}Hurray!!</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome