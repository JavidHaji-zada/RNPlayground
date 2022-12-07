import React from "react";
import { Spinner } from "../spinner";
import { Button, ButtonProps } from "./Button";
import { useTheme } from "@hooks/context";

export interface ButtonWithSpinnerProps extends ButtonProps {
	loading: boolean;
}

export function ButtonWithSpinner(props: ButtonWithSpinnerProps): JSX.Element {
	const { loading, ...buttonProps } = props;
	const theme = useTheme();
	return (
		<Button
			{...buttonProps}
			textProps={{ ...props.textProps, color: theme.color.text.normal }}>
			{loading && <Spinner />}
		</Button>
	);
}
