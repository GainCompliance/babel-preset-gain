# babel-preset-gain

babel preset for our projects

<!--status-badges start -->

[![Build Status][ci-badge]][ci-link]

<!--status-badges end -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


* [Usage](#usage)
  * [Installation](#installation)
  * [Via `.babelrc` for internal development purposes](#via-babelrc-for-internal-development-purposes)
    * [In React projects](#in-react-projects)
  * [Via Rollup](#via-rollup)
    * [In projects that target both node and browsers](#in-projects-that-target-both-node-and-browsers)
    * [In React projects](#in-react-projects-1)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

<!--consumer-badges start -->

[![npm][npm-badge]][npm-link]
[![MIT license][license-badge]][license-link]

<!--consumer-badges end -->

### Installation

```sh
$ npm install @gaincompliance/babel-preset --save-dev
```

### Via [`.babelrc`](https://babeljs.io/docs/usage/babelrc/) for internal development purposes

This will target the current version of node and transpile my preferred upcoming
features.

```json
{
  "presets": ["@gaincompliance"]
}
```

#### In React projects

This will target the current node version, but will also transpile React features

```json
{
  "presets": [["@gaincompliance", {"react": true}]]
}
```

Optionally, also transpile immutable.js functionality

```json
{
  "presets": [["@gaincompliance", {"react": true, "immutable": true}]]
}
```

### Via [Rollup](https://rollupjs.org)

* Prevent transpilation of module imports/exports so `Rollup` can optimize properly
* Transpile to the lowest common denominator of your expected consumers' execution
  environments

In the `rollup.config.js`:

```js
export default {
  ...
  plugins: [
    babel({
      babelrc: false,
      exclude: ['./node_modules/**'],
      presets: [['@gaincompliance', {targets: {node: 8}, modules: false}]],
    }),
    ...
  ],
  ...
};

```

#### In projects that target both node and browsers

```js
export default {
  ...
  plugins: [
    babel({
      babelrc: false,
      exclude: ['./node_modules/**'],
      presets: [['@gaincompliance', {targets: {node: 8, browser: true}, modules: false}]],
    }),
    ...
  ],
  ...
};

```

#### In React projects

```js
export default {
  ...
  plugins: [
    babel({
      babelrc: false,
      exclude: ['./node_modules/**'],
      presets: [['@gaincompliance', {
        targets: {node: 8, browser: true},
        react: true,
        modules: false
      }]],
    }),
    ...
  ],
  ...
};

```

Optionally, also transform immutable.js functionality

```js
export default {
  ...
  plugins: [
    babel({
      babelrc: false,
      exclude: ['./node_modules/**'],
      presets: [['@gaincompliance', {
        targets: {node: 8, browser: true},
        react: true,
        immutable: true,
        modules: false
      }]],
    }),
    ...
  ],
  ...
};


```

Optionally, disable transpilation of `emotion` (for unit testing, for example)

```js
export default {
  ...
  plugins: [
    babel({
      babelrc: false,
      exclude: ['./node_modules/**'],
      presets: [['@gaincompliance', {
        targets: {node: 8, browser: true},
        react: true,
        emotion: false,
        modules: false
      }]],
    }),
    ...
  ],
  ...
};

```

<!--contribution-badges start -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![PRs Welcome][PRs-badge]][PRs-link]
[![Dependabot][dependabot-badge]][dependabot-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[npm-link]: https://www.npmjs.com/package/babel-preset-gain

[npm-badge]: https://img.shields.io/npm/v/babel-preset-gain.svg

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/GainCompliance/babel-preset-gain.svg

[ci-link]: https://travis-ci.com/GainCompliance/babel-preset-gain

[ci-badge]: https://img.shields.io/travis/com/GainCompliance/babel-preset-gain.svg?branch=master

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[dependabot-link]: https://dependabot.com/

[dependabot-badge]: https://badgen.net/dependabot/GainCompliance/babel-preset-gain/?icon=dependabot
