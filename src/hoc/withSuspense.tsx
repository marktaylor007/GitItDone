import React from "react";
import { ComponentType, Suspense } from "react";

const Loading = () => <div>Loading...</div>;

type ComponentImportCallBackType = () => Promise<{
  default: ComponentType<any>;
}>;

export const withSuspense = (
  ComponentImportCallBack: ComponentImportCallBackType,
) => {
  const AsyncComponent = React.lazy(ComponentImportCallBack);
  return (
    <Suspense fallback={<Loading />}>
      <AsyncComponent />
    </Suspense>
  );
};
