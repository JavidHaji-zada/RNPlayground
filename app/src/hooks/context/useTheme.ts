import { useContext } from "react";
import { ThemeContext } from "@contexts/theme/Theme.context";
import { Theme } from "@customTypes/theme";

export function useTheme(): Theme {
	return useContext(ThemeContext);
}
