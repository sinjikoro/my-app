import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HeaderMenu from './components/HeaderMenu';
import Box from '@material-ui/core/Box';
import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';

const menus = [
  {title: 'Game', url: '/game'},
  {title: 'Profile', url: '/profile'},
];

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Header title='shinnaga page' />
        <div className='header-nav'><HeaderMenu className='headerMenu' menus={menus} /></div>
        <Box className='main'>
          <Content />
          <Navigation />
        </Box>
        <Footer />
      </Router>
    </ React.Fragment>
  )
}

export default App;