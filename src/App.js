import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <Router>
          <Header />
          <main>
            <Content />
            <Navigation />
          </main>
          <Footer />
      </Router>
    </ React.Fragment>
  )
}

export default App;