import React from "react";
import { Text as RNText } from "react-native";
import { useTheme } from "@hooks/context";
import { TextProps } from "./types";

export function Text(props: TextProps): JSX.Element {
	const theme = useTheme();
	const {
		color = theme.color.text.normal,
		size = theme.typography.text,
		...textProps
	} = props;
	return <RNText style={{ color, fontSize: size }} {...textProps} />;
}
