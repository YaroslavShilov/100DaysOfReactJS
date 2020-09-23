import React, { useEffect, useState } from "react";

type PropsType = {
  status: string;
  updateUserStatus: (status: string) => void;
};

export const ProfileStatus: React.FC<PropsType> = ({
  status: propStatus,
  updateUserStatus,
}) => {
  const [status, setStatus] = useState<string>(propStatus);
  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateUserStatus(status);
  };

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    setStatus(propStatus);
  }, [propStatus]);

  return (
    <>
      {editMode ? (
        <input
          type={"text"}
          value={status || ""}
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
          autoFocus
        />
      ) : (
        <span onDoubleClick={activateEditMode}>{!status ? "---" : status}</span>
      )}
    </>
  );
};
