import React, {Component} from 'react'

class Carousel extends Component{

	constructor(){
		super()
		this.toggleMenu = this.toggleMenu.bind(this)
	}

	toggleMenu(e){
		e.preventDefault();
		//alert('this is a toggle menu');
	}

	render(){
		return(
			<div id="carousel-BeeAktive" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carousel-BeeAktive" data-slide-to="0" className="active"></li>
					<li data-target="#carousel-BeeAktive" data-slide-to="1"></li>
					<li data-target="#carousel-BeeAktive" data-slide-to="2"></li>
				</ol>

				<div className="carousel-inner bg-wrapper" >
					<div className='menu-border' onClick={this.toggleMenu}>
						<div className='toggle-menu-top'></div>	
						<div className='toggle-menu-middle'></div>	
						<div className='toggle-menu-bottom'></div>	
					</div>					
					<div className="carousel-item active ">						
						<img src="./images/img4.jpg" className='d-block w-100' />
						<div className='carousel-caption d-md-block'>
							<h4>Assistive</h4>
						</div>
					</div>
					<div className="carousel-item ">
						<img src="./images/img2.jpg" className='d-block w-100' />
						<div className='carousel-caption d-md-block'>
							<h4>Diligence</h4>
						</div>
					</div>
					<div className="carousel-item ">
						<img src="./images/img3.jpg" className='d-block w-100' />
						<div className='carousel-caption d-md-block'>
							<h4>Companionship</h4>
						</div>
					</div>
				</div>

				<a className="carousel-control-prev" href="#carousel-BeeAktive" role="button" data-slide="prev">
					<span className='carousel-control-prev-icon' aria-hidden='true'></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carousel-BeeAktive" role="button" data-slide="next">
					<span className='carousel-control-next-icon' aria-hidden='true'></span>
					<span className="sr-only">Next</span>
				</a>				
			</div>
		)
	}
}

export default Carousel