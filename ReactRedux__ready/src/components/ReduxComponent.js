import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionChangeFirstName,
  actionChangeSecondName,
} from "../store/actions/actions";

export const ReduxComponent = () => {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.firstName);
  const secondName = useSelector((state) => state.secondName);

  const onFirstNameHandler = (e) => {
    dispatch(actionChangeFirstName(e.target.value));
  };

  const onSecondNameHandler = (e) => {
    dispatch(actionChangeSecondName(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder={"First name"}
        value={firstName}
        onChange={onFirstNameHandler}
      />
      <input
        type="text"
        placeholder={"Second name"}
        value={secondName}
        onChange={onSecondNameHandler}
      />
    </div>
  );
};
