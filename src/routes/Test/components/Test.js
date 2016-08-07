import React from 'react'
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Alert from '../../../components/modal/Alert'
import Confirm from '../../../components/modal/Confirm'
import Toast from '../../../components/modal/Toast'
import Frame from '../../../components/modal/Frame'
import Login from '../../Login/components/Login'

var Control = React.createClass({
    render: function() {
        return <div>{ this.props.children }</div>;
    }
});

var SampleComponent = React.createClass({
    componentDidLeave : () => {
        console.log('aaaaaaaa');
    },
    render: function() {
        return <div className='mobile-wrapper frame p20'>
            <h3>鲜时达生活店11111111111111222</h3>
            <a onClick={this.props.close}>close</a>
          </div>
    }
});



import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { routerActions } from 'react-router-redux'

var TestView = React.createClass({
	  getInitialState: function() {
	    return {items: ['hello', 'world', 'click', 'me']};
	  },
	  handleAdd: function() {
	    var newItems =
	      this.state.items.concat([prompt('Enter some text')]);
	    this.setState({items: newItems});
	  },
 handleRemove: function(i) {
    var newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
	componentDidMount:function(){
	},
	componentWillUnmount: function() {

	},
    request: function() {
    	xsd.sync.http.get('/api/test').then((data)=>{console.log(data)});
    },
    alert : function(){
    	Alert.show('悉尼出现美食新地标 热度远超唐人街.');
    },
    confirm : function(){
        Confirm.show('测试CONFIRM').then(function(){
            console.log('confirm')
        }).catch(()=>{console.log('cancel')})
    },
    toast : function(){
        Toast.show('悉尼出现美食新地标 热度远超唐人街.');
    },
    frame : function(){
        Frame.show(SampleComponent);
    },
    navigate : function(){
        //this.props.push('login')
        this.props.push('login')
    },
    unmountComponent:function(){
    	//ReactDOM.unmountComponentAtNode(wrapper);
    },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));

    return (
		<div className='mobile-wrapper p20'>
	      <div>
	        <button onClick={this.handleAdd}>Add Item</button>
	        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
	          {items}
	        </ReactCSSTransitionGroup>
	      </div>
			<Control><h1>child control</h1></Control>
			<a onClick={this.request}>request</a>
			{' · '}
			<a onClick={this.alert}>alert</a>
			{' · '}
            <a onClick={this.confirm}>confirm</a>
            {' · '}
            <a onClick={this.toast}>toast</a>
            {' · '}
            <a onClick={this.frame}>frame</a>
            {' · '}
            <a onClick={this.navigate}>navigate</a>
            {' · '}
			<a onClick={this.unmountComponent}>unmountComponent</a>

		</div>
    );
  }
});

//export default TestView


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    push: routerActions.push,
  }, dispatch)
}


export default connect(null, mapDispatchToProps)(TestView)
