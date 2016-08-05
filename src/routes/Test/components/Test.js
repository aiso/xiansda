import React from 'react'
import ReactDOM from 'react-dom';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Alert from '../../../components/modal/Alert'


var Control = React.createClass({
    render: function() {
        return <div>{ this.props.children }</div>;
    }
});

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
    	Alert.show('test');
    	/*
    	wrapper = document.body.appendChild(document.createElement('div'));
    	let props = {message: 'test message', wrapper:wrapper}
    	ReactDOM.render(<Alert {...props}></Alert>, wrapper);
    	*/
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
			<a onClick={this.unmountComponent}>unmountComponent</a>
		</div>
    );
  }
});

export default TestView
