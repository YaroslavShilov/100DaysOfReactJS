import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";
import { LoginFormValuesType } from "../../types/types";

type MapStateToPropsType = {
  isAuth: boolean;
  captchaUrl: string | null;
};

type MapDispatchToPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void;
};

type OwnPropsType = {};

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

const Login: React.FC<PropsType> = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = ({
    email,
    password,
    rememberMe,
    captcha,
  }: LoginFormValuesType): void => {
    login(email, password, rememberMe, captcha);
  };

  if (isAuth) return <Redirect to={"/profile"} />;

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

function mapStateToProps(state: AppStateType): MapStateToPropsType {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  };
}

const mapDispatchToProps: MapDispatchToPropsType = {
  login,
};
export default connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  OwnPropsType,
  AppStateType
>(
  mapStateToProps,
  mapDispatchToProps
)(Login);
