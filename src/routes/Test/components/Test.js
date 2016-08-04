import React from 'react'


var TestView = React.createClass({
	componentDidMount:function(){
	},
	componentWillUnmount: function() {

	},
    request: function() {
    	xsd.sync.http.get('/api/test').then((data)=>{console.log(data)});
    },
  render: function() {
    return (
		<div className='mobile-wrapper p20'>
			<a onClick={this.request}>request</a>
		</div>
    );
  }
});

export default TestView
