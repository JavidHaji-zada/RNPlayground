import { Theme } from "@customTypes/theme";
import { StyleSheet } from "react-native";

const useStyles = (theme: Theme) =>
	StyleSheet.create({
		container: {
			backgroundColor: theme.color.background,
		},
	});

export default useStyles;
