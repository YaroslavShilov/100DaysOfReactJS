import React, {Component} from 'react';
import s from './QuizList.module.scss';
import {NavLink} from "react-router-dom";

class QuizList extends Component {
	
	renderQuizes() {
		return [1,2,3].map((i, inx) => {
			return (
				<li key={inx}>
					<NavLink
						to={'/quiz/' + i}
					>
						Test {i}
					</NavLink>
				</li>
			)
		})
	}
	
	render() {
		return (
			<div className={s.QuizList}>
				<div>
					<h1>List of tests</h1>
					<ul>
						{this.renderQuizes()}
					</ul>
				</div>
				
			</div>
		);
	}
}

export default QuizList;