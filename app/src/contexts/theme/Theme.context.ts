import React from "react";
import { ThemeName } from "@customTypes/index";
import { themes } from "@constants/themes";

export const ThemeContext = React.createContext(themes[ThemeName.Light]);
