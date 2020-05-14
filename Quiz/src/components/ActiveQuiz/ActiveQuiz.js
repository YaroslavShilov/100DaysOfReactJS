import React from "react";
import s from './ActiveQuiz.module.scss';

export const ActiveQuiz = props => (
	<div className={s.ActiveQuiz}>
		<h3 className={s.Question}>
			<p>
				<strong>2. </strong>
				How are you?
			</p>
			
			<small>4/12</small>
		</h3>
		
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
		</ul>
	</div>
)