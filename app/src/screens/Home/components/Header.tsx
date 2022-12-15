import React from "react";
import { StyleSheet, View } from "react-native";
import { Title } from "@components/base/typography";
import { Theme } from "@customTypes/theme";
import { useTheme } from "@hooks/context";

export function HomeHeader(): JSX.Element {
	const theme = useTheme();
	const styles = useStyles(theme);
	return (
		<View style={styles.container}>
			<Title>RN Playground</Title>
		</View>
	);
}

const useStyles = (theme: Theme) =>
	StyleSheet.create({
		container: {
			marginLeft: theme.spacing.md,
		},
	});
