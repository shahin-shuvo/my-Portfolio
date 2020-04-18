import React from "react"

function About(){
    return(
        <section id="about">

		<div class="container">
			
			
			<h2 class="section-title wow fadeInUp">About Me</h2>

			<div class="spacer" data-height="60"></div>
			
			<div class="row">

				<div class="col-md-3">
					<div class="text-center text-md-left">
					
						<div class="card-body">
						    <img src="/static/images/myphoto.jpg" width="160px" height="160px" style={{borderRadius:"10%"}} alt="Shuvo" class="mb-4" />
					    </div>
					</div>
					<div class="spacer d-md-none d-lg-none" data-height="30"></div>
				</div>

				<div class="col-md-9 triangle-left-md triangle-top-sm">
					<div class="rounded bg-white shadow-dark padding-30">
						<div class="row">
							<div class="col-md-6" style={{textAlign: "justify",
  textJustify: "inter-word"}}>
								
								<p>I am Md Shahin Alom Shuvo. I have completed my graduation from Department of Computer Science & Engineering, University of Dhaka.
                                 I am a web developer from Dhaka, Bangladesh. I have rich experience in dynamic web applications building and customization, I am good at Django(Python), React.</p>
								<div class="mt-3">
									<a href="#" class="btn btn-default">Download CV</a>
								</div>
								<div class="spacer d-md-none d-lg-none" data-height="30"></div>
							</div>
							<div class="col-md-6">
							
								<div class="skill-item">
									<div class="skill-info clearfix">
										<h4 class="float-left mb-3 mt-0"> Web Development</h4>
										<span class="float-right">85%</span>
									</div>
									<div class="progress">
										<div class="progress-bar data-background" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="85" data-color="#FFD15C">
										</div>
									</div>
									<div class="spacer" data-height="20"></div>
								</div>

							
								<div class="skill-item">
									<div class="skill-info clearfix">
										<h4 class="float-left mb-3 mt-0">Web design</h4>
										<span class="float-right">80%</span>
									</div>
									<div class="progress">
										<div class="progress-bar data-background" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80" data-color="#FF4C60">
										</div>
									</div>
									<div class="spacer" data-height="20"></div>
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