import React, { Component } from 'react';
import RPS from '../rps.png';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <h1>Projects</h1>
        <div className='project'>
          <img src={ RPS } alt="rps"/>
          <p>
            My name is Miguel! I have a love for the arts and for technology. I am now a potter turned developer and hoping that I can continue to create on the web and on the potter's wheel! Definitely loving how much there is to learn in the programming world.
          </p>
        </div>
        <div className='project'>
          <img src={ RPS } alt="rps"/>
          <p>
            My name is Miguel! I have a love for the arts and for technology. I am now a potter turned developer and hoping that I can continue to create on the web and on the potter's wheel! Definitely loving how much there is to learn in the programming world.
          </p>
        </div>
        <div className='project'>
          <img src={ RPS } alt="rps"/>
          <p>
            My name is Miguel! I have a love for the arts and for technology. I am now a potter turned developer and hoping that I can continue to create on the web and on the potter's wheel! Definitely loving how much there is to learn in the programming world.
          </p>
        </div>
      </div>
    )
  }
}
