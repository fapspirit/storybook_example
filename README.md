# storybook example
Example for this pull request https://github.com/storybooks/vue-cli-plugin-storybook/pull/30


I added `DefinePlugin` in `vue.config.js` which changes `process.env.HOST` to `https://example.com` in `MyButton` component. This setup works perfectly when running `yarn run serve`. However, when running `yarn run serve:storybook`, it's doesn't work at all.


## Steps to reproduce:
1. Run `yarn run serve`
2. Open index page. On top of the page you will see something like this: `HOST: https://example.com Correct?`, which says that `DefinePlugin` works as expected
3. Run `yarn run serve:storybook`
4. Open MyButton's story. You will see `HOST: Correct?`, which says that `DefinePlugin` doesn't work
5. To prove that problem is inside a `vue-cli-plugin-storybook`, I added `DefinePlugin` in storybook's custom webpack config, which you can find here: `/config/storybook/webpack.config.js`. Uncomment code insde exported function and run storybook again. You will see that `DefinePlugin` works as expected.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
