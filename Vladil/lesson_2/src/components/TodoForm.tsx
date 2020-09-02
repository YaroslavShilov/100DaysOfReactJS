import React, {useState} from 'react';

interface TodoFormProps {
	onAdd(title: string): void,

}

export const TodoForm:React.FC<TodoFormProps> = ({onAdd}) => {
	const [value, setValue] = useState<string>('');

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
	}

	const onKeyPressHandler = (e: React.KeyboardEvent): void => {
		if(e.key === 'Enter') {
			onAdd(value);
			setValue('')
		}
	}

	return (
		<div className={'input-field mt2'}>
			<input
				type="text"
				id={'title'}
				value={value}
				onChange={onChangeHandler}
				onKeyPress={onKeyPressHandler}
			/>
			<label htmlFor={'title'} className={'active'}>Task:</label>
		</div>
	);
}
