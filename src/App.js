import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Book from './components/Book';
import book from './book';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Book {...book} />
      </BrowserRouter>
    );
  }
}

export default App;
