import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';
import book from './book';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Book {...book} />
      </div>
    );
  }
}

export default App;
