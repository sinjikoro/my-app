import React from 'react';
import Game from './Game';
import Profile from './Profile';
import Top from './Top';
import './Content.css';
import {
  Switch,
  Route
} from 'react-router-dom';

const Content = () => {
  return (
    <div className='content'>
      <Switch>
        <Route path='/game'>
          <Game />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/'>
          <Top />
        </Route>
      </Switch>
    </div>
  )
}

export default Content;
