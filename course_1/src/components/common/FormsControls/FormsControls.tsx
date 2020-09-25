import React from "react";
import s from "./FormsControls.module.css";
import { Field } from "redux-form";
import { FieldValidatorType } from "../../../utils/validators/validators";
import { LoginFormValuesType } from "../../../types/types";

type FormControlPropsType = {
  meta: {
    touched: boolean;
    error: string;
  };
  input: any;
  component: string;
};

const FormControl: React.FC<FormControlPropsType> = ({
  meta: { touched, error },
  component,
  input,
  ...props
}) => {
  const isError = touched && error;
  const classes = `${s.formControl} ${isError ? s.error : ""}`;
  return (
    <div className={classes}>
      {component === "textarea" && <textarea {...props} {...input} />}
      {component === "input" && <input {...props} {...input} />}

      {isError && <span>{error}</span>}
    </div>
  );
};

export const Textarea: React.FC<FormControlPropsType> = (props) => (
  <FormControl {...props} component={"textarea"} />
);

export const Input: React.FC<FormControlPropsType> = (props) => (
  <FormControl {...props} component={"input"} />
);

type LoginFormPropertiesType = keyof LoginFormValuesType;

export function createField<FormKeys extends string>(
  placeholder: string | undefined,
  name: FormKeys,
  validators: Array<FieldValidatorType>,
  component: React.FC<FormControlPropsType>,
  props = {},
  text = ""
) {
  return (
    <>
      <Field
        name={name}
        component={component}
        validate={validators}
        placeholder={placeholder}
        {...props}
      />
      {text}
    </>
  );
}
