import React from 'react';
import draff1800Avatar from './draff1800Avatar_hostedByGithub.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={draff1800Avatar} className={"Draff1800-avatar"} alt="draff1800Avatar" />
        <p>This is Dylan Rafferty's first functioning app on his HP Envy 13.</p>
        <p><b>Rejoice.</b> For this success, there will be a <i>million</i> more.</p>
        <a
          className="App-link"
          href="https://github.com/draff1800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dylan's Github
        </a>
      </header>
    </div>
  );
}

export default App;
