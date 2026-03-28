import classes from "./CheckBoxField.module.scss";
import { memo } from "react";

type CheckBoxFieldProps = {
  value?: boolean;
  label?: string;
  name?: string;
  onInput?: (value: boolean) => void;
};

export const CheckBoxField = memo(
  ({ label, name, onInput, value }: CheckBoxFieldProps) => {
    return (
      <div className={classes.CheckBox}>
        <input
          name={name}
          type="checkbox"
          checked={value}
          onChange={(event) => onInput && onInput(event.target.checked)}
        />
        {label ? (
          <label htmlFor={name} className="ml-1">
            {label}
          </label>
        ) : null}
      </div>
    );
  },
);
