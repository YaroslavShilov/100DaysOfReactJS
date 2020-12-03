import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo
	      isOwner={props.isOwner}
	      profile={props.profile}
	      status={props.status}
	      updateUserStatus={props.updateUserStatus}
	      savePhoto={props.savePhoto}
	      saveProfile={props.saveProfile}
      />
      <MyPostsContainer/>
    </div>
  )
};

export default Profile;