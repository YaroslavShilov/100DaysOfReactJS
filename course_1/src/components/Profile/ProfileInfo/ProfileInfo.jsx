import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";

const ProfileInfo = ({profile, status, updateUserStatus}) => {
	if(!profile) {
		return <Preloader />
	}
  return (
	  <div>
		  {/*<div>
				<img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt="bg"/>
		  </div>*/}
		  <div className={s.descriptionBlock}>
			  <img src={profile.photos.large} alt="avatar"/>
				<ProfileStatus
					status={status}
					updateUserStatus={updateUserStatus}
				/>
			  <h2>Мой ник: {profile.fullName}</h2>
			  <h3>Обо мне: {profile.aboutMe}</h3>
			  <h4>Поиск работы: {profile.lookingForAJobDescription}</h4>
		  </div>
	  </div>
  )
};

export default ProfileInfo;