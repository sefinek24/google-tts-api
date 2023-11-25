module.exports = {
	'env': {
		'es6': true,
		'node': true,
		'browser': true,
		'mongo': true,
	},
	'extends': ['eslint:recommended'],
	'parserOptions': {
		'ecmaVersion': 2023,
	},
	'ignorePatterns': ['public/js/stella/slider.js', 'public/js/lazyload.js', 'public/js/bootstrap.bundle.min.js', 'public/js/jquery-3.7.0.min.js'],
	'rules': {
		'arrow-spacing': ['warn', { before: true, after: true }],
		// 'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 'error',
		'comma-style': 'error',
		'curly': ['error', 'multi-line', 'consistent'],
		'dot-location': ['error', 'property'],
		'handle-callback-err': 'off',
		'indent': ['warn', 'tab'],
		'keyword-spacing': 'warn',
		'max-nested-callbacks': ['error', { max: 4 }],
		'max-statements-per-line': ['error', { max: 2 }],
		'no-console': 'off',
		'no-empty': 'warn',
		'no-empty-function': 'error',
		'no-floating-decimal': 'error',
		// 'no-inline-comments': 'error',
		'no-lonely-if': 'error',
		'no-multi-spaces': 'warn',
		'no-multiple-empty-lines': ['warn', { 'max': 4, 'maxEOF': 1, 'maxBOF': 0 }],
		'no-shadow': ['error', { allow: ['err', 'resolve', 'reject'] }],
		'no-trailing-spaces': ['warn'],
		'no-var': 'error',
		'object-curly-spacing': ['error', 'always'],
		'prefer-const': 'error',
		'quotes': ['warn', 'single'],
		'semi': ['warn', 'always'],
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always',
		}],
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': 'warn',
		'yoda': 'error',
		'no-use-before-define': ['error', { functions: false, classes: true }],
		'no-unused-vars': 'warn',
		'wrap-regex': 'error',
		'sort-vars': 'warn',
		'no-unreachable': 'warn',
	},
};