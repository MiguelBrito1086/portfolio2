import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Languages from '../components/Languages';
import Contact from '../components/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Projects />
        <Languages />
        <AboutMe />
        <Contact />
      </div>
    );
  }
}

export default App;
