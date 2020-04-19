import React from 'react';

import './App.css';
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
                
                <div className="row" style={{background: "#353353"}}>
                <div id="Clouds">
                  <div class="Cloud Background"></div>
                  <div class="Cloud Background"></div>
                  <div class="Cloud Background"></div>
                  <div class="Cloud Background"></div>
                  <div class="Cloud Background"></div>
                  <div class="Cloud Background"></div>
                  <div class="Cloud Background"></div>
                  <div class="Cloud Foreground"></div>
                </div>
              
                  <div class="col-md-5" style={{background: "#353353"}}>
                  <Home/>
                  </div>
                  <div class="col-md-7" style={{background: "#353353"}}>
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
