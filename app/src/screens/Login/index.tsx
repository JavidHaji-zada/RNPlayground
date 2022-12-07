import React from "react";
import { LoginForm } from "./components";
import { SafeAreaContainer } from "@components/layout";
import { useTheme } from "@hooks/context";
import useStyles from "./styles";

function LoginScreen(): JSX.Element {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<SafeAreaContainer style={styles.container}>
			<LoginForm />
		</SafeAreaContainer>
	);
}

export default LoginScreen;
