import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
	color?: string;
	size?: number;
	placeholderSize?: number;
}
