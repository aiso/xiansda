import React from 'react'
import Validation from 'react-validation'
import validator from 'validator'
import serialize from 'form-serialize'
import {formJson} from '../../../components/utils'


Validation.extendErrors({
    isRequired: {
        className: 'error',
        message: '必输项',
        rule: function(value) {
            return Boolean(validator.trim(value));
        }
    },
    isNotValidPassword: {
        className: 'error',
        message: '密码至少6位',
        rule: function(value) {
            // Validation provides ref to 'validator' module, so you don't need to install it separately
            return validator.trim(value).length >= 6;
        }
    }
});


var LoginView = React.createClass({
	componentDidMount:function(){
	},
	componentWillUnmount: function() {

	},
    onSubmit: function(event) {
        event.preventDefault();
        var form = document.querySelector('#loginForm');
        xsd.sync.http.post('/api/user/login', formJson(form)).then(function(result){
        	console.log(result);
        	xsd.auth.loginUser(result.data.user);
        }).catch(function(err){
        	console.log(err);
        })

    },
  render: function() {
    return (
		<div className='mobile-wrapper p20'>
			<div className='mobile-from'>
				<Validation.Form onSubmit={this.onSubmit} id='loginForm'>
	                <label className="label-form">用户名</label>
					<div className='position-relative mb20'>
	                    <Validation.Input
	                        className='w-input input-form'
	                        validations={[
	                          {
	                              rule: 'isRequired'
	                          }
	                        ]}
	                        name='uid'
	                        type='text'/>
					</div>


                    <label className="label-form">密码</label>
                    <div className='position-relative'>
		                <Validation.Input
		                    className='w-input input-form'
		                    validations={[
		                        {
		                            rule: 'isRequired',
		                        },
	                          {
	                              rule: 'isNotValidPassword'
	                          }		                        
		                    ]}
		                    name='pwd'
		                    type='password'/>
                    </div>
	                <Validation.Button className='action-button mt20' value='登 录'/>
	            </Validation.Form>
			</div>
		</div>
    );
  }
});

export default LoginView
