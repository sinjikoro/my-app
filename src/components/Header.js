import React from 'react';
import './Header.css';
import { Button } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

export default function Header(props) {
  const {title, menu} = props;

  return (
    <header className="head" role="navigation">
      <Toolbar>
        <h1 className="header_logo"><Link to="/">{title}</Link></h1>
      </Toolbar>
      <Toolbar style={{justifyContent:'space-between', overflowX: 'auto'}}>
        <ul className="header_nav">
          <li><Link to="/game"><Button color='Primary'>Game</Button></Link></li>
          <li><Link to="/profile"><Button color='Primary'>profile</Button></Link></li>
          <li><Link to="/profile"><Button color='Primary'>profile</Button></Link></li>
          <li><Link to="/profile"><Button color='Primary'>profile</Button></Link></li>
          <li><Link to="/profile"><Button color='Primary'>profile</Button></Link></li>
          <li><Link to="/profile"><Button color='Primary'>aaa</Button></Link></li>
          <li><Link to="/profile"><Button color='Primary'>profile</Button></Link></li>
          <li><Link to="/profile"><Button color='Primary'>profile</Button></Link></li>
          <li><Link to="/profile"><Button color='Primary'>profile</Button></Link></li>
        </ul>
      </Toolbar>
    </header>
  )
};
