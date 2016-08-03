import React from 'react'
import Validation from 'react-validation'
import validator from 'validator'
import serialize from 'form-serialize';

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
    onSubmit: function(event) {
        event.preventDefault();
        var form = document.querySelector('#loginForm');
        var str = serialize(form);
        console.log(str);

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
	                        name='username'
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
		                    name='password'
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
