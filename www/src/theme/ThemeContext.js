import { createContext } from "react";

export const themes = {
  dark: "0",
  light: "1",
};

export const ThemeContext = createContext({
    theme: themes.dark,
  changeTheme: () => {},
});