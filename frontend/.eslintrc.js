module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'consistent-return': 0,
    'no-bitwise': 'off',
    'operator-linebreak': [
      2,
      'after',
    ],
    'max-len': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': [
      2,
      {
        allow: [
          '_id',
          '__express',
          '__',
        ],
      },
    ],
    'no-undef': 0,
    'no-param-reassign': 0,
    'func-names': [
      'error',
      'never',
    ],
    'import/extensions': ['error', 'always', {
      js: 'never',
    }],
    semi: [
      'error',
      'always',
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js'),
      },
    },
  },
};
