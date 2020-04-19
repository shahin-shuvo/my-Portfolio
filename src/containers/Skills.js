import React from "react"
import { Timeline } from 'antd';
function Skills(){
    return(
        <section id="skills">

		<div class="container">
			
		
			<h2 class="section-title wow fadeInUp" style={{textAlign: "left"}}>Skills</h2>

			<div class="spacer" data-height="30"></div>
			
			<div class="row">

            <div class="col-md-4">
					
					<div class="service-box rounded data-background padding-30 text-center shadow-yellow" data-color="#F9D74C">
						<img src="/static/images/service-2.svg" alt="UI/UX design" />
                        <div>
                            <div class="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                                <div class="content" style= {{textAlign: "left"}}>
                                    <h3 class="title">Programming Language</h3>
                                    <p>Python, Java, C, C++</p>
                                </div>
                            </div>
                            <div class="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                                <div class="content" style= {{textAlign: "left"}}>
                                    <h3 class="title">Database</h3>
                                    <p>SQL, SQLite3, MongoDB, PostgreSQL, Firebase</p>
                                </div>
                            </div>
                        </div>
                       
                       
					</div>
					<div class="spacer d-md-none d-lg-none" data-height="30"></div>
				</div>

				<div class="col-md-4">
				
					<div class="service-box rounded data-background padding-30 text-center text-light shadow-blue" data-color="#6C6CE5">
						<img src="/static/images/service-1.svg" alt="UI/UX design" />
                        <div>
                            <div class="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                                <div class="content" style= {{textAlign: "left"}}>
                                    <h3 class="title">Web (Back-End)</h3>
                                    <p>Python-Django, Django REST, Python-Flask</p>
                                </div>
                            </div>
                            <div class="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                                <div class="content" style= {{textAlign: "left"}}>
                                    <h3 class="title">Web (Front-End)</h3>
                                    <p>React, HTML, CSS, ES6, Bootstrap</p>
                                </div>
                            </div>
                        </div>
					</div>
					<div class="spacer d-md-none d-lg-none" data-height="30"></div>
				</div>

				

				<div class="col-md-4">
				
					<div class="service-box rounded data-background padding-30 text-center text-light shadow-pink" data-color="#F97B8B">
						<img src="/static/images/service-3.svg" alt="UI/UX design" />
                        <div>
                            <div class="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                                <div class="content" style= {{textAlign: "left"}}>
                                    <h3 class="title">Tools</h3>
                                    <p>Android Studio, GIT, Latex, Unity, Blender</p>
                                </div>
                            </div>
                            <div class="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                                <div class="content" style= {{textAlign: "left"}}>
                                    <h3 class="title">General</h3>
                                    <p>Data Structures, OOP, Problem Solving</p>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
               

			</div>

		

		</div>
		
	</section>
    );
}

export default Skills;