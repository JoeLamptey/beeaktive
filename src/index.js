import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Link, Redirect, IndexRoute, browserHistory, hashHistory} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Staff from './components/Staff'
import Support from './components/Support'
import Training from './components/Training'
import Contact from './components/Contact'
import Admin from './components/Admin'

ReactDOM.render(
	(<Router history={hashHistory}>
		<Route path='/'component={App}>
			<IndexRoute  component={Home}/>
			<Route path='home' component={Home} />
			<Route path='about' component={About} />
			<Route path='services' component={Services} />
			<Route path='staff' component={Staff} />
			<Route path='support' component={Support} />
			<Route path='training' component={Training} />
			<Route path='contact' component={Contact} />
		</Route>
		<Route path='admin' component={Admin}/>
	</Router>),
	document.getElementById('app')
)