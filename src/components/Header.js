import React, { Component } from 'react';
import Yellow from '../images/yellow3.jpg';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        {/* <img id='mug' src={Yellow} alt="mug"/> */}
        <p className='hi'>
          Hi, my name is Miguel!
        </p>
      </div>
    )
  }
}
