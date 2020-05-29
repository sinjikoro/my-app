import React from 'react';
import './Header.css';
import {
  Link
} from 'react-router-dom';

const Header = () => {
  return (
    <header className="head" role="navigation">
      <h1 className="header_logo"><Link to="/">shinnaga site</Link></h1>
      <ul className="header_nav">
        <li><Link to="/game">Game</Link></li>
        <li><Link to="/profile">profile</Link></li>
      </ul>
    </header>
  )
};

export default Header;
