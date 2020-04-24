import React from "react"

function Background (){
    return(
        <div>
        <div class="absolute cloud_left">
				<ul class="inline-list">
				  <li class="cloud"></li>
				  <li class="cloud"></li>
				  <li class="cloud"></li>
				</ul>
			</div>

			<div class="absolute cloud_right">
				<ul class="inline-list">
				  <li class="cloud"></li>
				  <li class="cloud"></li>
				  <li class="cloud"></li>
				</ul>
			</div>

			<span class="absolute sun"></span>



			<div class="absolute boat">
				<ul class="no-bullet">
					<ul class="no-bullet fume">
						<li class="fume4"></li>
						<li class="fume3"></li>
						<li class="fume2"></li>
						<li class="fume1"></li>
					</ul>
					<li class="smokestack"></li>
					<li class="white-body">
						<ul class="windows inline-list">
							<li class="circle"></li>
							<li class="circle"></li>
							<li class="circle"></li>
						</ul>
					</li>
					<li class="boat-body"></li>
				</ul>
			</div>


            


        </div>
    );
}

export default Background;