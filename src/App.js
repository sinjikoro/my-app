import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';

const menu = [
  {title: 'Game', url:'/game'},
  {title: 'Profile', url:'/profile'}
];

const App = () => {
  return (
    <React.Fragment>
      <Router>
          <Header title='shinnaga page' menu={menu} />
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