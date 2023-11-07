import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Write-Notes`;
  }, [title]);

  return null;
};
