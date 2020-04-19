import React from "react"


function Researches(){
    return(
        <section id="researches">

		<div class="container">
			
		
			<h2 class="section-title wow fadeInUp" style={{textAlign: "left"}}>Researches</h2>

			<div class="spacer" data-height="30"></div>
			
		

				
                <div class="timeline bg-white rounded shadow-blue padding-30 overflow-hidden">
                <div class="row">
                        <div class="col-md-6 " style={{textAlign: "left"}}>
                            
                            <div class="timeline-container wow fadeInUp">
                                <div class="content" >
                                    <h5 class="title">Researches Interest</h5>
                                    <p>I am passionate to make some contributions in research fields. I have great interest in Wireless Communication Technology, Crwod-sourcing, Cloud Computing as well as Deep Learning.</p>
                                    
                                </div>
                            </div>
                            <span class="line"></span>
                        </div>

                       <div class="col-md-6 " style={{textAlign: "left"}}>
                            <div class="timeline-container wow fadeInUp">
                                <div class="content" >
                                    <span class="time">Publications </span>
                                    <h5 class="title">An Energy-Efficient Scheduling of Heterogeneous Network Cells in5G</h5>
                                    <p>This is the first part of my 4th year theis. It has been accepted to
                                    "International Conference on Sustainable Technology for Industry
                                    4.0 (STI 2019)"</p>
                                    <p><a target="blank" href="https://ieeexplore.ieee.org/document/9068040">https://ieeexplore.ieee.org/document/9068040</a></p>  
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

export default Researches;