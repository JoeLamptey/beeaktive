import React, {Component} from 'react' 
import {Link} from 'react-router'

class Header extends Component{
	render(){
		return(
			<div className='header'>
				<div className=''>
					<div className=''>	
						<img className='logo' src='images/logo.png' alt='your logo' />
					</div>
					<div className='float-right'>
						<ul className=' nav nav-pills'>
							<li className='nav-item'><Link className='nav-link link' to='home' >Home</Link></li>
							<li className='nav-item'><Link className='nav-link link' to='services' >Services</Link></li>
							<li className='nav-item'><Link className='nav-link link' to='about' >About Us</Link></li>
							<li className='nav-item'><Link className='nav-link link' to='staff' >Staff</Link></li>
							<li className='nav-item'><Link className='nav-link link' to='training' >Training</Link></li>
							<li className='nav-item'><Link className='nav-link link' to='contact' >Contact Us</Link></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Header