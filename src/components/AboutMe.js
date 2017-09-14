import React, { Component } from 'react';
import Profile from '../images/profile.png';

export default class AboutMe extends Component {
  render() {
    return (
      <div className='aboutme' id='AboutMe'>
        <div className='about'>
          <h1>About Me</h1>
          <img src={Profile} alt="profile"/>
          <p>
            My name is Miguel! I have a love for the arts and for technology. I am now a potter turned developer and hoping that I can continue to create on the web and on the potter's wheel! Definitely loving how much there is to learn in the programming world. Up until now I have dabbled in NodeJs, HTML5, CSS3, JavaScript, React JavaScript, and React Redux. Pumped to keep learning more languages along the way too!
          </p>
        </div>
      </div>
    )
  }
}
