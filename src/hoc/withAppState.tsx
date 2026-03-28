import React, { ComponentProps, ElementType } from "react";
import { useAppState } from "../customHooks/useAppState";

export const withAppState = (Component: ElementType) => {
  return (props: ComponentProps<ElementType>) => {
    const appState = useAppState();

    return <Component appState={appState} {...props} />;
  };
};
