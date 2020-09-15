import React, {useEffect, useState} from 'react';

export const ProfileStatus = (props) => {

	const [status, setStatus] = useState(props.status)
	const [editMode, setEditMode] = useState(false);

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateUserStatus(status)
	}

	const onStatusChange = (e) => {
		setStatus(e.target.value)
	}

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	return (
		<>
			{editMode
				? <div>
					<input
						type={'text'}
						value={status}
						onBlur={deactivateEditMode}
						onChange={onStatusChange}
						autoFocus
					/>
				</div>
				: <div>
					<span
						onDoubleClick={activateEditMode}
					>{!status ? '---' : status}</span>
				</div>
			}


		</>
	);
}