import React, {Component} from 'react'
import {Link} from 'react-router'

import Slider from './Slider'
import Header from './Header'
import Carousel from './Carousel'
import Footer from './Footer'
//import io from 'socket.io-client';


class App extends Component{
	constructor(props){
		super(props)
		
		
	}

	componentWillMount(){
		//this.socket = io('http://localhost:3000')
	}


	render(){
		return(
			<div className=''>			
				<div>
					<Carousel />
					<Header />
				</div>
				<div className='container content'>
					{this.props.children}
				</div>
				<Footer />		
			</div>
		)
	}
}

export default App