import React from 'react';
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({status, updateUserStatus, handleSubmit, profile, error}) => {

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<strong>Status: </strong>
				<div>
					<ProfileStatus
						status={status}
						updateUserStatus={updateUserStatus}
					/>
				</div>

			</div>

			<div>
				<strong>My nickname: </strong>
				{createField('Nickname', 'fullName', [], Input )}
			</div>

			<div>
				<strong>About me: </strong>
				{createField('About me', 'aboutMe', [], Textarea )}
			</div>

			<div>
				<strong>Looking for a job: </strong>
				{createField('', 'lookingForAJobDescription', [], Textarea)}
			</div>


			<p><strong>Contacts:</strong></p>
			<ul>
				{
					Object.keys(profile.contacts).map(key =>
						<li key={key}>
							<strong>{key}: </strong>
							{createField(key, `contacts.${key}`, [], Input )}
						</li>
					)

				}
			</ul>

			{error &&
			<div className={s.formSummaryError}>
				{error}
			</div>
			}

			<p>
				<button>Save</button>
			</p>
		</form>
	);
}

export default reduxForm({form: 'edit-profile'})(ProfileDataForm)