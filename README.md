# backbone-starter

[![CircleCI](https://circleci.com/gh/jbuget/backbone-starter.svg?style=svg)](https://circleci.com/gh/jbuget/backbone-starter)

A starter project for Backbone.js with Webpack, Handlebars, Bootstrap and other modern libraries.

## Less than 2 minutes tutorial

```js
$ git clone git@github.com:jbuget/backbone-starter.git
$ cd backbone-starter
$ npm install
$ npm start
$ open "http://localhost:8080"
```

## Frameworks, libraries & tools

- [EcmaScript6](http://www.ecma-international.org/ecma-262/6.0/) (with [Babel](https://babeljs.io/))
- [Backbone.js](http://backbonejs.org/)
- [Lodash](https://lodash.com/)
- [Handlebars](http://handlebarsjs.com/)
- [Webpack](https://webpack.github.io/)
- [ESLint](http://eslint.org/) (with [Airbnb base config](https://www.npmjs.com/package/eslint-config-airbnb-base))
- [Mocha](https://mochajs.org/) (with [Chai](http://chaijs.com/))
- [Testem](https://github.com/testem/testem)


## NPM tasks

### Main tasks

#### `$ npm install`

Download the project dependencies.

#### `$ npm start`

Run the application in `development` mode with dev tools and sources watching.

#### `$ npm test`

Run the tests in `CI` mode (only one execution with no sources watching).

### Other tasks

#### `$ npm run build-dev`

Package the application in `/build/dist` directory in `development` mode.

#### `$ npm run build-prod`

Package the application in `/build/dist` directory in `production` mode.

#### `$ npm run build-test`

Package the application in `/build/test` directory in `test` mode.

#### `$ npm run test-dev`

Run the tests  in `development` mode with sources watching.

