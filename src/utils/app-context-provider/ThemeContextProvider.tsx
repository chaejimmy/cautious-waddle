import React, { createContext, useContext, useEffect, useState } from "react";
import defaultConfig, {
  backgroundDark,
  backgroundLight,
  defaultTheme,
  textDark,
  textLight,
} from "./defaultConfig";
import PropTypes from "prop-types";
import { LayoutDirection, ThemeMode } from "shared/constants/AppEnums";

export interface ThemeData {
  theme: any;
  themeMode: string;
  themeStyle: string;
}

export interface ThemeActions {
  updateTheme: (theme: any) => void;
  updateThemeMode: (themeMode: string) => void;
  updateThemeStyle: (themeStyle: string) => void;
}

export const ThemeContext = createContext<ThemeData>({
  theme: defaultTheme.theme,
  themeMode: defaultConfig.themeMode,
  themeStyle: defaultConfig.themeStyle,
});

const ThemeActionsContext = createContext<ThemeActions>({
  updateTheme: () => {},
  updateThemeMode: () => {},
  updateThemeStyle: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const useThemeActionsContext = () => useContext(ThemeActionsContext);

interface Props {
  children: React.ReactNode;
}

const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, updateTheme] = useState<any>(defaultTheme.theme);
  const [themeMode, updateThemeMode] = useState<string>(
    defaultConfig.themeMode
  );
  const [themeStyle, updateThemeStyle] = useState<string>(
    defaultConfig.themeStyle
  );

  useEffect(() => {
    updateTheme({
      ...theme,
      palette: {
        ...theme.palette,
        mode: themeMode === ThemeMode.DARK ? ThemeMode.DARK : ThemeMode.LIGHT,
        background:
          themeMode === ThemeMode.DARK ? backgroundDark : backgroundLight,
        text: themeMode === ThemeMode.DARK ? textDark : textLight,
      },
    });
  }, [themeMode]);

  useEffect(() => {
    if (theme.direction === LayoutDirection.RTL) {
      document.body.setAttribute("dir", LayoutDirection.RTL);
    } else {
      document.body.setAttribute("dir", LayoutDirection.LTR);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeStyle,
        themeMode,
      }}
    >
      <ThemeActionsContext.Provider
        value={{
          updateTheme,
          updateThemeStyle,
          updateThemeMode,
        }}
      >
        {children}
      </ThemeActionsContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
