import React, { Component } from 'react';
import Profile from '../images/profile.png';

export default class AboutMe extends Component {
  render() {
    return (
      <div className='aboutme' id='AboutMe'>
        <h1>About Me</h1>
        <div className='about'>
          <img src={Profile} alt="profile"/>
          <p>
            My name is Miguel! I am a potter turned developer and hoping that I can create on the web and on the potter's wheel! Until now I have dabbled in NodeJs, HTML5, CSS3, JavaScript, React JavaScript, and React Redux. Pumped to keep learning more languages along the way too!
          </p>
        </div>
      </div>
    )
  }
}
