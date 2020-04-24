import React from "react"


function Education(){
    return(
        <section id="education">

		<div class="container">
		
			<h2 class="section-title wow fadeInUp" style={{textAlign: "left"}}>Education</h2>

			<div class="spacer" data-height="30"></div>
			
			<div class="row">

				<div class="col-md-6 " style={{textAlign: "left"}}>
					
				
					<div class="timeline bg-white rounded shadow-blue padding-30 overflow-hidden">
                       
                        <div class="timeline-container wow fadeInUp">
							<div class="content" >
								<span class="time">2020 - present</span>
								<h3 class="title">Masters’s Degree</h3>
                                <p><strong>CGPA- N/A </strong></p>
								<p>Department of Computer Science & Engineering</p>
                                <p><strong>University of Dhaka</strong></p>
							</div>
						</div>
                       

                        
						<div class="timeline-container wow fadeInUp">
							<div class="content" >
								<span class="time">2016 - 2019</span>
								<h3 class="title">Bachelor’s Degree</h3>
                                <p><strong>CGPA- 3.67 (4 scale)</strong></p>
								<p>Department of Computer Science & Engineering</p>
                                <p><strong>University of Dhaka</strong></p>
							</div>
						</div>

					
						<span class="line"></span>

					</div>

				</div>

				<div class="col-md-6" style={{textAlign: "left"}}>
					
				
					<div class="spacer d-md-none d-lg-none" data-height="30"></div>
				
					
					<div class="timeline bg-white rounded shadow-blue padding-30 overflow-hidden">

					
                        <div class="timeline-container wow fadeInUp" data-wow-delay="0.2s">
							<div class="content">
								<span class="time">2013 - 2015</span>
								<h3 class="title">HSC-Science</h3>
                                <p><strong>GPA- 5.00</strong></p>
								<p>Shaeed Syed Nazrul Islam College</p>
                                <p> Mymensingh</p>
							</div>
						</div>

					
						<div class="timeline-container wow fadeInUp" data-wow-delay="0.4s">
                            <div class="content">
								<span class="time">2011 - 2012</span>
								<h3 class="title">SSC-Science</h3>
                                <p><strong>GPA- 5.00</strong></p>
								<p>Cantonment Public School & College</p>
                                <p> Mymensingh</p>
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

export default Education;