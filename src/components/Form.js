import React , { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            securityText:'',
            topic:'react'
        }
    }
    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value,
        })
    }
        handleEmailChange = (event) => {
            this.setState({
                email: event.target.value,
            })
        }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        })
    }
    handleSecurityText = (event) =>{
        this.setState({
            securityText :event.target.value
            })
    }
    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event =>{
        // console.log(this.state.username);
        // console.log(this.state.email);
        // console.log(this.state.password);
        // console.log.log(this.state.securityText);
        // console.log(this.state.topic);

        alert(`${this.state.username} ${this.state.email}${this.state.password} ${this.state.securityText} ${this.state.topic}`);
        event.preventDefault();

    }

    render(){
        return (
            <form className="form-text" onSubmit={this.handleSubmit}>
            <div className="form-control">My Form</div>
                <label className="form-label"> UserName </label>
            <input type="text" placeholder='User Name'
                   value={this.state.username}
                   onChange={this.handleUserNameChange}
                   required></input>
                <div>
                <label className="form-label"> Email Address </label>
                <input type="text" placeholder='User Email'
                       value={this.state.email}
                       onChange={this.handleEmailChange}
                       required></input>
                </div>
                <label className="form-label"> Password </label>
                <input type="text" placeholder='Enter password'
                       value={this.state.password}
                       onChange={this.handlePasswordChange}
                       required></input>
                <div>
                    <label> Security Text</label>
                    <input type="text" placeholder='Security'
                           value={this.state.securityText}
                           onChange={this.handleSecurityText}required></input>

                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='angular'>Angular</option>
                        <option value ='react'>React Js</option>
                        <option vlaue='vue'>Vue Js</option>


                    </select>

                </div>
                <button className='btn btn-primary' type='submit'>Register</button>


            </form>
        )

    }
}

export default Form;