import classes from "./TextAreaField.module.scss";
import { memo } from "react";

type TextAreaFieldProps = {
  value: string;
  name?: string;
  label?: string;
  onInput?: (value: string) => void;
};

export const TextAreaField = memo(
  ({ value, label, name, onInput }: TextAreaFieldProps) => {
    return (
      <>
        {label ? <label htmlFor={name}>{label}</label> : null}
        <textarea
          name={name}
          value={value}
          className={classes.TextAreaField}
          onChange={(event) => onInput && onInput(event.target.value)}
        />
      </>
    );
  },
);
