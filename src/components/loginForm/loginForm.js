import React, { Component } from 'react';
import './loginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleSubmit() {
    fetch('http://localhost:4000/login',
          {
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
          })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div className="login-form-container">

          Username:
          <input type="text" name="username" onChange={this.handleUsernameChange}/>
          password:
          <input type="password" name="password" onChange={this.handlePasswordChange}/>
          <button type="button" onClick={this.handleSubmit}>Submit</button>

      </div>
    );
  }
}

export default LoginForm;
