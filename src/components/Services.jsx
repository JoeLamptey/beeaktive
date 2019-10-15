import React, {Component} from 'react' 

class Services extends Component{
	render(){
		return(
			<div className='container'>
				<div className='row'>
					<span className='col-md-3'>
						<hr className='hr'/>
						<h3 className='welcome'>Our Services</h3>
						<hr className='hr'/>
					</span>
				</div>
				<div className='row'>
					<div className='col-md-8 beeaktive-brief'>
						<p>Our main focus is on the service users.  We will also enhance the quality of life for clients who are in need
							of care due to illness, disability to enable carers respite from their caring duties by offering a personal care
							service through the provision of trained community care workers.
						</p>

						<div>
							<div className='card'>
								<div className='card-body'>
									<h3 className='card-title'>Live-In care</h3>
									<p className='card-text'> Our Live-in Care support provides you with all permanent support 
										that you will expect from a residential home. 
										You will feel comfortable and happy in your own environment.  You have the freedom and choice to do 
										what you want at your own pace and time. The carers are there to support you
									</p>
								</div>
							</div><br />
							<div className='card'>
								<div className='card-body'>
									<h3 className='card-title'>Companionship & Social Support</h3>
									<p className='card-text'>
										This includes Shopping, Sitting service to offer respite,
										Escort to appointments, and
									</p>
									<ul classsName=''><h2 className=''>Personal Care</h2>
										<li className=''>Washing, bathing and dressing</li>
										<li className=''>Shaving, grooming, hair and makeup</li>
										<li className=''>Incontinence</li>
										<li className=''>Eating, nutrition and weight</li>
										<li className=''>Security and safety</li>
										<li className=''>Medication, creams and ointments</li>
									</ul>
								</div>
							</div>						
						</div><br />
						<p>Beeaktive care Limited provide top quality services. 
							We work for the comprehensive welfare of our services
							and also tailor the individual’s care package to the needs of the clients. 
							We work with other health and social professionals to meet the needs of our service users.							
						</p>
						<div className="">
							<div className="content">
								<h3>CQC Inspection Area Ratings</h3>
								<img src="./images/cqc.png" className='card-img-top' alt="CQC Ratings here..."/>
								<footer className="blockquote-footer">
									CQC
									<cite title="Source Title"> Latest report published on October 2018</cite>
								</footer>
							</div>							
						</div>
					</div>
					<div className='col-md-4'>					
						<div className='card'>
							<img  src='./images/s3.jpg' className='card-img-top'/>						
							<div className='card-body'>
								<h4 className='card-title cards'>BeeAktive Care & Support</h4>							
								<div className='cards-body'>
									There is none better than our services.
									We encourage you to call now and enjoy 24/7 Beeaktive care!!
									<h2 className='dial'>(0781)-118-1165 /66 </h2>
								</div>
							</div>
						</div><br />
											
						<div className="card">
							<div className="card-header">
								<h4>Quote</h4>
							</div>
							<div className="card-body">
								<blockquote className="blockquote mb-0">
									<p>When it comes to health, your zip code matters more than your genetic code.</p>
									<footer className="blockquote-footer">
										Dr. Tony Iton
										<cite title="Source Title"> The California Endowment Health Journalism Fellowships 2013</cite>
									</footer>
								</blockquote>
							</div>
						</div><br />
						<div className="card">
							<div className="card-header">
								<h4>Quote</h4>
							</div>
							<div className="card-body">
								<blockquote className="blockquote mb-0">
									<p>Our registration with the Care Quality Commission enables us to provide
										certain care under the following regulated activities as defined
										in the Health and Social Care Act 2008.
									</p>
									<footer className="blockquote-footer">
										Mrs. Mary Monovis
										<cite title="Source Title"> CEO of BeeAktive Care Limited</cite>
									</footer>
								</blockquote>
							</div>
						</div><br />
						<div className="card">
							<div className="card-header">
								<h4>Specialism & Services</h4>
							</div>
							<div className="card-body">
								<blockquote className="blockquote mb-0">
									<p>
										<ul>Dementia</ul>
										<ul>Mental Health conditions</ul>
										<ul>Personal Care</ul>
										<ul>Physical Disabilities</ul>
										<ul>Caring For Adults under 65 years</ul>
										<ul>Caring For Adults over 65 years</ul>
									</p>
									<footer className="blockquote-footer">
										CQC
										<cite title="Source Title"> Approved By the Care Quality Commission</cite>
									</footer>
								</blockquote>
							</div>
						</div><br />				
					</div>
				</div>
			</div>
		)
	}
}

export default Services