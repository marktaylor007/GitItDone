import { useEffect, useRef } from "react";

//Custom auto focus hook
export const useAutoFocus = () => {
  const elementRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    elementRef.current?.focus();
  }, [elementRef]);

  return elementRef;
};
