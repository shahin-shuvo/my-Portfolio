import React from 'react';

import './App.css';
import Header from "./containers/Header"
import Home from "./containers/Home"
import About from "./containers/About"
function App() {
  return (
    <div className="App">
     <div>
        <Header/>
        <main class="content-3">
                <Home/>
                <About/>
        </main>
      </div>
     
    </div>
  );
}

export default App;
