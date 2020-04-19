import React from "react"


function Home(props){
    return(
        <section id="home" class="home light d-flex align-items-center" style={{background: "#1d0a34"}}>
		
		
		<div class="container" style={{background: "#1d0a34"}}>

			<div class="intro">
			
			<img src="/static/images/myphoto.jpg" width="160px" height="160px" style={{borderRadius:"10%"}} alt="Shuvo" class="mb-4" />
			
				<h1 class="mb-2 mt-0" style = {{color: "white"}}>Md Shahin Alom Shuvo</h1>
				<span style = {{color: "white"}}>I'm a <span class="text-rotating" style = {{color: "white"}} >Full-Stack Developer, Python(django) developer</span>
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
				<a href="#about" class="mouse-wrapper">
					<span>Scroll Down</span>
					<span class="mouse">
						<span class="wheel"></span>
					</span>
				</a>
			</div>

		</div>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 width="40px" height="24px" viewBox="0 0 40 24" enable="preserve">
  <defs>
    <path id="Cloud" d="M33.85,14.388c-0.176,0-0.343,0.034-0.513,0.054c0.184-0.587,0.279-1.208,0.279-1.853c0-3.463-2.809-6.271-6.272-6.271
	c-0.38,0-0.752,0.039-1.113,0.104C24.874,2.677,21.293,0,17.083,0c-5.379,0-9.739,4.361-9.739,9.738
	c0,0.418,0.035,0.826,0.084,1.229c-0.375-0.069-0.761-0.11-1.155-0.11C2.811,10.856,0,13.665,0,17.126
	c0,3.467,2.811,6.275,6.272,6.275c0.214,0,27.156,0.109,27.577,0.109c2.519,0,4.56-2.043,4.56-4.562
	C38.409,16.43,36.368,14.388,33.85,14.388z"/>
  </defs>
	</svg>
		
	</section>
    );
}

export default Home;