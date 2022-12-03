module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2019,
		sourceType: "module",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	plugins: ["react", "@typescript-eslint"],
	extends: [
		"prettier",
		"plugin:react/recommended",
		"@react-native-community",
	],
	rules: {
		"prettier/prettier": [
			"error",
			{ singleQuote: false, doubleQuote: true },
		],
		"no-multiple-empty-lines": ["error", { max: 2 }],
		quotes: ["error", "double"],
		"object-curly-spacing": [
			"error",
			"always",
			{ objectsInObjects: false, arraysInObjects: false },
		],
		indent: ["error", "tab"],
		"no-var": "error",
		semi: "error",
		"no-multi-spaces": "error",
		"space-in-parens": "error",
		"prefer-const": "error",
		"no-use-before-define": 0,
		"@typescript-eslint/no-use-before-define": 0,
	},
	globals: {
		React: true,
		JSX: true,
	},
};
