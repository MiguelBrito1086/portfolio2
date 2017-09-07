import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <a href='#AboutMe'>About Me</a>
        <a href='#Projects'>Projects</a>
        <a href='#Contact'>Contact Me</a>
      </nav>
    )
  }
}
