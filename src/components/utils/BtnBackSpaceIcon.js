import React from 'react'
import MdBackspace from 'react-icons/lib/md/backspace'

var BtnBackSpaceIcon = React.createClass({
	onClean: function(){
		this.props.onClean();
	},
  render () {
    if(this.props.input.length > 0)
    	return <a onClick={this.onClean}><MdBackspace /></a>;
  	else
  		return null;
  }
});

export default BtnBackSpaceIcon