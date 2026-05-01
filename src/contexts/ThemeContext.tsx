import { createContext } from "react";

export const themeOptions = {
  dark: "dark",
  light: "light",
} as const;

type Theme = (typeof themeOptions)[keyof typeof themeOptions];

type initialState = {
  theme: Theme;
  changeTheme: (selectedTheme: Theme) => void;
};

const DEFAULT_THEME = themeOptions.light;

const initialState: initialState = {
  theme: DEFAULT_THEME,
  changeTheme: () => {},
};

export const ThemeContext = createContext<initialState>(initialState);
