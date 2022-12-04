import { TextProps as RNTextProps } from "react-native";

export interface TextProps extends Pick<RNTextProps, "children"> {
	color?: string;
	size?: number;
}
