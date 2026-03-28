import { ReactNode } from "react";

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="ml-auto mr-auto" style={{ width: "500px" }}>
      {children}
    </div>
  );
};
