import React from 'react';
import './Header.css';
import {
  Link
} from 'react-router-dom';
import {
  Button
} from '@material-ui/core';

const Header = () => {
  return (
    <header className="head" role="navigation">
      <h1 className="header_logo"><Link to="/">shinnaga site</Link></h1>
      <ul className="header_nav">
        <li><Link to="/game"><Button color='Primary'>Game</Button></Link></li>
        <li><Link to="/profile"><Button color='Primary'>profile</Button></Link></li>
      </ul>
    </header>
  )
};

export default Header;
