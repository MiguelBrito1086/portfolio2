import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Languages from '../components/Languages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <AboutMe />
        <Projects />
        <Languages />
      </div>
    );
  }
}

export default App;
