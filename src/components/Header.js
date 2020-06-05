import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const {title} = props;

  return (
    <header className="head" role="navigation">
      <h1 className="header_logo"><Link to="/">{title}</Link></h1>
    </header>
  )
};

Header.propTypes = {
  title: PropTypes.string,
};
