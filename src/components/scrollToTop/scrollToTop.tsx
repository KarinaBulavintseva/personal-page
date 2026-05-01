import { useEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scroll = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(scroll);
  }, [pathname]);

  return null;
};
