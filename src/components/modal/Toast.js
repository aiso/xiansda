import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import MdClose from 'react-icons/lib/md/close'

import styles from './modal.scss'

class Toast extends Component {

	state = {
		message: null
	}

	onShow = (message) => {
		this.setState({message:message});
	}

	onClose = () => {
		this.setState({message:null});
	}

	render() {
		let dom = (
			<div className={styles.modalToast}>
				<div className="table-row">
					<div className="extend pr20"><h4 className="c-text">{ this.state.message }</h4></div>
					<div><a onClick={this.onClose}><MdClose className={styles.modalCloseIcon}/></a></div>
				</div>
			</div>
			)

		return (
			<div className={styles.modalWrapper}>
				<ReactCSSTransitionGroup 
					transitionName='top-in' 
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
    	this._component = this._component || ReactDOM.render(<Toast />, document.body.appendChild(document.createElement('div')))
    	this._component.onShow(msg);
    	setTimeout(() => {this.close()}, 2000);
	},
	close:function(){
		this._component.onClose();
	}
}