import React from 'react';
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import {ProfileContact} from "./ProfileContact";

export const ProfileData = ({profile, isOwner, goToEditMode, status, updateUserStatus}) => {

	return (
		<>
			<p>
				<strong>Status: </strong>
				<ProfileStatus
					status={status}
					updateUserStatus={updateUserStatus}
				/>
			</p>
			<p>
				<strong>My nickname: </strong>
				{profile.fullName || '---'}
			</p>

			<p>
				<strong>About me: </strong>
				{profile.aboutMe || '---'}
			</p>

			<p>
				<strong>Looking for a job: </strong>
				{profile.lookingForAJobDescription || 'no'}
			</p>


			<p><strong>Contacts:</strong></p>
			<ul>
				{Object.keys(profile.contacts).map(key =>
					<ProfileContact
						key={key}
						title={key}
						value={profile.contacts[key]}
					/>
				)}
			</ul>

			{isOwner &&
			<p>
				<button onClick={goToEditMode}>Edit information</button>
			</p>
			}
		</>
	);
}
