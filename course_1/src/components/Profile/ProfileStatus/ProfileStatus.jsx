import React, {useEffect, useState} from 'react';

export const ProfileStatus = ({status: propStatus, updateUserStatus}) => {

	const [status, setStatus] = useState(propStatus)
	const [editMode, setEditMode] = useState(false);

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		updateUserStatus(status)
	}

	const onStatusChange = (e) => {
		setStatus(e.target.value)
	}

	useEffect(() => {
		setStatus(propStatus)
	}, [propStatus])

	return (
		<>
			{editMode
				? <input
						type={'text'}
						value={status || ''}
						onBlur={deactivateEditMode}
						onChange={onStatusChange}
						autoFocus
					/>
				: <span
						onDoubleClick={activateEditMode}
					>
						{!status ? '---' : status}
					</span>
			}


		</>
	);
}