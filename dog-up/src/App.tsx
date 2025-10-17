import React from 'react';
import logo from './assets/dog-up_colour.png';
import './App.css';

function App() {
  return (
    <div className="app">

      <header className="hero">
        <img src={logo} className="hero_logo" alt="DogUp logo" />
          {/* <h1 className="hero_title">Dog up</h1> */}
          <div className="hero_title">
            {['D', 'O', 'G', '-', 'U', 'P'].map((char, i) => (
            <span key={i} className='char'> {char}</span>
            ))}
          </div>
          <p className="hero_tagline">Quand ton chien a besoin d’un catch-up!</p>
          <button className="hero_cta">Book a walk</button>
      </header>
  
    <footer className="App-footer">
    <div className='App-contacts'>
      <p>Contact us at &#9786; jurgensonmk@google.com</p>
    </div>
    <div className='App-social-media'> 
    Made with &hearts; by <a href="https://github.com/generalMashuka"> Masha</a> 
    </div>
      
    </footer>
    </div>

    
  );
}

export default App;
