import React from 'react';

export class ProfileStatus extends React.Component {

	state = {
		editMode: false,
		value: this.props.status
	}

	onChangeHandler = (e) => {
		const value = e.target.value;
		this.setState({value})
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		});
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		});
	}


	render() {
		return (
			<>
				{this.state.editMode
					? <div>
							<input
								type={'text'}
								value={this.state.value}
								onChange={this.onChangeHandler}
								onBlur={this.deactivateEditMode}
								autoFocus
							/>
						</div>
					: <div>
							<span
								onDoubleClick={this.activateEditMode}
							>{this.state.value}</span>
					</div>
				}


			</>
		);
	}
}
