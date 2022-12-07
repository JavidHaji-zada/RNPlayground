import React from "react";
import {
	StyleSheet,
	TouchableOpacityProps,
	TouchableOpacity,
} from "react-native";
import { useTheme } from "@hooks/context";
import { Text, TextProps } from "../typography";
import { Theme } from "@customTypes/theme";

export interface ButtonProps extends TouchableOpacityProps {
	text: string;
	textProps?: TextProps;
}

export function Button(props: ButtonProps): JSX.Element {
	const { textProps, text, ...buttonProps } = props;
	const theme = useTheme();
	const styles = useStyles(theme);
	return (
		<TouchableOpacity
			{...buttonProps}
			style={[styles.button, buttonProps.style]}>
			<Text {...textProps}>{text}</Text>
		</TouchableOpacity>
	);
}

const useStyles = (theme: Theme) =>
	StyleSheet.create({
		button: {
			backgroundColor: theme.color.secondary,
			padding: theme.spacing.mdl,
			alignItems: "center",
			justifyContent: "center",
			borderRadius: theme.layout.borderRadiusSM,
		},
	});
