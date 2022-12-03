import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "@contexts/theme";

function App(): JSX.Element {
	return (
		<View style={styles.container}>
			<ThemeProvider>
				<></>
			</ThemeProvider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});

export default App;
