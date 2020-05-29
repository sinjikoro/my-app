import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <body>
      <Header />
      <main>
        <Content />
        <Navigation />
      </main>
      <Footer />
    </body>
  )
}

export default App;