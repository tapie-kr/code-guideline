# TAPIE Code Style Standards

<br>

## Installation

### npm

```sh
npm install --save-dev @tapie-kr/code-guideline
```

### yarn

```sh
yarn add --dev @tapie-kr/code-guideline
```

### pnpm

```sh
pnpm add -D @tapie-kr/code-guideline
```

<br>

## How to use

1. Create or update your `eslint.config.mjs` file to extend the TAPIE code style configuration:

```js
import eslintConfig from '@tapie-kr/code-guideline/eslint';

export default eslintConfig;
```

2. Create or update your `prettier.config.mjs` or `.prettierrc.mjs` file to extend the TAPIE Prettier configuration:

```js
import prettierConfig from '@tapie-kr/code-guideline/prettier';

export default prettierConfig;
```

3. Ensure your `package.json` includes the necessary scripts to run ESLint and Prettier:

```json
{
  "scripts": {
    "format": "npm run lint && npm run prettier",
    "prettier": "prettier --write . --log-level warn",
    "lint": "eslint . --fix",
    "lint:dry": "eslint . --fix-dry-run"
  }
}
```

## License

[MIT](https://github.com/tapie-kr/code-guideline/blob/main/LICENSE)
