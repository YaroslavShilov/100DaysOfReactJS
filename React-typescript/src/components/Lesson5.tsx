import React, {Component} from 'react';

const POSITIONS = [
	{
		id: 'fb',
		value: 'Front-end Developer',
		title: 'Front-end Developer',
	},
	{
		id: 'bd',
		value: 'Back-end Developer',
		title: 'Back-end Developer',
	}
];

const DEFaULT_SELECT_VALUE = POSITIONS[0].value;
const styles = { display: 'block', marginBottom: '10px'};


export class Lesson5 extends Component {
	state = {
		inputText: '',
		textareaText: '',
		selectText: DEFaULT_SELECT_VALUE,
		tester: 'tester',
		showData: {
			name: '',
			text: '',
			position: '',
		}
	}

	handleInputChange = (e) => {
		const { target: {value : inputText} } = e;
		this.setState({ inputText });
	}

	handleTextareaChange = (e) => {
		const {target: {value: textareaText} } = e;
		this.setState({textareaText})
	}

	handleSelectChange = (e) => {
		const { target: { value: selectText } } = e;
		this.setState({selectText});
	}

	handleShow = (e) => {
		e.preventDefault();
		const { inputText, textareaText, selectText } = this.state;

		this.setState({
			inputText: '',
			textareaText: '',
			selectText: DEFaULT_SELECT_VALUE,
			showData: {
				name: inputText,
				text: textareaText,
				position: selectText,
			}
		})
	}

	hadnleTest = (): void => {
		const tester = '123'
		console.log('state', this.state);
		this.setState({tester})
		console.log('after', this.state);
	}

	render() {
		const {inputText, textareaText, selectText, showData } = this.state;
		const {name, text, position} = showData;
		return (
			<>
				<form>
					<label style={styles}>
						Name:
						<input
							type="text"
							value={inputText}
							onChange={this.handleInputChange}
						/>
					</label>
				</form>
			</>
		)
	}
}
