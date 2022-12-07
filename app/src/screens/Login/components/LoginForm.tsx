import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { AuthType, useLogin } from "../hooks/useLogin";
import { Text, Title } from "@components/base/typography";
import { TextButton, ButtonWithSpinner } from "@components/base/button";
import { CenteredRow } from "@components/layout";
import { Input } from "@components/base/input";
import { useTheme } from "@hooks/context";
import { Theme } from "@customTypes/theme";
import localizedStrings from "@utils/localization";
import { responsiveWidth } from "@utils/responsive-dimensions";
import { QueryStatus } from "@customTypes/index";

export function LoginForm(): JSX.Element {
	const {
		email,
		password,
		firstName,
		lastName,
		authType,
		error,
		queryStatus,
		setEmail,
		setPassword,
		setFirstName,
		setLastName,
		submit: submitAuth,
		setAuthType,
	} = useLogin();
	const theme = useTheme();
	const styles = useStyles(theme);

	const toggleAuthType = React.useCallback(
		() =>
			setAuthType(
				authType === AuthType.Login
					? AuthType.Register
					: AuthType.Login,
			),
		[setAuthType, authType],
	);

	return (
		<View style={styles.container}>
			<Input
				value={email}
				onChangeText={setEmail}
				placeholder={localizedStrings.screens.login["enter-email"]}
				style={styles.input}
				keyboardType="email-address"
				autoCapitalize="none"
			/>
			<Input
				value={password}
				secureTextEntry
				onChangeText={setPassword}
				placeholder={localizedStrings.screens.login["enter-password"]}
				style={styles.input}
			/>
			<View style={{ height: 200 }}>
				{authType === AuthType.Register && (
					<Animated.View entering={FadeInUp} exiting={FadeOutUp}>
						<Input
							value={firstName}
							onChangeText={setFirstName}
							placeholder={
								localizedStrings.screens.login[
									"enter-first-name"
								]
							}
							style={styles.input}
						/>
						<Input
							value={lastName}
							onChangeText={setLastName}
							placeholder={
								localizedStrings.screens.login[
									"enter-last-name"
								]
							}
							style={styles.input}
						/>
					</Animated.View>
				)}
			</View>
			<Text color={theme.color.danger}>{error?.message}</Text>
			<ButtonWithSpinner
				loading={queryStatus === QueryStatus.LOADING}
				disabled={queryStatus !== QueryStatus.IDLE}
				text={
					authType === AuthType.Login
						? localizedStrings.buttons.login
						: localizedStrings.buttons.register
				}
				onPress={submitAuth}
				style={styles.submitBtn}
			/>
			<CenteredRow style={styles.orContainer}>
				<View style={styles.line} />
				<View style={styles.orText}>
					<Title>Or</Title>
				</View>
				<View style={styles.line} />
			</CenteredRow>
			<TextButton
				text={
					authType === AuthType.Login
						? localizedStrings.buttons.register
						: localizedStrings.buttons.login
				}
				onPress={toggleAuthType}
			/>
		</View>
	);
}

const useStyles = (theme: Theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "center",
			width: responsiveWidth(80),
		},
		input: {
			width: "100%",
			marginBottom: theme.spacing.lg,
		},
		submitBtn: {
			marginTop: theme.spacing.sm,
		},
		orContainer: {
			marginVertical: theme.spacing.xxl,
			width: "100%",
		},
		line: {
			height: 1,
			width: "42.5%",
			backgroundColor: theme.color.accentSecondary,
		},
		orText: {
			marginHorizontal: "5%",
		},
	});
