import React from "react";
import { useTheme } from "@hooks/context";
import { TextProps } from "./types";
import { Text } from "./Text";

export function Subheading(props: TextProps): JSX.Element {
	const theme = useTheme();
	return (
		<Text
			size={theme.typography.subheading}
			color={theme.color.text.dark}
			{...props}
		/>
	);
}
