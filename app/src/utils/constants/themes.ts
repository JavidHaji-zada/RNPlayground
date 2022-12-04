import { Theme, ThemeName } from "@customTypes/theme";
import { scale } from "@utils/scaling";

const spacing = {
	xs: scale(2),
	sm: scale(4),
	smd: scale(6),
	md: scale(8),
	mdl: scale(10),
	slg: scale(12),
	lg: scale(16),
	lgl: scale(20),
	xl: scale(24),
	xxl: scale(32),
};

const typography = {
	subtext: 10,
	text: 12,
	subtitle: 14,
	title: 16,
	subheading: 20,
	heading: 24,
};

export const themes: { [key in ThemeName]: Theme } = {
	[ThemeName.Dark]: {
		name: ThemeName.Light,
		color: {
			primary: "#5BA561",
			secondary: "#89D37D",
			info: "#106BDA",
			success: "#157F40",
			warning: "#FFC107",
			danger: "#CE3426",
			promotional: "#FFE7D8",
			accent: "#3A3633",
			accentSecondary: "#9EA172",
			background: "#0F000F",
			text: {
				light: "#FFFFFF",
				normal: "#FFFFFF",
				dark: "#FFFFFF",
			},
		},
		spacing,
		typography,
	},
	[ThemeName.Light]: {
		name: ThemeName.Light,
		color: {
			primary: "#5BA561",
			secondary: "#89D37D",
			info: "#106BDA",
			success: "#157F40",
			warning: "#FFC107",
			danger: "#CE3426",
			promotional: "#FFE7D8",
			accent: "#3A3633",
			accentSecondary: "#9EA172",
			background: "#F0FFF0",
			text: {
				light: "#000000",
				normal: "#000000",
				dark: "#000000",
			},
		},
		spacing,
		typography,
	},
};
