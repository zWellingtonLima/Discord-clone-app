import { useState, useEffect } from "react";

export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  // If window isn't undefined and window.location.origin exists, render the first part, otherwise, render the second one.

  if (!mounted) {
    return "";
  }

  return origin;
};
