import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "@hooks/context";

interface SpinnerProps {
	size?: "small" | "large";
	color?: string;
}

export function Spinner(props: SpinnerProps): JSX.Element {
	const theme = useTheme();
	const { color = theme.color.primary, size = "small" } = props;

	return <ActivityIndicator color={color} size={size} />;
}
