import { forwardRef, memo } from "react";
import classes from "./TextField.module.scss";

export type TextFieldProps = {
  onInput: (value: string) => void;
  value: string;
  label?: string;
  name?: string;
};

export const TextField = memo(
  forwardRef<HTMLInputElement, TextFieldProps>(
    ({ onInput, value, label, name }: TextFieldProps, ref) => {
      return (
        <>
          {label ? <label htmlFor={name}>{label}</label> : null}
          <input
            name={name}
            ref={ref}
            value={value}
            onChange={(event) => onInput(event.target.value)}
            className={classes.TextField}
            type="text"
          />
        </>
      );
    },
  ),
);
