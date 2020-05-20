import React from "react";
import s from './QuizCreator.module.scss';
import Button from "../../components/UI/Button/Button";


export default class QuizCreator extends React.Component {

	submitHandler = (e) => {
		e.preventDefault();
	}

	addQuestionHandler = () => {
		
	}

	createQuizHandler = () => {
		
	}
	
	render() {
		return (
			<div className={s.QuizCreator}>
				<div>
					<h1>Create Test</h1>

					<form onSubmit={this.submitHandler}>
						<input type="text"/>
						<hr/>
						<input type="text"/>
						<input type="text"/>
						<input type="text"/>
						<input type="text"/>
						
						<select></select>
						<Button
							type={'primary'}
							onClick={this.addQuestionHandler}
						>
							Add question
						</Button>

						<Button
							type={'success'}
							onClick={this.createQuizHandler}
						>
							Create test
						</Button>
					</form>
				</div>
			</div>
		)
	}
}