import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import userPhoto from "../../../assets/images/avatar.jpg";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
	if(!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {
		const files = e.target.files
		if(files.length) {
			savePhoto(files[0])
		}
	}

  return (
	  <div>
		  <div className={s.descriptionBlock}>
			  <img src={profile.photos.large || userPhoto} alt="avatar"/>
			  {isOwner &&
				  <div>
					  <input
						  type={'file'}
						  onChange={onMainPhotoSelected}
					  />
				  </div>
			  }
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