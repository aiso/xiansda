import React from 'react'
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import classes from './modal.scss'

class Alert extends React.Component {
/*
	constructor(props) {
		super(props);
		// Init state
		this.state = {message:null};
	}
*/
	state = {
		message: null
	};

	onClose = () => {
		this.setState({message:null});
	}

	render() {
		let dom = (
			<div className={`${classes.modalWrapper} ${classes.modalMasker}`} onClick={this.onClose}>
				{ /* Close Button: invoke callback */ }
				<span className="modal-item"
					onClick={this.props.onClose}>
				</span>
				{ /* Content */ }
				<div className="modal-item">
					{ this.state.message }
				</div>
			</div>
			)

		return (
			<ReactCSSTransitionGroup 
				transitionName='example' 
				transitionEnterTimeout={500} 
				transitionLeaveTimeout={300}>
				{this.state.message && dom}
			</ReactCSSTransitionGroup>
		)
	}
}


export default {
	_component:null,
	show:function(msg){
    	this._component = this._component || ReactDOM.render(<Alert />, document.body.appendChild(document.createElement('div')))
    	this._component.setState({message:msg});
	},
	close:function(){
		this._component.setState({message:null});
	}
}