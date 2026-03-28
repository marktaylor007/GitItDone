import { StaticRouter } from "react-router";
import App from "../App";
export const SsrApp = (pathname: string) => {
  return (
    <StaticRouter location={pathname}>
      <App />
    </StaticRouter>
  );
};
