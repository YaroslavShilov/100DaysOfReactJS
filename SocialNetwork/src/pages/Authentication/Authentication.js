import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Authentication = () => {
	
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	//const [{response, isLoading, error}, doFetch] = useFetch('someurl');
	
	
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('data', email, password);
		setIsSubmitting(true)
	}
	
	useEffect(() => {
		if(!isSubmitting) {
			return
		}
		console.log('effect was triggered')
		document.title = email;
		axios('http://conduit.productionready.io/api/users/login', {
			method: 'post',
			data: {
				user: {
					email,
					password,
				}
			}
		}).then(res => {
			console.log('success', res)
			setIsSubmitting(false)
		}).catch(err => {
			console.log('err', err)
			setIsSubmitting(false)
		})
	})
	
	return (
		<div className={"auth-page"}>
			<div className="container page">
				<div className="row">
					<div className="col-md-6 offset-md-3 col-xs-12">
						<h1 className={"text-xs-center"}>Login</h1>
						<p className={"text-xs-center"}>
							<Link to={"/register"}>Need an account?</Link>
						</p>
						
						<form onSubmit={handleSubmit}>
							<fieldset>
								
								<fieldset className={"form-group"}>
									<input 
										type={"email"} 
										className={"form-control form-control-lg"} 
										placeholder={"Email"}
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
								</fieldset>
								
								<fieldset className={"form-group"}>
									<input 
										type={"password"} 
										className={"form-control form-control-lg"} 
										placeholder={"Password"}
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>
								</fieldset>
								
								<button className={"btn btn-lg btn-primary pull-xs-right"} type={"submit"} disabled={isSubmitting}>
									Sign in
								</button>
							</fieldset>
						</form>
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default Authentication