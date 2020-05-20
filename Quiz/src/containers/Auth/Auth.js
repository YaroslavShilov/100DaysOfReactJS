import React from "react";
import s from './Auth.module.scss';
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import is from 'is_js';


export default class Auth extends React.Component {

	state = {
		isFormValid: false,
		formControls: {
			email: {
				value: '',
				type: 'email',
				label: 'Email',
				errorMessage: 'Write right Email',
				valid: false,
				touched: false,
				validation: {
					required: true,
					email: true,
				}
			},
			password: {
				value: '',
				type: 'password',
				label: 'Password',
				errorMessage: 'Write right password',
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 6,
				}
			}
		}
	}
	
	loginHandler = () => {
		
	}
	
	registerHandler = () => {
		
	}

	submitHandler = (e) => {
		e.preventDefault();
	}

	validateControl(value, validation) {
		if(!validation) {
			return true
		}
		let isValid = true;
		
		
		if(validation.required) {// проверяем наличие свойства
			isValid = value.trim() !== '' && isValid;
		}
		if(validation.email) {
			// 1. проверяем на валидность емейла (плагином)
			// 2. проверяем на "не завален ли уже тест другими условиями"
			isValid = is.email(value) && isValid;
		}
		if(validation.minLength) {
			isValid = value.length >= validation.minLength && isValid;
		}
		
		return isValid
	}
	
	onChangeHandler = (e, controlName) => {
		const formControls = {...this.state.formControls};
		const control = {...formControls[controlName]};
		
		control.value = e.target.value;
		control.touched = true;
		control.valid = this.validateControl(control.value, control.validation);
		
		formControls[controlName] = control;
		
		let isFormValid = true;
		
		Object.keys(formControls).forEach(i => {
			isFormValid = formControls[i].valid && isFormValid;
		})
		
		this.setState({
			formControls,
			isFormValid,
		})
	}
	
	renderInputs() {
										//получаем массив ключей - ['email', 'password']
		return Object.keys(this.state.formControls).map((i, inx) => {
			const control = this.state.formControls[i];
			return (
				<Input
					key={i + inx}
					type={control.type}
					value={control.value}
					valid={control.valid}
					touched={control.touched}
					label={control.label}
					errorMessage={control.errorMessage}
					shouldValidate={!!control.validation}//переводит в булевый тип
					onChange={e => this.onChangeHandler(e, i)}
				/>
			)
		})
	}
	
	render() {
		return (
			<div className={s.Auth}>
				<div>
					<h1>Login</h1>

					<form onSubmit={this.submitHandler} className={s.form}>
						
						{this.renderInputs()}
						
						<Button 
							type={'success'} 
							onClick={this.loginHandler}
							disabled={!this.state.isFormValid}
						>Login</Button>
						<Button
							type={'primory'}
							onClick={this.registerHandler}
							disabled={!this.state.isFormValid}
						>Registration</Button>
					</form>
				</div>
			</div>
		)
	}
}