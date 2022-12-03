import React from "react";
import { useColorScheme } from "react-native";
import { themes } from "@constants/themes";
import { ThemeContext } from "./Theme.context";
import { ThemeName } from "@customTypes/theme";

export function ThemeProvider(props: React.PropsWithChildren<{}>) {
	const prefferedTheme =
		useColorScheme() === "dark" ? ThemeName.Dark : ThemeName.Light;
	const theme = themes[prefferedTheme];

	return <ThemeContext.Provider value={theme} {...props} />;
}
