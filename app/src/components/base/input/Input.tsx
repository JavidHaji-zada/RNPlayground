import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { useTheme } from "@hooks/context";
import { InputProps } from "./types";
import { Theme } from "@customTypes/theme";

export const Input = React.forwardRef<TextInput, InputProps>(
	(props: InputProps, ref: React.ForwardedRef<TextInput>) => {
		const theme = useTheme();
		const styles = useStyles(theme);
		const {
			color = theme.color.text.normal,
			size,
			placeholderSize,
			value,
			style,
		} = props;

		const fontSize = React.useMemo(
			() => (value ? size : placeholderSize),
			[value, placeholderSize, size],
		);

		return (
			<TextInput
				ref={ref}
				{...props}
				style={[
					{
						fontSize,
						color,
					},
					styles.input,
					style,
				]}
			/>
		);
	},
);

const useStyles = (theme: Theme) =>
	StyleSheet.create({
		input: {
			borderBottomColor: theme.color.accentSecondary,
			borderBottomWidth: 1,
			paddingBottom: theme.spacing.sm,
		},
	});
