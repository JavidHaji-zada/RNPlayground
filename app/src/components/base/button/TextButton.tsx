import { useTheme } from "@hooks/context";
import React from "react";
import { StyleSheet } from "react-native";
import { Button, ButtonProps } from "./Button";

export function TextButton(props: ButtonProps): JSX.Element {
	const theme = useTheme();
	return (
		<Button
			{...props}
			style={[styles.textBtn, props.style]}
			textProps={{ ...props.textProps, color: theme.color.text.normal }}
		/>
	);
}

const styles = StyleSheet.create({
	textBtn: { backgroundColor: "transparent" },
});
