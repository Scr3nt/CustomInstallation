# Creation de l'app

```
npx create-expo-app --template

✔ Choose a template: › Blank (TypeScript)

✔ What is your app named? … CustomInstallation
```

```
npx expo prebuild

📝  Android package Learn more: https://expo.fyi/android-package

✔ What would you like your Android package name to be? … com.scr3nt.CustomInstallation


📝  iOS Bundle Identifier Learn more: https://expo.fyi/bundle-identifier

✔ What would you like your iOS bundle identifier to be? … com.scr3nt.CustomInstallation
```

Pour la lancer

```
npm run ios
```

# Config de l'app

## Routes absolues

Suivre ce lien : https://forums.expo.dev/t/solved-absolute-paths-with-expo-and-typescript/50526/3

`tsconfig.json`

```
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "jsx": "react-native",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
    },
  }
}
```

`babel.config.js`

```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ".",
          alias: {
            "@": "./",
          },
        },
      ],
    ],
  };
};
```

## ESLint/Prettier

### Installation

Suivre ce lien : https://dev-yakuza.posstree.com/en/react-native/eslint-prettier-husky-lint-staged/

```
npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · node
✔ How would you like to define a style for your project? · prompt
✔ What format do you want your config file to be in? · JavaScript
✔ What style of indentation do you use? · 4
✔ What quotes do you use for strings? · double
✔ What line endings do you use? · unix
✔ Do you require semicolons? · No / Yes
```

Supprimer le `package-lock.json` (on veut utiliser `yarn`)

Ensuite faire

`yarn add eslint-plugin-react-hooks --dev`

`yarn add --dev eslint prettier @react-native-community/eslint-config`

`yarn add eslint-plugin-prettier --dev`

`yarn add --dev @trivago/prettier-plugin-sort-imports`

Ne pas oublier de faire depuis VSCode :

`Command + shift + p` et ensuite séléctionner `Developer: Reload Window`

### Configuration

`.eslintrc.js`

```
module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "@react-native-community",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ["error", "double", { avoidEscape: true }],
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    "no-empty-function": "error",
    "@typescript-eslint/no-empty-function": "error",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "error",
    "react/no-array-index-key": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "prefer-const": "error",
    "react-native/no-inline-styles": "error",
    "no-console": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [".eslintrc.js"],
};
```

`package.json`

```
"scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "lint": "eslint ."
  },
```

Utiliser l'extension ESLint sur VSCode

et ajouter ceci dans le fichier de configuration de VSCode

(accessible en faisant : `Command + shift + p` et séléctionner `Preferences: Open User Settings (JSON)`)

```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
```

Créer un fichier `.prettierrc.js` à la racine et ajouter

```
module.exports = {
    importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
```

Installer l'extension Prettier sur VSCode

et ajouter ceci dans le fichier de configuration de VSCode

(accessible en faisant : `Command + shift + p` et séléctionner `Preferences: Open User Settings (JSON)`)

```
"editor.formatOnSave": true,
```

## Husky

`yarn add husky --dev`

`yarn add lint-staged --dev`

`npx husky install`

```
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```

Modifier `.husky/pre-commit`

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

Ajouter cela en dessous de `devDependencies` dans `package.json`

```
"lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix"
    ]
  },
```

Ajouter cela dans `scripts` dans `package.json`

```
"lint": "eslint .",
"prepare": "husky install",
"postinstall": "husky install"
```
