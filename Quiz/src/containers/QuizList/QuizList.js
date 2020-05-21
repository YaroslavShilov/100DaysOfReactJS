import React, {Component} from 'react';
import s from './QuizList.module.scss';
import {NavLink} from "react-router-dom";
import axios from '../../axios/axios-quiz';
import {Loader} from "../../components/UI/Loader/Loader";


class QuizList extends Component {
	
	state = {
		quizes: [],
		loading: true,
	}
	
	renderQuizes() {
		return this.state.quizes.map((i) => {
			return (
				<li key={i.id}>
					<NavLink
						to={'/quiz/' + i.id}
					>
						{i.name}
					</NavLink>
				</li>
			)
		})
	}
	
	async componentDidMount() {
		try {
			const response = await axios.get(`/quiz.json`)
			
			const quizes = [];
			Object.keys(response.data).forEach((key, inx) => {
				quizes.push({
					id: key,
					name: `Test #${inx + 1}`,
				})
			})
			
			this.setState({
				quizes,
				loading: false
			})
		} catch (e) {
			console.log(e)
		}
	}

	render() {
		return (
			<div className={s.QuizList}>
				<div>
					<h1>List of tests</h1>
					
					{this.state.loading 
						? <Loader/> 
						: <ul>{this.renderQuizes()}</ul>
					}
				</div>
				
			</div>
		);
	}
}

export default QuizList;