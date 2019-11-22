module.exports = {
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "plugins": ["mocha"],
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module"
  },
  "rules": {
    "semi": ["error", "never"],
    "no-console": ["off"],
    "no-unused-vars": 1,
    "no-var": "error",
    "eqeqeq": ["error", "always"],
    "react/prop-types": ["off"]
  },
  "env": {
    "node": true,
    "mocha": true
  },
  "globals": {
    "sessionStorage": true,
    "document": true,
    "Promise": true,
    "verbose": true
  },
  "settings": {
    "react": {
      "version": "16"
    }
  }
}
