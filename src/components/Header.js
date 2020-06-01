import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';

export default function Header(props) {
  const {title, menus} = props;

  return (
    <header className="head" role="navigation">
      <Toolbar>
        <h1 className="header_logo"><Link to="/">{title}</Link></h1>
      </Toolbar>
      <Toolbar style={{justifyContent:'space-between', overflowX: 'auto'}}>
        <ul className="header_nav">
          {menus.map((menu) => (
            <li><Link to={menu.url}><Button color='Primary'>{menu.title}</Button></Link></li>
          ))}
        </ul>
      </Toolbar>
    </header>
  )
};

Header.propTypes = {
  title: PropTypes.string,
  menus: PropTypes.array,
};
