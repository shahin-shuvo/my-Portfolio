import React from "react"
import Placeholder from "../components/Placeholder"

function Header(props){
    return(

        <div>
        {/* <Placeholder/> */}
          <header class="desktop-header-3 light fixed-top"  >

                <div class="">

                    <nav class="navbar navbar-expand-lg navbar-dark" >
                        <a class="navbar-brand" href="/" style={{marginLeft:"20px"}}>
                        <img src="/static/images/logo-shuvo.svg" alt="SHUVO" /></a> <button aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarNavDropdown" data-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav ml-auto scrollspy">
                                <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                              
                                <li class="nav-item">
                                <a href="#education" class="nav-link">Education</a>
                                </li>
                                <li class="nav-item">
                                <a href="#skills" class="nav-link">Skills</a>
                                </li>
                                <li class="nav-item">
                                <a href="#courses" class="nav-link">Professional Training</a>
                                </li>
                                <li class="nav-item">
                                <a href="#researches" class="nav-link">Researches</a>
                                </li>
                                <li class="nav-item">
                                <a href="#projects" class="nav-link">Projects</a>
                                </li>
                                <li class="nav-item">
                                <a href="#contact" class="nav-link">Contact</a>
                                </li>
                                <li class="nav-item"><a href="#" class="nav-link"></a></li>
                               
                            </ul>
                        </div>
                    </nav>

                </div>

            </header>


           
        </div>
    );
}

export default Header;