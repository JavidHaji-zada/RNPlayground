import React from "react";
import { useTheme } from "@hooks/context";
import { TextProps } from "./types";
import { Text } from "./Text";

export function Subtitle(props: TextProps): JSX.Element {
	const theme = useTheme();
	return (
		<Text
			size={theme.typography.subtitle}
			color={theme.color.text.dark}
			{...props}
		/>
	);
}
