import React, {Component} from 'react' 

class Staff extends Component{
	render(){
		return(
			<div className='container'>
				<h3 className='welcome'>Our Staff </h3>
				<div className='col-md-12 beeaktive-brief'>
					<p>BeeAktive staff are skilled and experience carers.  We carefully recruit and train 
						our care team to deliver good quality of care.  They also have the support of the 
						Registered manager and the care coordinators at all times.  The Registered Manager 
						has 18 years experience in nursing and the care coordinators 10 years experience in 
						care.  All staff members have DBS check to an enhanced level and are fully insured 
						with public liability cover.</p>

						<p>
							<h3>Our staff strives to be </h3>
							<ul>
								<li>Happy  to listen and talk to our clients</li>
								<li>Respects service users choices and decisions</li>
								<li>Maintain confidentiality and dignity</li>
								<li>Cheerful and pleasant with an appropriate sense of humour</li>
								<li>Polite and courteous</li>
								<li>Very welcoming and friendly</li>
							</ul> 
						</p>
						
				</div>
			</div>
		)
	}
}

export default Staff