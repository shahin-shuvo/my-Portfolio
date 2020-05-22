import React from "react"

const deepList = [
	{
		name: "Neural Networks and Deep Learning",
		certificate: "https://coursera.org/share/1d03984f5fbdf30ae0908ef77a657ba7"
	},
	{
		name: "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
		certificate: "https://coursera.org/share/9b7be1a5e6558a33127d73eb70a698dd"
	},
	{
		name: "Structuring Machine Learning Projects",
		certificate: "https://coursera.org/share/01f2ea89e41a6f735ce296f108f69029"
	},
	{
		name: "Convolutional Neural Networks",
		certificate: "https://coursera.org/share/819d757f4227ee50bb9d42f8041fc1db"
	},
	{
		name: "Sequence Models",
		certificate: "https://coursera.org/share/35c00df0163b31335aabc05a55aaa9a3"
	},

]
const Listitems = []
function Courses(){
	// for deep learning course item
	for (const [index, value] of deepList.entries()) {
		Listitems.push(<li><a target="blank" href= {value["certificate"]}>
		{value["name"]}</a></li> )
	  }
    return(
        <section id="courses">

		<div class="container">
			
		
			<h2 class="section-title wow fadeInUp" style={{textAlign: "left"}}>Professional Training</h2>

			<div class="spacer" data-height="30"></div>
			<div class="timeline bg-white rounded shadow-blue padding-30 overflow-hidden">
			<div class="row">

				<div class="col-md-6 " style={{textAlign: "left"}}>
					
                       
                        <div class="timeline-container wow fadeInUp">
							<div class="content" >
								<span class="time">March-May, 2020 </span>
								<h5 class="title">Specialization on Deep Learning. (Coursera)</h5>
								<p><a target="blank" href="https://www.coursera.org/account/accomplishments/specialization/certificate/LLAC98TK2J74">View Certificate</a></p>  
								 I have completed 5 courses on Deep Learning through out this specialization.

								 <ul style= {{ paddingLeft: "30px"}}>
									{Listitems}
								 </ul>
							</div>
                            
						</div>
                       
						<span class="line"></span>
					</div>
				

				<div class="col-md-6" style={{textAlign: "left"}}>
					
				
					<div class="spacer d-md-none d-lg-none" data-height="30"></div>
                   
					
				
                        <div class="timeline-container wow fadeInUp">
							<div class="content" >
								<span class="time">2020- Udemy </span>
								<h5 class="title">Javascript, Bootstrap & PHP </h5>
                                <p><a target="blank" href=" https://www.udemy.com/certificate/UC-aa96a313-c8ca-406e-a69d-2dfa0df53dd9/">View Certificate</a></p>     
							</div>

						</div>
                        <div class="timeline-container wow fadeInUp">
							<div class="content" >
								<span class="time">2017- Certified Course by ICT Ministry </span>
								<h5 class="title">Advanced Mobile Game Development (Unity)</h5>
							</div>
                            <div class="content" >
								
								<h5 class="title">Mobile Game Graphics Design (Blender)</h5>
								
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

export default Courses;