import React from "react";
import s from './ActiveQuiz.module.scss';
import AnswersList from "./AnswersList/AnswersList";

export const ActiveQuiz = props => (
	<div className={s.ActiveQuiz}>
		<div className={s.Question}>
			<h3 className={s.Question_title}>
				<strong>{props.answerNumber}. </strong>
				{props.question}
			</h3>
			
			<small>{props.answerNumber}/{props.quizLength}</small>
		</div>
		
		<AnswersList
			answers={props.answers}
			onAnswerClick={props.onAnswerClick}
			state={props.state}
		/>
	</div>
)