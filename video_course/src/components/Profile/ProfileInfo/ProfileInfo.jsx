import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
	if(!props.profile) {
		return <Preloader />
	}
	
  return (
	  <div>
		  {/*<div>
			  <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt="bg"/>
		  </div>*/}
		  <div className={s.descriptionBlock}>
			  <img src={props.profile.photos.large}/>
			  <h2>Мой ник: {props.profile.fullName}</h2>
			  <h3>Обо мне: {props.profile.aboutMe}</h3>
			  <h4>Поиск работы: {props.profile.lookingForAJobDescription}</h4>
		  </div>
	  </div>
  )

};

export default ProfileInfo;