import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { FakeLandiaRouter } from './components/fakelandia-router';



  const App: React.FC = () => {

    return (
      <BrowserRouter>
        <FakeLandiaRouter />
      </BrowserRouter>
    );
  }

  export default App;

// <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>