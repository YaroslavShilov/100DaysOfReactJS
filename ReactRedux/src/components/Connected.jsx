import React from "react";
import { useDispatch } from "react-redux";
import { putData } from "../store/actions";

export const Connected = () => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(putData({}));

  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
