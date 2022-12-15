import React from "react";
import { SafeAreaContainer } from "@components/layout";
import { useTheme } from "@hooks/context";
import { HomeHeader as Header } from "./components";
import useStyles from "./styles";

export function HomeScreen(): JSX.Element {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<SafeAreaContainer style={styles.container}>
			<Header />
		</SafeAreaContainer>
	);
}
