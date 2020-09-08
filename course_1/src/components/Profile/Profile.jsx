import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo
	      profile={props.profile}
	      status={props.status}
	      updateUserStatus={props.updateUserStatus}
      />
      <MyPostsContainer/>
    </div>
  )
};

export default Profile;