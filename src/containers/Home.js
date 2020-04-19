import React from "react"


function Home(props){
    return(
        <section id="home" class="home light d-flex align-items-center" style={{background: "#353353"}}>
		
		
		<div class="container">

			<div class="intro">
			
			<img src="/static/images/myphoto.jpg" width="160px" height="160px" style={{borderRadius:"10%"}} alt="Shuvo" class="mb-4" />
			
				<h1 class="mb-2 mt-0" style = {{color: "white"}}>Md Shahin Alom Shuvo</h1>
				<span style = {{color: "white"}}>I'm a <span class="text-rotating">
				Full-Stack Developer, Python(django) developer
				</span>
				</span>

				
				<ul class="social-icons light list-inline mb-0 mt-4">
					<li class="list-inline-item">
					
					<a target="_blank" href="https://www.facebook.com/shuvo.shahin.91"><i class="icofont-facebook"></i></a>
					</li>
					<li class="list-inline-item"><a target="_blank" href="https://github.com/shahin-shuvo"><i class="icofont-github"></i></a></li>

					<li class="list-inline-item"><a  href=""><i class="icofont-twitter"></i></a></li>
					
				</ul>

			
				<div class="mt-4">
					<a href="#contact" class="btn btn-default">Contact me</a>
				</div>
			</div>
			
	
			<div class="scroll-down light">
				<a href="#education" class="mouse-wrapper">
					<span  style={{color: "white"}} >Scroll Down</span>
					<span class="mouse">
						<span class="wheel"></span>
					</span>
				</a>
			</div>

		</div>
	
		
	</section>
    );
}

export default Home;