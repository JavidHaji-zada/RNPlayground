import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export function responsiveHeight(heightPercentage: number) {
	return height * (heightPercentage / 100);
}

export function responsiveWidth(widthPercentage: number) {
	return width * (widthPercentage / 100);
}
