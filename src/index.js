import env from '@babel/preset-env';
import restSpread from '@babel/plugin-proposal-object-rest-spread';

export default function gainCompliancePreset(context, options = {}) {
  const {react, immutable, emotion, targets = {}, modules = 'auto'} = options;

  const envConfig = {
    targets: {
      node: targets.node || 'current',
      ...targets.browser && {browsers: ['last 2 versions']}
    },
    modules,
    exclude: ['transform-regenerator', 'transform-async-to-generator']
  };

  return {
    presets: [
      [env, envConfig],
      ...react ? [
        require('@babel/preset-react'),
        ...emotion ? ['@emotion/babel-preset-css-prop'] : []
      ] : []
    ],
    plugins: [
      [restSpread, {useBuiltIns: true}],
      ...react ? [
        require('@babel/plugin-proposal-class-properties'),
        require('babel-plugin-inline-react-svg').default,
        'polished'
      ] : [],
      ...immutable ? [
        [require('babel-plugin-extensible-destructuring').default, {mode: 'optout', impl: 'immutable'}]
      ] : []
    ]
  };
}
