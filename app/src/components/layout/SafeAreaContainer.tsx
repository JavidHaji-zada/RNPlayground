import React from "react";
import { StyleSheet, ViewProps } from "react-native";
import {
	SafeAreaView,
	SafeAreaViewProps,
} from "react-native-safe-area-context";

type SafeAreaContainerProps = Pick<ViewProps, "children" | "style"> &
	Pick<SafeAreaViewProps, "edges"> & {
		avoidFullscreen?: boolean;
	};

export function SafeAreaContainer(props: SafeAreaContainerProps): JSX.Element {
	const {
		children,
		edges = ["top", "bottom"],
		avoidFullscreen,
		style = {},
	} = props;
	return (
		<SafeAreaView
			style={[avoidFullscreen ? {} : styles.container, style]}
			edges={edges}>
			{children}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});
