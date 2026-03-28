import classes from "./Button.module.scss";
import { ReactNode, MouseEventHandler, memo } from "react";

export type ButtonProps = {
  type?: "button" | "submit";
  primary?: boolean;
  secondary?: boolean;
  transparent?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
};

export const Button = memo(
  ({
    className = "",
    type = "button",
    primary,
    secondary,
    transparent,
    disabled,
    onClick,
    children,
  }: ButtonProps) => {
    const classNames = [classes.Button, className];

    if (primary) {
      classNames.push(classes.Primary);
    }

    if (secondary) {
      classNames.push(classes.Secondary);
    }

    if (transparent) {
      classNames.push(classes.Transparent);
    }

    if (disabled) {
      classNames.push(classes.Disabled);
    }

    return (
      <button type={type} onClick={onClick} className={classNames.join(" ")}>
        {children}
      </button>
    );
  },
);
