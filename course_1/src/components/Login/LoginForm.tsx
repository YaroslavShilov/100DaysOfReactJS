import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { requiredField } from "../../utils/validators/validators";
import s from "./../common/FormsControls/FormsControls.module.css";
import React from "react";
import { LoginFormValuesType } from "../../types/types";

type PropsType = {
  captchaUrl: string | null;
};

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>;

const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, PropsType> & PropsType
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormValuesTypeKeys>(
        "Email",
        "email",
        [requiredField],
        Input
      )}

      {createField<LoginFormValuesTypeKeys>(
        "Password",
        "password",
        [requiredField],
        Input,
        {
          type: "password",
        }
      )}

      {createField<LoginFormValuesTypeKeys>(
        undefined,
        "rememberMe",
        [],
        Input,
        { type: "checkbox" },
        "rememberMe"
      )}

      {captchaUrl && (
        <div>
          <img src={captchaUrl} alt="captcha Img" />
          {createField<LoginFormValuesTypeKeys>(
            "Symbols from image",
            "captcha",
            [requiredField],
            Input
          )}
        </div>
      )}

      {error && <div className={s.formSummaryError}>{error}</div>}

      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default reduxForm<LoginFormValuesType, PropsType>({
  form: "login",
})(LoginForm);
