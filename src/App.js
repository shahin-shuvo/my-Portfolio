import React from 'react';

import './App.css';

import Background from "./components/Background"
import Header from "./containers/Header"
import Home from "./containers/Home"
import About from "./containers/About"
import Education from "./containers/Education"
import Skills from "./containers/Skills"
import Courses from "./containers/Courses"
import Resarches from "./containers/Researches"
import Projects from "./containers/Projects"
import Contact from "./containers/Contact"

function App() {
  return (
    <div className="App">
     <div>
        <Header/>
        <main class="content-3" >
                
                <div className="row" style={{background: "#0c3545"}}>

                  <Background/>
                  <div class="col-md-5" >
                  <Home/>
                  </div>
                  <div class="col-md-7" >
                  <About/>
                  </div>
                </div>
                
               
                <Education/>
                <Skills/>
                <Courses/>
                <Resarches/>
                <Projects/>
               <Contact/>


                <div class="spacer" data-height="96"></div>
                
                <footer class="footer dark">
                    <div class="container">
                        <span class="copyright">© 2020 Shahin Shuvo.</span>
                    </div>
                </footer>

        </main>
      </div>
     
    </div>
  );
}

export default App;
