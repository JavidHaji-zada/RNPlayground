export enum ThemeName {
	Light = "light",
	Dark = "Dark",
}

export interface Theme {
	name: ThemeName;
	color: {
		primary: string;
		secondary: string;
		info: string;
		success: string;
		warning: string;
		danger: string;
		promotional: string;
		accent: string;
		accentSecondary: string;
		background: string;
		text: {
			light: string;
			normal: string;
			dark: string;
		};
	};
	spacing: {
		xs: number;
		sm: number;
		smd: number;
		md: number;
		mdl: number;
		slg: number;
		lg: number;
		lgl: number;
		xl: number;
		xxl: number;
	};
	typography: {
		subtext: number;
		text: number;
		subtitle: number;
		title: number;
		subheading: number;
		heading: number;
	};
}
