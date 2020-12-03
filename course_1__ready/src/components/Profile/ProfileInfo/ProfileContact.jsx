import React from 'react';

export const ProfileContact = ({title, value}) => {
	return (
		<li>
			<strong>{title}: </strong>
			<a
				href={value}
				rel="noopener noreferrer"
				target={"_blank"}
			>{value || '---'}</a>
		</li>
	)
}