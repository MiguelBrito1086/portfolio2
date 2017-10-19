import React, { Component } from 'react';
import RPS from '../images/rps.png';
import Cook from '../images/cook.png';
import Ceramics from '../images/ceramics.png';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects' id='Projects'>
        <h1>Projects</h1>
        <div className='project'>
          <a href="https://miguelbrito1086.github.io/cook/" target='_blank'>
          <img src={ Cook } alt="Cook"/>
          <div className='projSections'>
            <p className='projTitle'>'Cook' made with React, CSS, and JavaScript that fetches to an API</p>
            <p className='projDescrip'>
              The 'Cook' project that I created was built using React, JavaScript, HTML and CSS. It requests data from an external API called Food2Fork. Simple app that is fully responsive for mobile and tablet to search for recipes or create and save your own!
            </p>
          </div>
          </a>
        </div>
        <div className='project'>
          <a href="https://miguelbrito1086.github.io/e-commerce-mock/" target='_blank'>
            <img src={ Ceramics } alt="Ceramics"/>
            <div className='projSections'>
              <p className='projTitle'>E-commerce Mock Site made with React</p>
              <p className='projDescrip'>
                My Ceramics E-commerce site was also created using React JavaScript and implemented Link and NavLink's within the app to easily navigate through the pages and content. Very simple tool and highly functional for loading content from each link!
              </p>
            </div>
          </a>
        </div>
        <div className='project'>
          <a href="https://miguelbrito1086.github.io/Rock-Paper-Scissors-Revamp/" target='_blank'>
            <img src={ RPS } alt="rps"/>
            <div className='projSections'>
              <p className='projTitle'>Rock, Paper Scissors Game made with HTML, CSS, & JavaScript</p>
              <p className='projDescrip'>
                This was a simple Rock, Paper, Scissors game I created. At first I created it with an alert box that would pop up and ask you for your move. I decided to revamp it and styled it to be a fun retro style family favorite!
              </p>
            </div>
          </a>
        </div>
      </div>
    )
  }
}
