# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR, some ESLint rules, and the following features.

## Features

- [x] React Plugin:
  - [x] [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
    - Uses esbuild and [Babel](https://babeljs.io/), achieving fast HMR with a small package footprint and the flexibility of being able to use the Babel transform pipeline. Without additional Babel plugins, only esbuild is used during builds.
  - [ ] [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
    - Replaces Babel with [SWC](https://swc.rs/) during development. During builds, SWC+esbuild are used when using plugins, and esbuild only otherwise. For big projects that don't require non-standard React extensions, cold start and Hot Module Replacement (HMR) can be significantly faster.
- [x] UI Component Library:
  - [x] [Ant Design](https://ant.design)
- [x] UI State Management Library:
  - [x] [Redux](https://react-redux.js.org)
- [x] HTTP Client Library:
  - [x] [Axios HTTP](https://axios-http.com)
- [x] Static Code Analysis (SCA) Tools:
  - [x] [Prettier](https://prettier.io) - Code Formatter
  - [x] [Vitest](https://vitest.dev) - Vite-Native Testing Framework
- [x] Containerization:
  - [Docker](https://www.docker.com)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
