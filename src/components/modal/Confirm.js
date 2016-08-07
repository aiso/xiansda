import React , { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import styles from './modal.scss'

class Confirm extends Component{
/*
	static propTypes = {
		onCancel: PropTypes.func.isRequired,
		onConfirm: PropTypes.func.isRequired,
	}
*/
	state = {
		message: null
	};

	onClose = () => {
		this.setState({message:null});
	}

	render() {
		//const { onCancel, onConfirm } = this.props

		let masker = (<div className={styles.modalMasker} onClick={this.onClose}></div>)
		let dom = (
			<div className={styles.modalAlert}>
				<div className={styles.modalAlertContent}>
					<h2 className="c-gray mb10">{ this.state.title||'鲜时达' }</h2>
					<h4 className="c-text">{ this.state.message }</h4>
				</div>
			    <div className="table-row pt10">
			        <div className="span6 pr5">
			            <button className="button dark c-white full-width" onClick={this.onCancel}>取消</button>
			        </div>
			        <div className="span6 pl5">
			            <button className="button c-white full-width" onClick={this.onConfirm}>确定</button>
			        </div>
			    </div>
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
		let promise = new Promise((resolve, reject) => {
			this._component = this._component || ReactDOM.render(<Confirm />, document.body.appendChild(document.createElement('div')))
			this._component.onCancel = () => {this.close(); reject()}
			this._component.onConfirm = () => {this.close(); resolve()}
	    	this._component.setState({message:msg});
		})
		return promise;
	},
	close:function(){
		this._component.setState({message:null});
	}
}