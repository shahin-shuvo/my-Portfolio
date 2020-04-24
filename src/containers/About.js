import React from "react"
import Placeholder from "../components/Placeholder"

function About(){
    return(
        <section id="about" style={{background: "#0c3545"}}>

		<div class="container" >
			
			
			{/* <h2 class="section-title wow fadeInUp" style={{textAlign: "left"}}>About Me</h2> */}

			<div class="spacer" data-height="30"></div>
			
			<div class="row">

				{/* <div class="col-md-3">
					<div class="text-center text-md-left">
					
						<div class="card-body">
						    <img src="/static/images/myphoto.jpg" width="160px" height="160px" style={{borderRadius:"10%"}} alt="Shuvo" class="mb-4" />
					    </div>
					</div>
					<div class="spacer d-md-none d-lg-none" data-height="30">
						
					</div>
				</div> */}

				<div class="col-md-9 triangle-left-md triangle-top-sm">
					<div class="rounded bg-white shadow-blue padding-30">
						<div class="row">
							<div class="col-md-6 box" 
							style={{textAlign: "justify",textJustify: "inter-word", 
							}}>
								
								<p>I am Md Shahin Alom Shuvo. I have completed my graduation from Department of Computer Science & Engineering, University of Dhaka.
                                 I am a web developer from Dhaka, Bangladesh. I have rich experience in dynamic web applications building and customization, I am good at Django(Python), Flask, React.</p>
								
								<div class="spacer d-md-none d-lg-none" data-height="30"></div>
							</div>
							
							<div class="col-md-6" style={{textAlign: "justify",
  								textJustify: "inter-word"}}>
							<p>
							I love to travel. Playing cricket and watching cricket match is one of my favourite leisure time work.
							</p>
							
							 <div class="mt-3">
									<a href="#" class="btn btn-default">Download CV</a>
								</div>
							
							</div>
						</div>
					</div>
				</div>

			</div>
		

			<div class="spacer" data-height="70"></div>
			
			

		</div>
	
		
	</section>
	
    );
}

export default About;