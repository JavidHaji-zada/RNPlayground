import {
	AppNavigationProp,
	AppNavigationStack,
	AppScreen,
} from "@customTypes/navigation";
import { CommonActions } from "@react-navigation/native";

export class NavigationService {
	private static navigation: AppNavigationProp;

	static resetTo(stack: AppNavigationStack, screen?: AppScreen): void {
		this.navigation.dispatch(
			CommonActions.reset({
				index: 0,
				routes: [
					{
						name: stack,
						params: { screen },
					},
				],
			}),
		);
	}

	static navigateTo(
		stack: AppNavigationStack,
		screen?: AppScreen,
		params?: any,
	) {
		this.navigation.navigate(stack, { screen, params });
	}

	static setNavigator(navigator: AppNavigationProp) {
		this.navigation = navigator;
	}
}
