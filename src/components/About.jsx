import React, {Component} from 'react'

class About extends Component{

	render(){
		return(
			<div className='container'>
				<h3 className='welcome'>About Us </h3>
				<div className='col-md-12 beeaktive-brief'>
					<p>BeeAktive staff are skilled and experience carers.  We carefully recruit and train 
						our care team to deliver good quality of care.  They also have the support of the 
						Registered manager and the care coordinators at all times. <em>The Registered Manager 
						has 18 years experience in nursing and the care coordinators 10 years experience in 
						care.</em>  All staff members have DBS check to an enhanced level and are fully insured 
						with public liability cover.
					</p>
				</div>
				<div className="embed-responsive embed-responsive-16by9">
				    <iframe className="embed-responsive-item" 
			  		 	width="400" height="300" 
			  			src="https://www.youtube.com/embed/vFTU3BGVzBc" 
			  			frameborder="0" allowfullscreen>
			  		</iframe>			  		
				</div><br />			
			</div>
		)
	}
}

export default About