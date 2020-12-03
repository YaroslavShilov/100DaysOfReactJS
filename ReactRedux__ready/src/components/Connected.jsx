import React from "react";
import { useDispatch } from "react-redux";
import { loadData } from "../store/actions";

export const Connected = () => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(loadData());

  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
