import React, {Component} from 'react';

type Position = {
	id: string,
	value: string,
	title: string,
}

type FormState = {
	inputText: string,
	textareaText: string,
	selectText: string,
	tester: string,
	showData: {
		name: string,
		text: string,
		position: string,
	}
}

const POSITIONS: Array<Position> = [
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

const DEFaULT_SELECT_VALUE:string = POSITIONS[0].value;
const styles: React.CSSProperties = { display: 'block', marginBottom: '10px'};


export class Lesson5 extends Component<{}, FormState> {
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

	private rootRef = React.createRef<HTMLSelectElement>();

	handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { target: {value : inputText} } = e;
		this.setState({ inputText });
	}

	handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
		const {target: {value: textareaText} } = e;
		this.setState({textareaText})
	}

	handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		const { target: { value: selectText } } = e;
		this.setState({selectText});
	}

	handleShow = (e: React.MouseEvent<HTMLButtonElement>): void => {
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

					<label style={styles}>
						Text:
						<textarea
							value={textareaText}
							onChange={this.handleTextareaChange}
						/>
					</label>

					<select
						style={styles}
						value={selectText}
						onChange={this.handleSelectChange}
						ref={this.rootRef}
					>
						{POSITIONS.map(({id, value, title}) => (
							<option
								key={id}
								value={value}
							>
								{title}
							</option>
						))}

					</select>
				</form>
			</>
		)
	}
}
