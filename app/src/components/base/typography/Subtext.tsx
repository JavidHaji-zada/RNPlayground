import React from "react";
import { useTheme } from "@hooks/context";
import { TextProps } from "./types";
import { Text } from "./Text";

export function Subtext(props: TextProps): JSX.Element {
	const theme = useTheme();
	return (
		<Text
			size={theme.typography.subtext}
			color={theme.color.text.light}
			{...props}
		/>
	);
}
