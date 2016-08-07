import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import MdClose from 'react-icons/lib/md/close'

import styles from './modal.scss'

class Frame extends Component {

	static propTypes = {
		comp: PropTypes.func.isRequired,
	}
	state = {
		onShow : false
	}

	componentDidMount = () => {
		this.setState({onShow:true});
	}

	/*
	componentWillUnmount = () => {
		let dom = React.findDOMNode(this);
		console.log(dom);
	}*/

	close = () => {
		this.setState({onShow:false});
		let dom = ReactDOM.findDOMNode(this).parentNode;
		setTimeout(function() {dom.parentNode.removeChild(dom)}, 500);
	}

	render() {
		//let dom = (this.state.onShow)?(<div className={styles.modalFrame}>{this.props.comp()}</div>):null
		let dom = (this.state.onShow)?(<this.props.comp close={this.close}/>):null
		return (
			<div className={styles.modalWrapper}>
				<ReactCSSTransitionGroup 
					transitionName='right-in' 
					transitionEnterTimeout={0} 
					transitionLeaveTimeout={0}>
					{this.state.onShow && dom}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

export default {
	show:function(comp){
    	ReactDOM.render(<Frame comp={comp} />, document.body.appendChild(document.createElement('div')))
	}
}