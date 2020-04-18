import React from "react"
import Placeholder from "../components/Placeholder"

function Header(props){
    return(

        <div>
        <Placeholder/>
          <header class="desktop-header-3 light fixed-top">

                <div class="container">

                    <nav class="navbar navbar-expand-lg navbar-dark">
                        <a class="navbar-brand" href="/"><img src="/static/images/logo-nasim.svg" alt="SHUVO" /></a> <button aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarNavDropdown" data-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav ml-auto scrollspy">
                                <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                                <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                               
                            </ul>
                        </div>
                    </nav>

                </div>

            </header>


           
        </div>
    );
}

export default Header;