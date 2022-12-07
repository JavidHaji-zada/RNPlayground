import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

export function CenteredRow(
	props: Pick<ViewProps, "children" | "style">,
): JSX.Element {
	return (
		<View style={[props.style, styles.container]}>{props.children}</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
});
