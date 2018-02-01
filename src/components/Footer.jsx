import React, {Component} from 'react'
import {Link} from 'react-router'

class Footer extends Component{
	render(){
		return(
			<div className='row footer'>
				<div className='container'>
					<ibd className='float-left'> 
						<span className='glyphicon glyphicon-earphone'> </span>
						<span> (0781) - 118 - 1165 /66</span>
					</ibd>
					<ibd className='float-right '>
						<span className='glyphicon glyphicon-send'> </span>
						<span> marymonovis@gmail.com</span>
					</ibd>
					<div className='text-center'>
						<Link to='' className='footer-link'>
							<img src='./images/facebook.png' className='footer-image '/>
						</Link>
						<Link to='' className='footer-link' >
							<img src='./images/twitter.png' className='footer-image '/>
						</Link>
						<Link to='' className='footer-link'>
							<img src='./images/youtube.jpg' className='footer-image '/>
						</Link>
					</div>					
				</div>
			</div>
		)
	}
}

export default Footer