import React from "react"


function Projects(){
    return(
       
        <section id="projects">
		<div class="container" style={{marginTop: "30px"}}>
			
		
			<h2 class="section-title wow fadeInUp" style={{textAlign: "left"}}>Projects</h2>

			<div class="spacer" data-height="30"></div>
            <div className="row">

            
			
            <div class="col-md-4 " >
                <div class="blog-item rounded bg-white shadow-blue wow fadeIn">
                <h4 style={{color: "blue"}}>
                    Django-Python, React, PostgreSQL
                </h4>
                <div class="details" style={{textAlign: "justify",textJustify: "inter-word", 
							}}>
							<h4 class="my-0 title"><a href="">Online Portal</a></h4>
							<p class="my-0 title">This is an online portal which is build for visualizing the COVID-19 data. World-wide COVID-19 cases as well as country wise data is shown by using the data of John Hopkins University. Here is also a section where any user can create account and write post or comment on other's post.</p>
                            <i class="icofont-link"> <a target = "blank" href="https://shuvo-blog.herokuapp.com/covid-19/">shuvo-blog.herokuapp.com/covid-19</a></i>
                           
                            <ul class="list-inline">
								<li class="list-inline-item"><i class="icofont-calendar">April 2020</i></li>
								
							</ul>
							
                 </div>
                </div>
            </div>

            <div class="col-md-4 " >
                <div class="blog-item rounded bg-white shadow-blue wow fadeIn">
                <h4 style={{color: "blue"}}>
                    Flask-Python, Bootstrap , MongoDB
                </h4>
                <div class="details" style={{textAlign: "justify",textJustify: "inter-word", 
							}}>
							<h4 class="my-0 title"><a href="">Survey Automation, BRAC</a></h4>
							<p class="my-0 title">This system is developed for BRAC. To maintain the survey system of BRAC, we develop this online application</p>
                            <i class="icofont-link"> <a target = "blank" href="https://survey-upg.herokuapp.com">Testing Deployment Version</a></i>
                           
                           <p> <i class="icofont-github"><a target = "blank"href="https://github.com/HHMoon13/SurveyAutomation">Github Repo</a></i>
                           
                           </p>
                            <ul class="list-inline">
								<li class="list-inline-item"><i class="icofont-calendar">Published on June 2020</i></li>
								
							</ul>
							
                 </div>
                </div>
            </div>
            <div class="col-md-4 " >
                <div class="blog-item rounded bg-white shadow-blue wow fadeIn">
                <h4 style={{color: "blue"}}>
                    Android-Java, Firebase
                </h4>
                <div class="details" style={{textAlign: "justify",textJustify: "inter-word", 
							}}>
							<h4 class="my-0 title"><a >BookS: App for Your Community Library</a></h4>
							<p class="my-0 title">A mobile application for sharing books among your community.</p>
                            <i class="icofont-facebook"><a target = "blank" href="https://www.facebook.com/share.get.bookS/">Detail Info</a></i>
                            <p>
                            <i class="icofont-exclamation-circle"><a target = "blank" href=" http://bit.ly/2vX4VeD">Get it on Google Play</a></i>
                            </p>
                            <ul class="list-inline">
                               
								<li class="list-inline-item"><i class="icofont-calendar">Released in 2020</i></li>
								
							</ul>
							
                 </div>
                </div>
            </div>

            <div class="col-md-4 " >
                <div class="blog-item rounded bg-white shadow-blue wow fadeIn">
                <h4 style={{color: "blue"}}>
                Python-Flask, MySQL
                </h4>
                <div class="details" style={{textAlign: "justify",textJustify: "inter-word", 
							}}>
							<h4 class="my-0 title"><a >Booking System</a></h4>
							<p class="my-0 title">A website for online class, lab, auditorium booking system for University of Dhaka.</p>
                            <i class="icofont-github"><a target = "blank" href="https://github.com/shahin-shuvo/Booking_System">Github Repo</a></i>
                            <p>
                            <i class="icofont-brand-youtube"><a target = "blank" href="https://youtu.be/WiUt7eP30e8">Demo Video</a></i>
                            </p>
                          
                            <ul class="list-inline">
								<li class="list-inline-item"><i class="icofont-calendar">May 2018</i></li>
								
							</ul>
							
                 </div>
                </div>
            </div>

            <div class="col-md-4 " >
                <div class="blog-item rounded bg-white shadow-blue wow fadeIn">
                <h4 style={{color: "blue"}}>
                Java- Android, Firebase
                </h4>
                <div class="details" style={{textAlign: "justify",textJustify: "inter-word", 
							}}>
							<h4 class="my-0 title"><a >MediCare</a></h4>
							<p class="my-0 title">An android application for healthcare management.</p>
                            <i class="icofont-github"><a target = "blank" href="https://github.com/shahin-shuvo/mediCare">Github Repo</a></i>
                            <p>
                            <i class="icofont-brand-youtube"><a target = "blank" href="https://youtu.be/Q4OfOXUSyAw">Demo Video</a></i>
                            </p>
                          
                            <ul class="list-inline">
								<li class="list-inline-item"><i class="icofont-calendar">May 2017</i></li>
								
							</ul>
							
                 </div>
                </div>
            </div>

            </div>

		

		</div>
    </section>
	
    );
}

export default Projects;