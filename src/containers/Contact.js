import React from "react"

function Contact(){
    return(
        <section id="contact">

		<div class="container">
			
		
        <h2 class="section-title wow fadeInUp" style={{textAlign: "left"}}>Contact Me</h2>

			<div class="spacer" data-height="60"></div>

            <div class="timeline bg-white rounded shadow-blue padding-30 overflow-hidden">
                <div class="row">
                        <div class="col-md-6 " style={{textAlign: "left"}}>
                            
                            <div class="timeline-container wow fadeInUp">
                                <div class="content" >
                                <h3 class="wow fadeInUp">Let's talk about everything!</h3>
						        <p class="wow fadeInUp"> Send me an <a href="mailto:shahinshuvo96@gmail.com">email</a>. 👋</p>
                                </div>
                            </div>
                            <span class="line"></span>
                        </div>

                       <div class="col-md-6 " style={{textAlign: "left"}}>
                            <div class="timeline-container wow fadeInUp">
                                <div class="content" >
                                <p><i class="icofont-mobile-phone"></i>+88 01521-305183</p>
                                 <p><i class="icofont-email"></i> shahinshuvo96@gmail.com</p>
                                 <p><i class="icofont-location-pin"></i> Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <span class="line"></span>
                        </div>

                </div>
                   

			</div>
			

		</div>

	</section>
    );
}

export default Contact;