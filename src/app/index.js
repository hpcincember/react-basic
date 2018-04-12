import React from 'react';
import { render } from 'react-dom';

import {Header} from './components/Header';
import {Home} from './components/Home';

class App extends React.Component {
	render() {
		return (
			<div className="container">
			<div> 
				<Header/>
			</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<h1>This is Hello!</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home name={"raf"}> 
							<p>this is one of the paragraph</p>
						</Home>
					</div>
					<div className="col-xs-10 col-xs-offset-1">
						<Home name={"abey"}/>
						<p>this is one of the paragraph</p>
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>,window.document.getElementById("app"));