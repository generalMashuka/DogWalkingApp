import logo from '/public/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
              <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dog-up
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my pet project to help people walk their dogs.
        </p>
        <div className='.App-button-container'>
        <p>click here <button className='App-button'>dog-up</button> to book a walk  </p>
        </div>

      </header>
    <div>
    <footer className="App-footer">
    <div className='App-contacts'>
      <p>Contact us at &#9786; jurgensonmk@google.com</p>
    </div>
    <div className='App-social-media'> 
    Made with &hearts; by <a href="https://github.com/generalMashuka"> Masha</a> 
    </div>
      
    </footer>
    </div>
    </div>
    
  );
}

export default App;
