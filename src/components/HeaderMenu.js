import React from 'react';
import { Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import './HeaderMenu.css';
import PropTypes from 'prop-types';

export default function HeaderMenu(props) {
  const {menus} = props;

  return (
    <Toolbar>
      <ul className="header_nav">
        {menus.map((menu) => (
          <li><Link to={menu.url}><Button>{menu.title}</Button></Link></li>
        ))}
      </ul>
  </Toolbar>
  )
}

HeaderMenu.propTypes = {
  menus: PropTypes.array,
};
