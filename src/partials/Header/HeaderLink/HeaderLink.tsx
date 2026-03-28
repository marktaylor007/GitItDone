import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import classes from "./HeaderLink.module.scss";

export type HeaderLinkProps = {
  url: string;
  children: ReactNode;
};

export const HeaderLink = ({ url, children }: HeaderLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classes.HeaderLink +
        " ml-2 mr-2 " +
        (isActive ? classes.HeaderLinkActive : "")
      }
      to={url}
    >
      {children}
    </NavLink>
  );
};
