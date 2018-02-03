import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/loginForm/loginForm';
import GiphyCall from './components/giphyCall/giphyCall';
import GiphyList from './components/giphyList/giphyList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GiphyList></GiphyList>
      </div>
    );
  }
}

export default App;
