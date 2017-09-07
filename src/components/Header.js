import React, { Component } from 'react';
import Yellow from '../yellow.jpg';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img src={Yellow} alt="mug"/>
        <p className='hi'>
          Hi, my name is Miguel!
        </p>
      </div>
    )
  }
}
