import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import s from './../common/FormsControls/FormsControls.module.css'
import React from "react";

const LoginForm = ({handleSubmit, error}) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField("Login", "email", [requiredField], Input)}

			{createField("Password", "password", [requiredField], Input, {type: "password"})}

			{createField(null, "rememberMe", [], Input, {type: "checkbox"}, "rememberMe")}

			{error &&
				<div className={s.formSummaryError}>
					{error}
				</div>
			}

			<div>
				<button>Login</button>
			</div>
		</form>
	);
}

export default reduxForm({
	form: 'login'
})(LoginForm)
