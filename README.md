# prevent-output-webpack-plugin
Prevent saving output files and stop assets from being emitted by Webpack.

## Install

```shell
npm install --save-dev prevent-output-webpack-plugin
```
```shell
yarn add -D prevent-output-webpack-plugin
```

## Usage
```javascript
const PreventOutputWebpackPlugin = require('prevent-output-webpack-plugin');

module.exports = {
    plugins: [
        new PreventOutputWebpackPlugin()
    ]
}
```
