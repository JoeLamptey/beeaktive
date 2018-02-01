import React, {Component} from 'react'
import io from 'socket.io-client' 


class Contact extends Component{
	constructor(props){
		super(props)

		this.state = {
			mess: 'no'
		}

		this.contactUs = this.contactUs.bind(this)
		this.socket = io(); //'http://localhost:3000'
	}

	contactUs(e){
		e.preventDefault();
		this.setState({mes: 'yes'});

		let contactInfo = {
			email: this.refs.email.value.trim(),
			subject: this.refs.subject.value.trim(),
			message: this.refs.message.value.trim()
		}

		this.socket.emit('data',contactInfo);

		this.refs.email.value = ''
		this.refs.subject.value = ''
		this.refs.message.value = ''

		this.setState({
			mess: 'no'
		})
	}
	
	render(){
		return(
			<div>
				<div className='col-md-10 col-md-offset-2'>
					<div className='row'>
						<div className='col-md-8'>
							<h3 className='welcome'>Contact Us</h3>								
							<form className='col-md-10 ' onSubmit={this.contactUs}>
								
								<input type='email' ref='email' required
									placeholder='Email' className='form-control'/>
								<br />
								<input type='text' required ref='subject'
									placeholder='Subject' className='form-control '/>
								<br />
								<textarea type='textarea' required ref='message'
									placeholder='Message ...' className='form-control'/>
								<br />
								<span className='row col-md-12'>
									<button type='submit' className='btn btn-primary'> Submit</button>
									{(this.state.mes === 'yes')?<h3 className='contact-thanks'>Thank you for contacting us. </h3> :false}
								</span>
								<br /><br />
							</form>					
						</div>
						<div className='col-md-4'>
							<br /><br />
							<address >
								<h2>BeeAktive Care, Ltd.</h2>
								<p className='beeaktive-brief'> 6 Chinthurst Mews, <br />
									Coulsdon CR5 3AY <br />
									P: <span> (0781)-118-1165 /66</span> <br />
								</p>
								<div>
									<h2>Email</h2>
									<span className='beeaktive-brief'>marymonovis@gmail.com</span>
								</div>
							</address>
						</div>
					</div>
				</div>
				<br /><br />
			</div>
		)
	}
}

export default Contact