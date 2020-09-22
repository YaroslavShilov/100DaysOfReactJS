import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import { Preloader } from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/avatar.jpg";
import { ProfileData } from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    const files = e.target.files;
    if (files.length) {
      savePhoto(files[0]);
    }
  };

  const goToEditMode = () => setEditMode(true);

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => setEditMode(false));
  };

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt="avatar" />
        {isOwner && (
          <div>
            <input type={"file"} onChange={onMainPhotoSelected} />
          </div>
        )}

        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            onSubmit={onSubmit}
            status={status}
            updateUserStatus={updateUserStatus}
            profile={profile}
          />
        ) : (
          <ProfileData
            profile={profile}
            status={status}
            updateUserStatus={updateUserStatus}
            isOwner={isOwner}
            goToEditMode={goToEditMode}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
