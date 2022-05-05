# Prettier shareable config for the [SweetAlert2](https://github.com/sweetalert2/sweetalert2) JS/TS coding style

[![npm version](https://img.shields.io/npm/v/@sweetalert2/prettier-config.svg)](https://www.npmjs.com/package/@sweetalert2/prettier-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/sweetalert2/prettier-config/blob/master/CHANGELOG.md)


> Prettier [shareable config](https://prettier.io/docs/en/configuration.html#sharing-configurations) for the [SweetAlert2](https://github.com/sweetalert2/sweetalert2) JS/TS coding style


## Installation

```
$ npm install --save-dev @sweetalert2/prettier-config
```

or

```
$ yarn add --dev @sweetalert2/prettier-config
```


## Usage

Once the `@sweetalert2/prettier-config` package is installed, you can use it by specifying `@sweetalert2/prettier-config` in `.prettierrc.js`:

```js
module.exports = {
  ...require("@sweetalert2/prettier-config"),
  // Additional, per-project rules...
}
```
