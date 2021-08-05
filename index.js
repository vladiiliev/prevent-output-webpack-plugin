/**
 * Prevent saving output files and stop assets from being emitted by Webpack
 */

class PreventOutputWebpackPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap('PreventOutputWebpackPlugin', (compilation) => {
            compilation.hooks.afterProcessAssets.tap('PreventOutputWebpackPlugin', (assets) => {
                Object.keys(assets).forEach((asset) => delete assets[asset]);
            });
        });
    }
}

module.exports = PreventOutputWebpackPlugin;
