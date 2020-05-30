import React from 'react';
import './Navigation.css'

export default class Navigation extends React.Component {
  componentDidMount() {
    let script = document.createElement("script");
    script.async = true;
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("charset", "utf-8");
    document.getElementById('_tw').appendChild(script);
  }
  componentWillUnmount() {

  }

  render() {
    return (
      <div className='navigation'>
        <a class="twitter-timeline" data-width="220" data-height="600" href="https://twitter.com/shinnaaaga?ref_src=twsrc%5Etfw">twitter</a>
        <div id='_tw' />
      </div>
    )
  }
}
