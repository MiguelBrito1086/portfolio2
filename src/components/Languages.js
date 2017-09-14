import React, { Component } from 'react';

export default class Languages extends Component {
  render() {
    return (
      <div className='icons'>
        <ul className='first-row'>
          <li>
            <i className="devicon-react-original" />
            <span>React</span>
          </li>
          <li>
            <i className="devicon-javascript-plain" />
            <span>Javascript</span>
          </li>
          <li>
            <i className="devicon-nodejs-plain" />
            <span>Nodejs</span>
          </li>
          <li>
            <i className="devicon-html5-plain" />
            <span>HTML5</span>
          </li>
          <li>
            <i className="devicon-css3-plain" />
            <span>CSS3</span>
          </li>
          <li>
            <i className="devicon-github-plain" />
            <span>GitHub</span>
          </li>
          <li>
            <i className="devicon-atom-original" />
            <span>Atom</span>
          </li>
        </ul>
        <ul>
          <li>
            <i className="devicon-photoshop-line" />
            <span>Photoshop</span>
          </li>
          <li>
            <i className="devicon-illustrator-plain" />
            <span>Illustrator</span>
          </li>
          <li>
            <i className="devicon-gimp-plain" />
            <span>Gimp</span>
          </li>
          <li>
            <i className="devicon-trello-plain" />
            <span>Trello</span>
          </li>
          <li>
            <i className="devicon-slack-plain" />
            <span>Slack</span>
          </li>
          <li>
            <i className="devicon-chrome-plain" />
            <span>Chrome</span>
          </li>
        </ul>
      </div>
    )
  }
}
