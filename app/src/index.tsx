import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "@contexts/theme";
import RootNavigator from "@navigation/root";

function App(): JSX.Element {
	return (
		<View style={styles.container}>
			<ThemeProvider>
				<RootNavigator />
			</ThemeProvider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});

export default App;
