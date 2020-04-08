import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts 
	      profilePage={props.profilePage} 
	      store={props.store}
      />
    </div>
  )
};

export default Profile;