module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'autofix',
    'react',
    'react-hooks',
    'sort-imports-es6-autofix',
    'sort-keys-fix',
  ],
  'rules': {
    'eol-last': 0,
    'guard-for-in': 0,
    'max-len': 0,
    'no-multiple-empty-lines': ['error', {'max': 1, 'maxEOF': 0}],
    'prefer-promise-reject-errors': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-react': 'off',
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'require-jsdoc': 0,
    'sort-imports-es6-autofix/sort-imports-es6': [2, {
      'ignoreCase': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
    }],
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
  'settings': {
    react: {
      version: 'detect',
    },
  },
};
