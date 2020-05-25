import React from "react";
import s from './QuizCreator.module.scss';
import Button from "../../components/UI/Button/Button";
import {createControl, validate, validateForm} from "../../form/formFramework";
import Input from "../../components/UI/Input/Input";
import {Auxiliary} from "../../hoc/Auxiliary/Auxiliary";
import {Select} from "../../components/UI/Select/Select";
import {connect} from "react-redux";
import {createQuizQuestion, finishCreateQuiz} from "../../store/actions/create";

function createOptionControl(number) {
	return createControl({
		label: `#${number}`,
		errorMessage: 'value is hollow',
		id: number,
	}, {required: true})
}

function createFormControls() {
	return {
		question: createControl({
			label: 'Write question',
			errorMessage: 'Question is wrong'
		}, {required: true}),
		option1: createOptionControl(1),
		option2: createOptionControl(2),
		option3: createOptionControl(3),
		option4: createOptionControl(4),
	}
}


class QuizCreator extends React.Component {
	
	state = {
		quiz: [],
		isFormValid: false,
		rightAnswerId: 1,
		formControls: createFormControls(),
	}
	
	

	submitHandler = (e) => {
		e.preventDefault();
	}

	addQuestionHandler = (e) => {
		e.preventDefault();
		
		const {question, option1, option2, option3, option4} = this.state.formControls
		
		const questionItem = {
			question: question.value,
			id: this.props.quiz.length + 1,
			rightAnswerId: this.state.rightAnswerId,
			answers: [
				{text: option1.value, id: option1.id},
				{text: option2.value, id: option2.id},
				{text: option3.value, id: option3.id},
				{text: option4.value, id: option4.id},
			]
		}
		
		this.props.createQuizQuestion(questionItem)
		
		this.setState({
			isFormValid: false,
			rightAnswerId: 1,
			formControls: createFormControls(),
		})
	}

	createQuizHandler = (e) => {
		e.preventDefault();
		
		this.setState({
			isFormValid: false,
			rightAnswerId: 1,
			formControls: createFormControls(),
		})
		
		this.props.finishCreateQuiz();
	}

	changeHandler = (value, controlName) => {
		const formControls = {...this.state.formControls};
		const control = {...formControls[controlName]};
		
		control.touched = true;
		control.value = value;
		control.valid = validate(control.value, control.validation);
		
		formControls[controlName] = control;
		
		this.setState({
			formControls,
			isFormValid: validateForm(formControls),
		})
	}

	renderControls() {
		return Object.keys(this.state.formControls).map((i,inx) => {
			const control = this.state.formControls[i]
			
			return (
				<Auxiliary key={i + inx}>
					<Input
						label={control.label}
						value={control.value}
						valid={control.valid}
						shouldValidate={!!control.validation}
						touched={control.touched}
						errorMessage={control.errorMessage}
						onChange={e => this.changeHandler(e.target.value, i)}
					/>
					{inx === 0 && <hr/>}
				</Auxiliary>
			)
		})
	}

	selectChangeHandler = (e) => {
		this.setState({
			rightAnswerId: +e.target.value, //плюс переводит в число
		})
	}
	
	render() {
		const select = <Select
			label={'choose right answer'}
			value={this.state.rightAnswerId}
			onChange={this.selectChangeHandler}
			options={[
				{text: 1, value: 1},
				{text: 2, value: 2},
				{text: 3, value: 3},
				{text: 4, value: 4},
			]}
		/>
		
		return (
			<div className={s.QuizCreator}>
				<div>
					<h1>Create Test</h1>

					<form onSubmit={this.submitHandler}>
						
						{this.renderControls()}
						
						
						{select}
						
						<Button
							type={'primary'}
							onClick={this.addQuestionHandler}
							disabled={!this.state.isFormValid}
						>
							Add question
						</Button>

						<Button
							type={'success'}
							onClick={this.createQuizHandler}
							disabled={this.props.quiz.length === 0}
						>
							Create test
						</Button>
					</form>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		quiz: state.create.quiz
	};
}

function mapDispatchToProps(dispatch) {
	return {
		createQuizQuestion: item => dispatch(createQuizQuestion(item)),
		finishCreateQuiz: () => dispatch(finishCreateQuiz())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator);