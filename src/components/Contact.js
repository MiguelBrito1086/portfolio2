import React, { Component } from 'react';
import Linkedin from '../images/Linkedin.png';
import Medium from '../images/Medium.png';
import Email from '../images/Email.png';

export default class Contact extends Component {
  render() {
    return (
      <div className='contact' id='Contact'>
         <p>Please feel free to connect with me.</p>
         <div className='contactSection'>
          <div className='links'>
            <a href="https://www.linkedin.com/in/miguel-brito-77086225/" target="_blank">
              <img src={ Linkedin } alt="Linkedin"/>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/MiguelBrito1086" target="_blank">
              <i className="devicon-github-plain" />
              <span>GitHub</span>
            </a>
            <a href="https://twitter.com/MiguelBriTo0315" target="_blank">
              <i className="devicon-twitter-plain" />
              <span>Twitter</span>
            </a>
            <a href="https://medium.com/@mbrito1086" target="_blank">
              <img src={ Medium } alt="Medium"/>
              <span>Medium</span>
            </a>
            <a href="mailto:mgangBrito@icloud.com?Subject=Hello%20Miguel">
              <img src={ Email } alt="Email"/>
              <span>Email</span>
            </a>
          </div>
         </div>
      </div>
    )
  }
}
