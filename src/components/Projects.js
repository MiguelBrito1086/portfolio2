import React, { Component } from 'react';
import RPS from '../images/rps.png';
import Play from '../images/Play.png';
import Ceramics from '../images/ceramics.png';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects' id='Projects'>
        <h1>Projects</h1>
        <div className='project'>
          <a href="https://miguelbrito1086.github.io/Rock-Paper-Scissors-Revamp/" target='_blank'>
            <img src={ RPS } alt="rps"/>
            <p>
              This was a simple Rock, Paper, Scissors game I created. At first I created it with an alert box that would pop up and ask you for your move. I decided to revamp it and styled it to be a fun retro style family favorite!
            </p>
          </a>
        </div>
        <div className='project'>
          <a href="https://miguelbrito1086.github.io/song-share/" target='_blank'>
            <img src={ Play } alt="PlayList"/>
            <p>
              The 'PlayList Cloud' project that I created was built using React JavaScript. It posts data to an external API using AJAX request. Simple app to post and share your favorite artists and songs!
            </p>
          </a>
        </div>
        <div className='project'>
          <a href="https://miguelbrito1086.github.io/e-commerce-mock/" target='_blank'>
            <img src={ Ceramics } alt="Ceramics"/>
            <p>
              My Ceramics E-commerce site was also created using React JavaScript and implemented Link and NavLink's within the app to easily navigate through the pages and content. Very simple tool and highly functional for loading content from each link!
            </p>
          </a>
        </div>
      </div>
    )
  }
}
