import React from 'react'
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import styles from './modal.scss'

class Alert extends React.Component {

	state = {
		message: null
	};

	onClose = () => {
		this.setState({message:null});
	}

	render() {
		let masker = (<div className={styles.modalMasker} onClick={this.onClose}></div>)
		let dom = (
			<div className={styles.modalAlert}>
				<div className={styles.modalAlertContent}>
					<h2 className="c-gray mb10">{ this.state.title||'鲜时达' }</h2>
					<h4 className="c-text">{ this.state.message }</h4>
				</div>
				<a className="w-button action-button" onClick={this.onClose}>知道了</a>
			</div>
			)

		return (
			<div className={styles.modalWrapper}>
				<ReactCSSTransitionGroup 
					transitionName='fade-in' 
					transitionEnterTimeout={0} 
					transitionLeaveTimeout={0}>
					{this.state.message && masker}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup 
					transitionName='bottom-in' 
					transitionEnterTimeout={0} 
					transitionLeaveTimeout={0}>
					{this.state.message && dom}
				</ReactCSSTransitionGroup>
			</div>
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