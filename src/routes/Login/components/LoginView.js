import React from 'react'
import BtnBackSpaceIcon from '../../../components/Utils/BtnBackSpaceIcon'

var LoginView = React.createClass({
  getInitialState: function() {
    return {uid: '', pwd: ''};
  },
  handleUidChange: function(e) {
    this.setState({uid: e.target.value});
  },
  handlePwdChange: function(e) {
    this.setState({pwd: e.target.value});
  },
  cleanUid : function(){
  	this.setState({uid: ''});
  },
  cleanPwd : function(){
  	this.setState({pwd: ''});
  },
  render: function() {
    return (
		<div className='mobile-wrapper p20'>
			<form name="loginForm" className='mobile-from'>
	            <div>
	                <label className="label-form">用户</label>
	                <div className="w-clearfix block-input-combined">
	                    <input className="w-input input-form" type='text' value={this.state.uid} onChange={this.handleUidChange} />
	                    <div className="right-input-icon">
	                    	<BtnBackSpaceIcon input={this.state.uid} onClean={this.cleanUid}/>
                    	</div>
	                </div>
	            </div>
	            <div>
	                <label className="label-form">密码</label>
	                <div className="w-clearfix block-input-combined">
	                    <input className="w-input input-form" type='password' value={this.state.pwd} onChange={this.handlePwdChange} />
	                    <div className="right-input-icon">
	                    	<BtnBackSpaceIcon input={this.state.pwd} onClean={this.cleanPwd} />
                    	</div>
	                </div>
	            </div>
	            <div className="mt20">
	            	<button className="action-button text ls" >登录</button>
	            </div>
			</form>
		</div>
    );
  }
});

export default LoginView
