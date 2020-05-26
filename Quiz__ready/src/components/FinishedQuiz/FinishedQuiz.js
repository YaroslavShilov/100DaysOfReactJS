import React from "react";
import s from './FinishedQuiz.module.scss'
import Button from "../UI/Button/Button";
import {Link} from 'react-router-dom';

export const FinishedQuiz = ({results, quiz, onRetry}) => {
	const successCount = Object.keys(results).reduce((total, key) => {
		if(results[key] === 'success') {
			total++
		}
		return total;
	}, 0)
	return (
		<div className={s.FinishedQuiz}>
			<ul>
				{quiz.map((i, inx) => {
					const cls = [
						'fa',
						results[i.id] === 'error' ? 'fa-times' : 'fa-check',
						s[results[i.id]] 
					]
					return (
						<li 
							key={inx}
						>
							<strong>{inx +1}</strong>.&nbsp;
							{i.question}
							<i className={cls.join(' ')}/>
						</li>
					)
					
				})}
				
			</ul>
			
			<p>Right: {successCount}/{quiz.length}</p>
			
			<div>
				<Button onClick={onRetry} type={'primary'}>Repeat</Button>
				<Link to={'/'}>
					<Button onClick={onRetry} type={'success'}>Get the list of tests</Button>
				</Link>
				
			</div>
		</div>
	)
}