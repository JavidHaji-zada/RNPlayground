import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@contexts/theme";
import RootNavigator from "@navigation/root";
import { StoreProvider } from "@contexts/store";

function App(): JSX.Element {
	return (
		<ThemeProvider>
			<StoreProvider>
				<View style={styles.container}>
					<NavigationContainer>
						<RootNavigator />
					</NavigationContainer>
				</View>
			</StoreProvider>
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});

export default App;
