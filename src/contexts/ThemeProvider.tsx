import { type ReactNode, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

type ThemeProviderProps = {
  children: ReactNode;
};

const themeOptions = {
  dark: "dark",
  light: "light",
} as const;

type Theme = (typeof themeOptions)[keyof typeof themeOptions];

const getTheme = (): Theme => {
  const theme = window.localStorage.getItem("theme");

  if (Object.values(themeOptions).includes(theme as Theme)) {
    return theme as Theme;
  }

  const userMedia = window.matchMedia("(prefers-color-scheme: light)");
  if (userMedia.matches) return themeOptions.light;
  return themeOptions.dark;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
  };

  const value = {
    theme,
    changeTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
