module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        embeddedLanguageFormatting: 'auto',
        enable: true,
        enableDebugLogs: false,
        endOfLine: 'auto',
        htmlWhitespaceSensitivity: 'css',
        ignorePath: '.prettierignore',
        insertPragma: false,
        jsxBracketSameLine: false,
        jsxSingleQuote: true,
        printWidth: 80,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        requireConfig: false,
        requirePragma: false,
        resolveGlobalModules: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
        vueIndentScriptAndStyle: false,
        withNodeModules: false,
      },
    ],
  },
};
