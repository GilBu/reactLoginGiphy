import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/loginForm/loginForm';
import GiphyCall from './components/giphyCall/giphyCall';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">


          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-title">Welcome to React</h1>
        </header>


        <p className="App-intro">
          Hello Gilbert, Hello Ivan
        </p>

        <LoginForm ></LoginForm>
        <GiphyCall></GiphyCall>
      </div>
    );
  }
}

export default App;
