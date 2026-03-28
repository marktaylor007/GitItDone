import classes from "./Header.module.scss";
import { HeaderLink } from "./HeaderLink/HeaderLink";

export const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderTitle}>GitItDone</div>
      <nav className="m-auto">
        <HeaderLink url="/">Home</HeaderLink>
        <HeaderLink url="/stats">Stats</HeaderLink>
        <HeaderLink url="/about">About</HeaderLink>
      </nav>
    </header>
  );
};
