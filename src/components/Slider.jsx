import React,{Component} from 'react'

class Stock extends Component{
	render(){
		return(
			<div >				
				{this.props.children}
			</div>
		)
	}
}

export default Stock