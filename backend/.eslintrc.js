module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"prettier",
	],
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts"],
		},
		// This part is required to work with eslint, the rest is already setup to use import
		"import/resolver": {
			typescript: {},
		},
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		project: "./tsconfig.json",
		tsconfigRootDir: "./",
	},
	plugins: ["@typescript-eslint", "import"],
	env: {
		es6: true,
		node: true,
	},
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
};
