import React, {Component} from 'react'

class Body extends Component{

	constructor(props){
		super(props);
		this.displayBrief = this.displayBrief.bind(this);
		this.state = { brief: 'less'}

		this.lessBrief = <div className='row col-md-12'>
			<div className='col-md-6'>
				<p>BeeAktive Care Limited is a Domiciliary care agency (also known as home care) which provides a  range of care
				services you can receive in your own home, to help you cope with disability or illness, and to become or remain 
				independent for as long as possible. We aim to help you keep your independence and remain living at home.
				</p>
				<hr />
			</div>
			<div className='col-md-6'>
				<p> Also to 
				prevent you having to go into a long-term care home or hospital, reduce physical or emotional stress to you and your family. 
				Beeaktive Care aim at offering Domiciliary Care Services to Vulnerable adults, young children whilst remaining in their homes.
				We also aim to provide good quality of care to our service users.
				</p>
				<hr />
			</div>
		</div>

		this.moreBrief = <div className='col-md-12'>
			<span className='col-md-6'>
				<p>BeeAktive Care Limited is a Domiciliary care agency (also known as home care) which provides a  range of care
				services you can receive in your own home, to help you cope with disability or illness, and to become or remain 
				independent for as long as possible.We aim to help you keep your independence and remain living at home.
				</p>
				<hr />
			</span>
			<span className='col-md-6'>
				<p> Also to prevent you having to go into a long-term care home or hospital, reduce physical or emotional stress to you and your family. 
					Beeaktive Care aim at offering Domiciliary Care Services to Vulnerable adults, young children whilst remaining in their homes.
					We also aim to provide good quality of care to our service users.
				</p>
				<hr />
			</span>
			<span className='col-md-6'>
				<p>  Also to safeguard the privacy and confidentiality of 
					the service user and to enable the service user to maintain their personal independence. BeeAktive care will be non discriminatory
						and will serve all service users regardless of their race, nationality, language, religion and beliefs.
				</p>
				<hr />
			</span>
			<span className='col-md-6'>
				<p>The company will ensure service users feel safe and protected by staff, but you also have as much freedom as 
					possible to do the things you want to do – regardless of your disability or other needs.   We will also ensure Staff 
					protect your dignity and human rights and respect you as an individual.
				</p>
				<hr />
			</span>
			<span className='col-md-6'>			
				<p>We will ensure the clients are provided with information concerning the services provided and any changes to those 
					services which may affect their well-being. We will also ensure the forms of communication language and addresses 
					used are suitable for the needs of the client.
				</p>
				<hr />
			</span>
			<span className='col-md-6'>
				<p>We aim to meet the client’s physical, emotional needs and overall well-being in a dignified, non judgemental way.
					BeeAktive care is established to provide a good quality of care by professional nurses who are passionate, diligent,
					and ready to go extra mile for clients.
				</p>
				<hr />
			</span>
		</div>

		this.brief = this.lessBrief;
		this.butSymb = 'more...';
	}

	componentWillMount(){
		//console.log(this.state.brief);
	}

	displayBrief(){
		(this.state.brief === 'less')?this.setState({brief: 'more'}): this.setState({brief: 'less'});

		switch(this.state.brief){
			case 'less':
				//console.log('brief has less state');
				this.brief = this.moreBrief;
				this.butSymb = 'less...';
				//return this.setState({brief : 'more'});
				break;
			case 'more':
				//console.log('brief state is more');
				this.brief = this.lessBrief;
				this.butSymb = 'more...';
				//return this.setState({brief : 'less'});
				break; 

			default:
				return this.setState({brief : 'less'});
				break;
		}			
	}

	render(){
		return(
			<div className='container'>
				<div className='col-md-12'>
					<hr className='hr col-md-8 col-md-offset-2'/>
						<h2 className='text-center'>														
							<ibd className='home-title'>BeeAktive Care</ibd>
							<em className='welcome'>Your No.1 Domiciliary</em> 
						</h2>
					<hr className='hr col-md-8 col-md-offset-2'/>
				</div>
				<div className='row col-md-12'>				
					<div className=' beeaktive-brief'>
						{this.brief}
						<button className='btn btn-default' onClick={this.displayBrief}>{this.butSymb}</button>	
						<br /><br />					
					</div>					
				</div>				
			</div>
		)
	}
}

export default Body