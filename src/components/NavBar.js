import React, { Component } from 'react';

export default class NavBar extends Component {


  render() {
    return (
      <nav className='navbar'>
        <a href='#AboutMe' to='#AboutMe'>About Me</a>
        <a href='#Projects' to='#Projects'>Projects</a>
        <a href='#Contact' to='#Contact'>Contact Me</a>
      </nav>
    )
  }
}
