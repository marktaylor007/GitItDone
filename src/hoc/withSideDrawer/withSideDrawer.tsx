import { ComponentProps, ElementType } from "react";
import classes from "./withSideDrawer.module.scss";
import { useAppState } from "../../customHooks/useAppState";

export const withSideDrawer =
  (Component: ElementType) => (props: ComponentProps<typeof Component>) => {
    const { appState } = useAppState();

    if (appState.isDrawerOpen) {
      return (
        <div className={classes.WithSideDrawer}>
          <Component {...props} />
        </div>
      );
    } else {
      return null;
    }
    /*return appState.isDrawerOpen ? (
      <div className={classes.WithSideDrawer}>
        <Component {...props} />
      </div>
    ) : null;*/
  };
