import React from "react";
import s from './Quiz.module.scss'
import {ActiveQuiz} from "../../components/ActiveQuiz/ActiveQuiz";

export class Quiz extends React.Component {
	state = {
		quiz: []
	}
	
	render() {
		return (
			<div className={s.Quiz}>
				<div className={s.QuizWrapper}>
					<h1>Quiz</h1>
					<ActiveQuiz/>
				</div>
			</div>
		)
	}
}