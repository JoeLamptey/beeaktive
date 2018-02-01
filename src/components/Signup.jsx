import React, {Component} from 'react'
import {Link} from 'react-router'

class Signup extends Component{
	constructor(props){
		super(props)

		this.signup =  this.signup.bind(this)
	}

	signup(e){
		e.preventDefault()
		let acc = {
			email: this.refs.email.value.trim(),
			password: this.refs.password.value.trim()
		}

		this.refs.email.value = ''
		this.refs.password.value = ''
		console.log(acc)
	}

	render(){
		return(
			<div className='col-md-12'>				
				<div className='container'>
					<form className='col-md-4' onSubmit={this.signup}>
						<h2 className='text-center'> Create Account</h2>
						<input type='email' ref='email' required
							className='form-control'
							placeholder='email'/>
						<br />
						<input type='password' ref='password' required
							className='form-control'
							placeholder='password'/>
						<br />
						<input type='file' ref='file' required
							className=''
							placeholder='choose a stock report'/>
						<br />
						<button type='submit' className='btn btn-primary' >Create Account</button>
						<Link to={'login'} className='col-xs-offset-1 btn btn-default'> Login</Link>
					</form>
				</div>
				<div className='cold-md-6'></div>
			</div>
		)
	}
}

export default Signup