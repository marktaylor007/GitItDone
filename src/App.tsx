import "./styles/general.scss";
import { Header } from "./partials/Header/Header";
import { AppStateProvider } from "./customHooks/useAppState";
import { Route, Routes } from "react-router";
import { withSuspense } from "./hoc/withSuspense";
import { PageLayout } from "./components/PageLayout/PageLayout";

const AsyncToDoContainer = withSuspense(
  () => import("./containers/ToDoContainer"),
);

const AsyncEditContainer = withSuspense(
  () => import("./containers/EditContainer"),
);

const AsyncStatsContainer = withSuspense(
  () => import("./containers/StatsContainer"),
);

const AsyncAboutContainer = withSuspense(
  () => import("./containers/AboutContainer"),
);

export function App() {
  return (
    <>
      <AppStateProvider>
        <Header />
        <PageLayout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {AsyncToDoContainer}
                  {AsyncEditContainer}
                </>
              }
            ></Route>
            <Route path="/stats" element={AsyncStatsContainer}></Route>
            <Route path="/about" element={AsyncAboutContainer}></Route>
          </Routes>
        </PageLayout>
      </AppStateProvider>
    </>
  );
}

export default App;
