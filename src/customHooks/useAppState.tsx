import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

type AppStateType = {
  appState: {
    editToDoId: number;
    isDrawerOpen: boolean;
  };
  setAppState: Dispatch<
    SetStateAction<{ editToDoId: number; isDrawerOpen: boolean }>
  >;
};

export const AppState = createContext<AppStateType>({
  appState: { editToDoId: -1, isDrawerOpen: false },
  setAppState: () => {},
});

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [appState, setAppState] = useState({
    editToDoId: -1,
    isDrawerOpen: false,
  });

  return (
    <AppState.Provider value={{ appState, setAppState }}>
      {children}
    </AppState.Provider>
  );
};

export const useAppState = () => useContext(AppState);
