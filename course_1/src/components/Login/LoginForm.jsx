import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import React from "react";

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					name={'email'}
					component={Input}
					validate={[requiredField]}
					placeholder={"Login"}
				/>
			</div>
			<div>
				<Field
					name={'password'}
					component={Input}
					type={'password'}
					validate={[requiredField]}
					placeholder={"Password"}
				/>
			</div>
			<div>
				<Field
					name={'rememberMe'}
					component={Input}
					type={'checkbox'}
				/>
				remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	);
}

export default reduxForm({
	form: 'login'
})(LoginForm)
