import React, { Component } from 'react';
import MB from '../images/MB.png';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img id='MB' src={MB} alt="MB"/>{/*Made with Sketch*/}
      </div>
    )
  }
}
